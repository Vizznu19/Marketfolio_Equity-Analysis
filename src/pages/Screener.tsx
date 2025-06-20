import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TradingViewFullScreener: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current) ref.current.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: 550,
      defaultColumn: 'performance',
      defaultScreen: 'most_capitalized',
      market: 'india',
      showToolbar: true,
      colorTheme: 'dark',
      locale: 'en',
    });
    if (ref.current) ref.current.appendChild(script);
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex justify-center items-start pt-8">
      <div ref={ref} className="w-full max-w-6xl" />
    </div>
  );
};

export default function Screener() {
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const toolsDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
    }
    if (toolsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toolsDropdownOpen]);

  return (
    <div className="min-h-screen text-gray-100 bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/90 border-b border-gray-800">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-white">
            <Link to="/" className="hover:text-blue-400 transition-colors">Marketfolio</Link>
          </div>
          <nav className="flex items-center space-x-3 sm:space-x-6">
            <Link to="/#reports-section" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base px-4 py-2 rounded-md">
              Analysis
            </Link>
            <div
              className="relative"
              ref={toolsDropdownRef}
              onMouseEnter={() => {
                if (dropdownCloseTimeout.current) {
                  clearTimeout(dropdownCloseTimeout.current);
                  dropdownCloseTimeout.current = null;
                }
                setToolsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownCloseTimeout.current = setTimeout(() => {
                  setToolsDropdownOpen(false);
                }, 300);
              }}
            >
              <button
                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                tabIndex={0}
                type="button"
              >
                Tools
              </button>
              {toolsDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-36 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50"
                >
                  <Link
                    to="/screener"
                    className="block px-4 py-2 text-gray-300 hover:bg-blue-500 hover:text-white rounded-md transition-colors text-sm"
                  >
                    Screener
                  </Link>
                  <Link
                    to="/news"
                    className="block px-4 py-2 text-gray-300 hover:bg-blue-500 hover:text-white rounded-md transition-colors text-sm"
                  >
                    News
                  </Link>
                </div>
              )}
            </div>
            <a
              href="#contact-section"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base px-4 py-2 rounded-md"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <div className="max-w-4xl mx-auto mt-8 mb-4 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Screener</h1>
        <p className="text-gray-300 text-base sm:text-lg">Explore and filter stocks in the Indian market using real-time data and advanced screening tools below.</p>
      </div>
      <TradingViewFullScreener />
    </div>
  );
} 