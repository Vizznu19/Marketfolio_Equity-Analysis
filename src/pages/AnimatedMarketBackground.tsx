import React, { useRef, useEffect } from "react";

const ARROW_SIZE = 32;
const CANDLE_WIDTH = 16;
const CANDLE_HEIGHT = 40;
const NUM_GREEN_ARROWS = 3;
const NUM_RED_ARROWS = 3;
const NUM_CANDLES = 6;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

// Arrow and candlestick types
interface Arrow {
  x: number;
  y: number;
  speed: number;
  direction: "up" | "down";
}
interface Candle {
  x: number;
  y: number;
  speed: number;
  isGreen: boolean;
  bodyHeight: number;
  wickHeight: number;
}

const AnimatedMarketBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const arrows = useRef<Arrow[]>([]);
  const candles = useRef<Candle[]>([]);

  // Initialize arrows and candles
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Green arrows (up)
    const greenArrows = Array.from({ length: NUM_GREEN_ARROWS }, () => ({
      x: randomBetween(0, w),
      y: randomBetween(0, h),
      speed: randomBetween(0.5, 1.2),
      direction: "up" as const,
    }));
    // Red arrows (down)
    const redArrows = Array.from({ length: NUM_RED_ARROWS }, () => ({
      x: randomBetween(0, w),
      y: randomBetween(0, h),
      speed: randomBetween(0.5, 1.2),
      direction: "down" as const,
    }));
    arrows.current = [...greenArrows, ...redArrows];
    candles.current = Array.from({ length: NUM_CANDLES }, (_, i) => ({
      x: randomBetween(0, w),
      y: randomBetween(-h, h),
      speed: randomBetween(0.3, 0.8),
      isGreen: i % 2 === 0,
      bodyHeight: randomBetween(20, CANDLE_HEIGHT),
      wickHeight: randomBetween(10, 30),
    }));
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", handleResize);

    // Draw a professional arrow: shaft + sharp chevron head
    function drawArrow(x: number, y: number, direction: "up" | "down") {
      ctx.save();
      ctx.translate(x, y);
      if (direction === "down") ctx.rotate(Math.PI); // Red arrow faces down
      // Glow effect
      ctx.shadowColor = direction === "down" ? "#ff3c3c" : "#3cdc78";
      ctx.shadowBlur = 18;
      // Draw shaft (tail)
      ctx.beginPath();
      ctx.moveTo(0, ARROW_SIZE * 0.8); // Start at base
      ctx.lineTo(0, 0); // Go to tip (arrowhead position)
      ctx.strokeStyle = direction === "down" ? "#ff3c3c" : "#3cdc78";
      ctx.lineWidth = 6;
      ctx.stroke();
      // Draw filled triangle arrowhead at the tip (0,0)
      ctx.beginPath();
      ctx.moveTo(0, -ARROW_SIZE * 0.32); // Tip of arrowhead
      ctx.lineTo(-ARROW_SIZE * 0.22, 0); // Left base
      ctx.lineTo(ARROW_SIZE * 0.22, 0); // Right base
      ctx.closePath();
      ctx.fillStyle = direction === "down" ? "#ff3c3c" : "#3cdc78";
      ctx.globalAlpha = 0.95;
      ctx.fill();
      ctx.restore();
    }

    // Draw animated chart graffiti (subtle line chart)
    function drawChartGraffiti() {
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "#3cdc78";
      ctx.lineWidth = 2;
      // Example: animated line chart
      const points = [];
      const chartWidth = w * 0.8;
      const chartHeight = h * 0.25;
      const offsetX = w * 0.1;
      const offsetY = h * 0.7;
      const t = Date.now() * 0.0005;
      for (let i = 0; i <= 20; i++) {
        const x = offsetX + (i / 20) * chartWidth;
        // Sine wave with some noise for a "market" look
        const y = offsetY - Math.sin(t + i * 0.5) * chartHeight * 0.3 - Math.sin(t * 0.7 + i) * 10;
        points.push({ x, y });
      }
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
      // Draw glowing dots at some points
      for (let i = 0; i < points.length; i += 4) {
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = "#3cdc78";
        ctx.globalAlpha = 0.25;
        ctx.shadowColor = "#3cdc78";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.globalAlpha = 0.18;
        ctx.shadowBlur = 0;
      }
      ctx.restore();
    }

    function drawCandle(x: number, y: number, isGreen: boolean, bodyHeight: number, wickHeight: number) {
      // Wick
      ctx.beginPath();
      ctx.moveTo(x, y - wickHeight);
      ctx.lineTo(x, y + bodyHeight);
      ctx.strokeStyle = isGreen ? "rgba(60,220,120,0.6)" : "rgba(255,60,60,0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();
      // Body
      ctx.beginPath();
      ctx.rect(x - CANDLE_WIDTH / 2, y, CANDLE_WIDTH, bodyHeight);
      ctx.fillStyle = isGreen ? "rgba(60,220,120,0.4)" : "rgba(255,60,60,0.4)";
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      // Draw chart graffiti first
      drawChartGraffiti();
      // Animate arrows
      arrows.current.forEach((arrow) => {
        drawArrow(arrow.x, arrow.y, arrow.direction);
        if (arrow.direction === "down") {
          arrow.y += arrow.speed;
          if (arrow.y > h + ARROW_SIZE) {
            arrow.y = -ARROW_SIZE;
            arrow.x = randomBetween(0, w);
          }
        } else {
          arrow.y -= arrow.speed;
          if (arrow.y < -ARROW_SIZE) {
            arrow.y = h + ARROW_SIZE;
            arrow.x = randomBetween(0, w);
          }
        }
      });
      // Animate candles
      candles.current.forEach((candle) => {
        drawCandle(candle.x, candle.y, candle.isGreen, candle.bodyHeight, candle.wickHeight);
        candle.y += candle.speed;
        if (candle.y > h + CANDLE_HEIGHT) {
          candle.y = -CANDLE_HEIGHT;
          candle.x = randomBetween(0, w);
          candle.bodyHeight = randomBetween(20, CANDLE_HEIGHT);
          candle.wickHeight = randomBetween(10, 30);
        }
      });
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "#0a0a0a",
      }}
    />
  );
};

export default AnimatedMarketBackground; 