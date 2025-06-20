import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function News() {
  const [toolsDropdownOpen, setToolsDropdownOpen] = React.useState(false);
  const toolsDropdownRef = React.useRef<HTMLDivElement>(null);
  const dropdownCloseTimeout = React.useRef<NodeJS.Timeout | null>(null);

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

  // Inject Elfsight script once
  useEffect(() => {
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">News</h1>
        <p className="text-gray-300 text-base sm:text-lg">Stay updated with the latest financial news and market trends from around the world.</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="elfsight-app-e996a348-5585-48e9-abd8-345e4a39d6b0 w-full max-w-4xl" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
} 