
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDown, Download, Eye, X } from "lucide-react";

// Sample report data
const analysisReports = [
  {
    id: 1,
    title: "Q4 Analysis of TechCorp Inc.",
    date: "December 15, 2024",
    synopsis: "Comprehensive analysis of TechCorp's quarterly performance showing strong growth in cloud services and AI initiatives.",
    content: `
      <div class="space-y-6">
        <h1 class="text-3xl font-bold mb-4">Q4 Analysis of TechCorp Inc.</h1>
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Executive Summary</h2>
          <p>TechCorp Inc. has demonstrated exceptional performance in Q4 2024, with revenue growth of 28% year-over-year, driven primarily by their cloud infrastructure and AI services divisions.</p>
          
          <h2 class="text-2xl font-semibold">Key Metrics</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Revenue: $2.4B (+28% YoY)</li>
            <li>Net Income: $340M (+35% YoY)</li>
            <li>Operating Margin: 18.5% (vs 16.2% previous quarter)</li>
            <li>Cloud Services Growth: +45% YoY</li>
          </ul>
          
          <h2 class="text-2xl font-semibold">Investment Recommendation</h2>
          <p>Based on our analysis, we maintain a <strong>BUY</strong> rating with a target price of $185 per share, representing a 15% upside from current levels.</p>
          
          <h2 class="text-2xl font-semibold">Risk Factors</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Increasing competition in cloud services</li>
            <li>Regulatory scrutiny on AI technologies</li>
            <li>Potential economic headwinds affecting enterprise spending</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "Healthcare Sector Deep Dive: MediLife Corp",
    date: "November 28, 2024",
    synopsis: "In-depth analysis of MediLife's pharmaceutical pipeline and market positioning in the evolving healthcare landscape.",
    content: `
      <div class="space-y-6">
        <h1 class="text-3xl font-bold mb-4">Healthcare Sector Deep Dive: MediLife Corp</h1>
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Company Overview</h2>
          <p>MediLife Corp stands as a leading pharmaceutical company with a robust pipeline of innovative treatments focusing on oncology and rare diseases.</p>
          
          <h2 class="text-2xl font-semibold">Pipeline Analysis</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Phase III oncology drug showing 65% efficacy improvement</li>
            <li>FDA breakthrough therapy designation for rare disease treatment</li>
            <li>12 drugs in various clinical phases</li>
          </ul>
          
          <h2 class="text-2xl font-semibold">Financial Highlights</h2>
          <p>Strong balance sheet with $1.8B in cash reserves and minimal debt burden. R&D investment represents 22% of revenue, demonstrating commitment to innovation.</p>
          
          <h2 class="text-2xl font-semibold">Valuation & Recommendation</h2>
          <p>Trading at 0.8x PEG ratio, significantly undervalued compared to peers. <strong>STRONG BUY</strong> with 12-month target of $95.</p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Energy Transition Report: GreenPower Systems",
    date: "October 10, 2024",
    synopsis: "Strategic analysis of GreenPower's position in the renewable energy market and growth opportunities.",
    content: `
      <div class="space-y-6">
        <h1 class="text-3xl font-bold mb-4">Energy Transition Report: GreenPower Systems</h1>
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Market Position</h2>
          <p>GreenPower Systems has established itself as a leader in utility-scale solar and wind projects, with over 5GW of installed capacity across North America.</p>
          
          <h2 class="text-2xl font-semibold">Growth Catalysts</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>$2.1B project backlog secured through 2026</li>
            <li>Strategic partnerships with major utilities</li>
            <li>Battery storage integration capabilities</li>
            <li>Favorable regulatory environment and tax incentives</li>
          </ul>
          
          <h2 class="text-2xl font-semibold">Financial Performance</h2>
          <p>Consistent revenue growth of 35% CAGR over the past 3 years. EBITDA margins expanding due to operational efficiency improvements.</p>
          
          <h2 class="text-2xl font-semibold">Investment Thesis</h2>
          <p>Well-positioned to benefit from the global energy transition. <strong>BUY</strong> rating with fair value estimate of $42 per share.</p>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Fintech Revolution: PayStream Analytics",
    date: "September 22, 2024",
    synopsis: "Comprehensive review of PayStream's payment processing technology and competitive advantages in digital finance.",
    content: `
      <div class="space-y-6">
        <h1 class="text-3xl font-bold mb-4">Fintech Revolution: PayStream Analytics</h1>
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Business Model Innovation</h2>
          <p>PayStream has revolutionized payment processing with their AI-driven fraud detection and real-time transaction analytics platform.</p>
          
          <h2 class="text-2xl font-semibold">Competitive Advantages</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>99.7% fraud detection accuracy with minimal false positives</li>
            <li>Sub-second transaction processing globally</li>
            <li>Proprietary blockchain-based settlement network</li>
            <li>Strong moat through network effects</li>
          </ul>
          
          <h2 class="text-2xl font-semibold">Market Opportunity</h2>
          <p>Total addressable market of $180B in payment processing, growing at 12% annually. PayStream's current market share of 3% leaves significant room for expansion.</p>
          
          <h2 class="text-2xl font-semibold">Recommendation</h2>
          <p>Exceptional growth trajectory with strong fundamentals. <strong>STRONG BUY</strong> with price target of $128 per share.</p>
        </div>
      </div>
    `
  }
];

const Index = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const scrollToReports = () => {
    document.getElementById('reports-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handlePreview = (report) => {
    setSelectedReport(report);
  };

  const handleDownloadPDF = async (report) => {
    // Create a temporary div with the report content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = `
      <div style="font-family: Inter, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.6; color: #1a202c;">
        ${report.content}
      </div>
    `;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);

    try {
      // Use html2pdf if available, otherwise show alert
      if (window.html2pdf) {
        const filename = report.title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.pdf';
        await window.html2pdf()
          .from(tempDiv)
          .set({
            margin: 1,
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          })
          .save();
      } else {
        alert('PDF download functionality requires html2pdf.js library. Please add the CDN link to your HTML head.');
      }
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF download failed. Please try again.');
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/90 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Marketfolio
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#reports-section" onClick={scrollToReports} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Analysis
            </a>
            <Button 
              onClick={() => setShowContact(true)}
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Clarity in Complexity.<br />
            <span className="text-blue-400">Elite Equity Analysis.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            In-depth, data-driven research reports to inform your investment strategy.
          </p>
          <Button 
            onClick={scrollToReports}
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            View Research
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Analysis Reports Section */}
      <section id="reports-section" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Latest Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisReports.map((report) => (
              <Card key={report.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-2">
                    {report.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm mb-4">
                    {report.date}
                  </CardDescription>
                  <p className="text-gray-300 leading-relaxed">
                    {report.synopsis}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => handlePreview(report)}
                      variant="outline" 
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button 
                      onClick={() => handleDownloadPDF(report)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Bolt AI. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Preview Modal */}
      <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-gray-700 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-4">
              {selectedReport?.title}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] pr-4">
            {selectedReport && (
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedReport.content }}
              />
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="max-w-md bg-gray-900 border-gray-700 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-300 mb-2">Email</h3>
              <p className="text-blue-400">contact@boltai.example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
