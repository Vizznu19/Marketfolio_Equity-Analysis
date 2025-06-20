import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDown, Download, Eye, X } from "lucide-react";
import AnimatedMarketBackground from "./AnimatedMarketBackground";
import { Link } from 'react-router-dom';

// Type declaration for html2pdf
declare global {
  interface Window {
    html2pdf: any;
  }
}

// Sample report data
const analysisReports = [
  {
    id: 1,
    title: "Power Grid Corporation of India",
    date: "June 15, 2025",
    synopsis: "Comprehensive evaluation of Power Grid Corporation of India's transmission infrastructure leadership and financial stability in the power sector.",
    content: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Power Grid Corporation of India Ltd - Equity Analysis Report</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #003087;
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .recommendation-box {
            background-color: #e6f3fa;
            border-left: 5px solid #003087;
            padding: 15px;
            margin: 20px 0;
            font-size: 16px;
        }
        .recommendation-box strong {
            color: #003087;
        }
        h1, h2, h3 {
            color:rgb(0, 0, 0);
        }
        h2 {
            border-bottom: 2px solid #003087;
            padding-bottom: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .trend-positive {
            color: green;
            font-weight: bold;
        }
        .trend-negative {
            color: red;
            font-weight: bold;
        }
        .trend-neutral {
            color: orange;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            margin-top: 40px;
        }
        .page-break {
            page-break-before: always;
        }
        @media print {
            .container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Power Grid Corporation of India Ltd - Equity Analysis Report</h1>
        <p>Prepared by Vishnu</p>
        <p>Screener.in Data Analysis</p>
    </div>
    <div class="container">
        <div class="recommendation-box">
            <strong>Recommendation:</strong> BUY<br>
            <strong>Target Price:</strong> ₹335 (17.2% upside)<br>
            <strong>Investment Horizon:</strong> 16-20 months
        </div>

        <h2>1. Company Overview</h2>
        <p>Power Grid Corporation of India Ltd (PGCIL), a Maharatna PSU under the Ministry of Power, is India's largest electric power transmission utility, headquartered in Gurugram. It operates in the power transmission sector, managing ~85% of India's Inter-State Transmission System (ISTS), alongside telecom services and consultancy. With a market share of ~50% in India's transmission sector, PGCIL is critical to the national grid.</p>
        <p>Recent developments include a ₹131.68 crore capex approval for the National Unified Network Management System (N-UNMS) by February 2027, commissioning of the Gujarat transmission project in April 2025, and a ₹5.43 lakh fine by BSE for non-submission of bond interest information. Q4 FY25 showed a marginal net profit decline of 0.56% to ₹4,142.87 crore. The company secured ₹92,000 crore in competitive bidding projects.</p>
        <p><strong>Investment Recommendation</strong><br>
        Recommendation: BUY<br>
        Target Price: ₹335 (17.2% upside)<br>
        Investment Horizon: 16-20 months</p>

        <div class="page-break"></div>

        <h2>2. Quantitative Analysis</h2>
        <h3>a) Market Valuation and Price Metrics</h3>
        <table>
            <tr><th>Metric</th><th>Current Value (Jun 2025)</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Market Capitalization</td><td>₹2,65,532 Cr</td><td>₹2,80,000 Cr</td><td>₹2,10,000 Cr</td><td>₹1,90,000 Cr</td><td>₹1,60,000 Cr</td><td>₹1,30,000 Cr</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Current Stock Price</td><td>₹285.70</td><td>₹300.00</td><td>₹225.00</td><td>₹205.00</td><td>₹175.00</td><td>₹140.00</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Price-to-Earnings (P/E) Ratio</td><td>18.21</td><td>18.00</td><td>14.00</td><td>13.00</td><td>12.00</td><td>10.00</td><td class="trend-positive">Increasing</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> PGCIL's market capitalization has grown at a 5-year CAGR of 15.3%, driven by a stock price increase (5-year CAGR of 15.4%). The P/E ratio rose to 18.21, reflecting stable earnings and investor confidence.</p>[](https://www.screener.in/company/POWERGRID/consolidated/)
        <p><strong>Commentary:</strong> The stock price growth aligns with government's power sector investments and PGCIL's project wins. The P/E ratio is reasonable for a utility, but higher than historical lows, indicating moderate valuation pressure.</p>
        <p><strong>Key Takeaways:</strong> Increasing market cap reflects PGCIL's dominance, but the rising P/E suggests limited margin of safety. Investors should monitor project execution and regulatory risks.</p>

        <h3>b) Profitability and Returns</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Return on Equity (ROE)</td><td>17.60%</td><td>18.00%</td><td>17.00%</td><td>16.00%</td><td>15.00%</td><td class="trend-positive">Stable with slight improvement</td></tr>
            <tr><td>Return on Capital Employed (ROCE)</td><td>12.40%</td><td>12.00%</td><td>11.50%</td><td>11.00%</td><td>10.00%</td><td class="trend-positive">Improving</td></tr>
            <tr><td>Net Profit Margin</td><td>33.90%</td><td>33.00%</td><td>34.00%</td><td>30.00%</td><td>28.00%</td><td class="trend-positive">Improving</td></tr>
            <tr><td>Operating Profit Margin</td><td>55.00%</td><td>54.00%</td><td>53.00%</td><td>52.00%</td><td>50.00%</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> ROE and ROCE averaged 16.72% and 11.38% over five years, with slight improvements in FY24. Net and operating profit margins rose to 33.90% and 55.00%, driven by operational efficiency.</p>
        <p><strong>Commentary:</strong> High margins reflect regulated returns and low operating costs. ROE is above the industry median (~12%), but project delays and regulatory changes slightly impacted FY24. Stable profitability is a strength.</p>
        <p><strong>Key Takeaways:</strong> Strong margins and returns highlight financial health, but regulatory risks and execution delays are concerns. Continued efficiency gains could sustain profitability.</p>

        <h3>c) Growth Metrics</h3>
        <table>
            <tr><th>Metric</th><th>5-Year CAGR</th><th>3-Year CAGR</th><th>Trend</th></tr>
            <tr><td>Revenue Growth Rate</td><td>3.94%</td><td>4.50%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>Earnings Per Share (EPS) Growth Rate</td><td>6.00%</td><td>5.00%</td><td class="trend-neutral">Stable</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Revenue growth remained modest at a 5-year CAGR of 3.94%, below the industry average of 11.07%. EPS growth was stable at 6.00%, reflecting consistent profitability.</p>[](https://www.tickertape.in/stocks/power-grid-corporation-of-india-PGRD)
        <p><strong>Commentary:</strong> Low revenue growth reflects delays in project commissioning and regulatory constraints. EPS growth outpaced revenue due to cost control, but growth lags peers due to capital-intensive operations.</p>
        <p><strong>Key Takeaways:</strong> Stable but modest growth highlights regulatory challenges. Accelerated project execution and new project wins could boost growth.</p>

        <h3>d) Balance Sheet Strength</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Debt-to-Equity Ratio</td><td>1.50</td><td>1.60</td><td>1.70</td><td>1.80</td><td>1.90</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> The debt-to-equity ratio improved from 1.90 in FY20 to 1.50 in FY24, reflecting debt reduction efforts.</p>
        <p><strong>Commentary:</strong> High leverage is typical for utilities, but PGCIL's ratio is above the industry median (~1.20). A strong interest coverage ratio supports debt servicing, but significant debt levels remain a concern.</p>[](https://in.marketscreener.com/quote/stock/POWER-GRID-CORPORATION-OF-9059859/ratings/)
        <p><strong>Key Takeaways:</strong> Improving leverage enhances stability, but high debt poses risks. Efficient capex and cash flows are critical for debt management.</p>

        <h3>e) Cash Flow Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Cash Flow from Operations (₹ Cr)</td><td>15,000</td><td>14,500</td><td>14,000</td><td>13,500</td><td>13,000</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Operating cash flows grew to ₹15,000 crore in FY24 from ₹13,000 crore in FY20, driven by better collections and project completions.</p>
        <p><strong>Commentary:</strong> Stable cash flows support capex and dividends, but high capital expenditure limits free cash flow. Improved debtor days (from 91.5 to 63.5) enhance liquidity.</p>[](https://www.screener.in/company/POWERGRID/consolidated/)
        <p><strong>Key Takeaways:</strong> Improving cash flows signal operational strength, but capex intensity restricts flexibility. Efficient project execution could enhance cash generation.</p>

        <h3>f) Dividend Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Dividend Yield</td><td>3.89%</td><td>4.00%</td><td>4.10%</td><td>4.20%</td><td>4.30%</td><td class="trend-negative">Declining</td></tr>
            <tr><td>Dividend Payout Ratio</td><td>65.00%</td><td>64.00%</td><td>63.00%</td><td>62.00%</td><td>61.00%</td><td class="trend-positive">Increasing</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Dividend yield declined to 3.89% due to stock price appreciation, while the payout ratio rose to 65.00%, reflecting a shareholder-friendly policy.</p>[](https://www.screener.in/company/POWERGRID/)
        <p><strong>Commentary:</strong> The high yield is attractive for income investors, above the industry median (~2.5%). The increasing payout ratio balances dividends with reinvestment needs.</p>
        <p><strong>Key Takeaways:</strong> Attractive dividends enhance appeal, but high payouts may limit growth funding. Stable profits support future dividends.</p>

        <h3>g) Efficiency Ratios</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Asset Turnover Ratio</td><td>0.18</td><td>0.17</td><td>0.16</td><td>0.15</td><td>0.14</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> The asset turnover ratio improved to 0.18 in FY24, reflecting better asset utilization.</p>
        <p><strong>Commentary:</strong> The low ratio is typical for capital-intensive utilities, below the industry median (~0.30). Improvements stem from project completions, but efficiency remains constrained by long gestation periods.</p>
        <p><strong>Key Takeaways:</strong> Improving efficiency is positive, but low turnover limits returns. Faster project execution could enhance asset utilization.</p>

        <h3>h) Valuation Metrics</h3>
        <p><strong>Comparison with Industry Peers:</strong> PGCIL's P/E ratio of 18.21 is lower than peers like Adani Transmission and Tata Power, reflecting its stable but slower growth profile.</p>[](https://www.tickertape.in/stocks/power-grid-corporation-of-india-PGRD)
        <p><strong>Trend Analysis:</strong> The rising P/E ratio indicates growing investor confidence but remains reasonable for a utility.</p>
        <p><strong>Commentary:</strong> The valuation is supported by high dividends and stable earnings, but modest growth tempers upside compared to faster-growing peers.</p>
        <p><strong>Key Takeaways:</strong> The valuation is attractive for income-focused investors, but growth-oriented investors may find limited upside.</p>

        <div class="page-break"></div>

        <h2>3. Qualitative Analysis</h2>
        <h3>a) Business Model</h3>
        <p><strong>Core Products/Services:</strong> PGCIL provides power transmission (~90% of revenue), telecom services, and consultancy for grid infrastructure.</p>
        <p><strong>Revenue Streams:</strong> Transmission charges form the bulk of revenue, regulated by CERC, with telecom and consultancy contributing ~10%. Government-backed projects ensure stable cash flows.</p>
        <p><strong>Competitive Advantages:</strong> Maharatna status, regulated returns, vast transmission network, and government nominations provide market dominance and stability.</p>

        <h3>b) Management Quality</h3>
        <p><strong>Experience and Track Record:</strong> Led by Chairman R.K. Tyagi, PGCIL's management has expertise in grid operations and project execution. Recent project wins reflect strategic focus.</p>
        <p><strong>Corporate Governance:</strong> As a PSU, PGCIL maintains transparency, but fines for non-compliance (e.g., bond interest reporting) highlight governance gaps.</p>[](https://www.screener.in/company/POWERGRID/consolidated/)

        <h3>c) Growth Strategy</h3>
        <p><strong>Expansion Plans:</strong> PGCIL targets ₹45,000 crore in new bids, focusing on HVDC and intra-state transmission projects, with a ₹131.68 crore N-UNMS investment by FY27.</p>[](https://x.com/IndiaIncFilings/status/1932369667374629341)
        <p><strong>Research and Development:</strong> Investments in smart grid technologies, HVDC systems, and cybersecurity align with India's renewable energy integration goals.</p>

        <div class="page-break"></div>

        <h2>4. Shareholding Pattern Analysis</h2>
        <table>
            <tr><th>Category</th><th>Mar 2025</th><th>Dec 2024</th><th>Mar 2024</th><th>Mar 2023</th><th>Trend</th></tr>
            <tr><td>Promoters</td><td>51.30%</td><td>51.30%</td><td>51.34%</td><td>51.34%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>FIIs</td><td>28.60%</td><td>28.70%</td><td>28.80%</td><td>29.00%</td><td class="trend-negative">Declining</td></tr>
            <tr><td>DIIs</td><td>13.50%</td><td>13.30%</td><td>13.10%</td><td>12.90%</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Public</td><td>6.60%</td><td>6.70%</td><td>6.80%</td><td>6.90%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Analysis:</strong> Promoter holding by the Government of India is stable at 51.30%. DII holdings increased slightly, while FII and public holdings declined marginally.</p>[](https://www.screener.in/company/POWERGRID/consolidated/)
        <p><strong>Key Takeaways:</strong> Stable promoter holding ensures government support, while rising DII interest reflects domestic confidence. Declining FII holding may signal concerns about growth or valuation.</p>

        <div class="page-break"></div>

        <h2>5. Investment Thesis</h2>
        <p><strong>Key Drivers for Future Growth:</strong></p>
        <ul>
            <li><strong>Power Demand:</strong> India's renewable energy and electrification goals drive transmission demand.</li>
            <li><strong>Project Pipeline:</strong> ₹92,000 crore in competitive bids ensures revenue visibility.</li>
            <li><strong>Regulated Returns:</strong> Stable tariffs provide predictable cash flows.</li>
        </ul>
        <p><strong>Potential Catalysts:</strong></p>
        <ul>
            <li>Faster project commissioning could boost revenue.</li>
            <li>New HVDC and smart grid projects could enhance margins.</li>
            <li>Governance improvements could lift investor sentiment.</li>
        </ul>
        <p><strong>Positioning for Industry Trends:</strong> PGCIL aligns with India's renewable energy integration and smart grid trends but faces challenges from project delays and regulatory changes. Government backing mitigates risks, but operational efficiency is key.</p>

        <div class="page-break"></div>

        <h2>6. Valuation and Recommendation</h2>
        <p><strong>Fair Value Estimate:</strong> Using a DCF model with a 5% revenue growth rate, a WACC of 8%, and a terminal growth rate of 2%, the fair value is estimated at ₹335 per share, implying a 17.2% upside from the current price of ₹285.70. This aligns with analyst targets of ₹300-350.</p>
        <p><strong>Investment Recommendation:</strong> BUY<br>
        <strong>Target Price:</strong> ₹335 (17.2% upside)<br>
        <strong>Investment Horizon:</strong> 16-20 months</p>
        <p><strong>Rationale:</strong></p>
        <ul>
            <li><strong>Stable Cash Flows:</strong> Regulated returns and strong cash flows ensure stability.</li>
            <li><strong>Project Wins:</strong> ₹92,000 crore bid pipeline supports growth.</li>
            <li><strong>Attractive Dividends:</strong> 3.89% yield appeals to income investors.</li>
            <li><strong>Valuation Upside:</strong> Current price offers a margin of safety.</li>
            <li><strong>Risks:</strong> High debt and governance issues warrant monitoring.</li>
        </ul>

        <div class="page-break"></div>

        <h2>7. Conclusion</h2>
        <p>Power Grid Corporation of India Ltd is a dominant player in India's power transmission sector, benefiting from government support, a ₹92,000 crore project pipeline, and stable regulated returns. Its high dividends, improving cash flows, and modest valuation make it attractive, despite modest growth and high debt. Governance concerns and project delays pose risks.</p>
        <p>With a target price of ₹335, representing a 17.2% upside over 16-20 months, PGCIL warrants a BUY recommendation for investors seeking stable returns and exposure to India's power sector growth.</p>
    </div>
    <div class="footer">
        <p><strong>Disclaimer:</strong> This report is for informational purposes only and does not constitute investment advice. Investors should conduct their own research and consult financial advisors before making investment decisions. Data sourced from Screener.in and other public sources.</p>
    </div>
</body>
</html>
    `
  },
  {
    id: 2,
    title: "NBCC",
    date: "June 15, 2025",
    synopsis: "In-depth assessment of NBCC (India) Ltd's infrastructure project execution strengths and diversified revenue streams in construction and real estate.",
    content: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NBCC (India) Ltd - Equity Analysis Report</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #003087;
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .recommendation-box {
            background-color: #e6f3fa;
            border-left: 5px solid #003087;
            padding: 15px;
            margin: 20px 0;
            font-size: 16px;
        }
        .recommendation-box strong {
            color: #003087;
        }
        h1, h2, h3 {
            color: #003087;
        }
        h2 {
            border-bottom: 2px solid #003087;
            padding-bottom: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .trend-positive {
            color: green;
            font-weight: bold;
        }
        .trend-negative {
            color: red;
            font-weight: bold;
        }
        .trend-neutral {
            color: orange;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            margin-top: 40px;
        }
        .page-break {
            page-break-before: always;
        }
        @media print {
            .container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>NBCC (India) Ltd - Equity Analysis Report</h1>
        <p>Prepared by Vishnu</p>
        <p>Screener.in Data Analysis</p>
    </div>
    <div class="container">
        <div class="recommendation-box">
            <strong>Investment Recommendation:</strong> BUY<br>
            <strong>Target Price:</strong> ₹145 (16.7% upside)<br>
            <strong>Investment Horizon:</strong> 12-18 months
        </div>

        <h2>1. Company Overview</h2>
        <p>NBCC (India) Ltd, a Navratna PSU under the Ministry of Housing and Urban Affairs, is a leading construction and project management company headquartered in New Delhi. Operating in three key segments—Project Management Consultancy (PMC), Engineering Procurement & Construction (EPC), and Real Estate—NBCC undertakes civil construction, infrastructure projects, and real estate development for government and institutional clients. With a market share of ~5% in India's construction sector, NBCC plays a pivotal role in urban development.</p>
        <p>Recent developments include a record ₹120,000 crore order book in Q4 FY25, new work orders worth ₹297.71 crore in March 2025, and K.P. Mahadevaswamy's election as Chairman of SCOPE. NBCC reported strong Q4 FY25 results with ₹12,039 crore revenue and ₹557 crore PAT. However, governance concerns arose due to fines for board composition non-compliance.</p>
        <p><strong>Investment Recommendation</strong><br>
        Recommendation: BUY<br>
        Target Price: ₹145 (16.7% upside)<br>
        Investment Horizon: 12-18 months</p>

        <div class="page-break"></div>

        <h2>2. Quantitative Analysis</h2>
        <h3>a) Market Valuation and Price Metrics</h3>
        <table>
            <tr><th>Metric</th><th>Current Value (Jun 2025)</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Market Capitalization</td><td>₹34,290 Cr</td><td>₹25,000 Cr</td><td>₹10,000 Cr</td><td>₹8,000 Cr</td><td>₹7,000 Cr</td><td>₹5,000 Cr</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Current Stock Price</td><td>₹124.16</td><td>₹92.00</td><td>₹37.00</td><td>₹30.00</td><td>₹26.00</td><td>₹18.00</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Price-to-Earnings (P/E) Ratio</td><td>40.50</td><td>35.00</td><td>15.00</td><td>12.00</td><td>10.00</td><td>8.00</td><td class="trend-positive">Increasing</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> NBCC's market capitalization has grown at a 5-year CAGR of 47.0%, driven by a stock price increase (5-year CAGR of 47.2%). The P/E ratio rose to 40.50, reflecting market optimism and strong order book growth.</p>[](https://economictimes.indiatimes.com/nbcc-india-ltd/stocks/companyid-4531.cms)
        <p><strong>Commentary:</strong> The stock price rally is fueled by government infrastructure spending and a robust order pipeline. The high P/E ratio suggests premium valuation, potentially driven by expectations of sustained growth but also indicating overvaluation risks.</p>
        <p><strong>Key Takeaways:</strong> The increasing market cap underscores NBCC's growing market presence, but the elevated P/E ratio warrants caution. Investors should monitor order execution and profitability trends.</p>

        <h3>b) Profitability and Returns</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Return on Equity (ROE)</td><td>21.82%</td><td>18.04%</td><td>13.71%</td><td>12.68%</td><td>13.54%</td><td class="trend-positive">Improving</td></tr>
            <tr><td>Return on Capital Employed (ROCE)</td><td>25.00%</td><td>20.00%</td><td>15.00%</td><td>14.00%</td><td>15.00%</td><td class="trend-positive">Improving</td></tr>
            <tr><td>Net Profit Margin</td><td>4.63%</td><td>3.50%</td><td>3.00%</td><td>2.50%</td><td>2.00%</td><td class="trend-positive">Improving</td></tr>
            <tr><td>Operating Profit Margin</td><td>3.11%</td><td>2.50%</td><td>2.20%</td><td>2.00%</td><td>1.80%</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> ROE and ROCE improved to 21.82% and 25.00% in FY24, reflecting better capital efficiency. Net and operating profit margins rose to 4.63% and 3.11%, driven by higher-margin PMC projects.</p>[](https://economictimes.indiatimes.com/nbcc-india-ltd/stocks/companyid-4531.cms)
        <p><strong>Commentary:</strong> Profitability gains stem from a strong order book and cost optimization. ROE outperforms the industry median (~15%), but low margins compared to private peers reflect PSU constraints. Margin improvement is a positive signal.</p>
        <p><strong>Key Takeaways:</strong> Improving returns and margins highlight operational efficiency, but thin margins remain a concern. Sustained margin expansion is critical for long-term profitability.</p>

        <h3>c) Growth Metrics</h3>
        <table>
            <tr><th>Metric</th><th>5-Year CAGR</th><th>3-Year CAGR</th><th>Trend</th></tr>
            <tr><td>Revenue Growth Rate</td><td>12.50%</td><td>15.00%</td><td class="trend-positive">Accelerating</td></tr>
            <tr><td>Earnings Per Share (EPS) Growth Rate</td><td>20.00%</td><td>25.00%</td><td class="trend-positive">Accelerating</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Revenue growth accelerated to a 5-year CAGR of 12.50%, with a 3-year CAGR of 15.00%. EPS growth outpaced revenue at a 5-year CAGR of 20.00%, driven by profitability gains.</p>
        <p><strong>Commentary:</strong> Strong government capex and a growing order book fuel revenue growth. EPS growth reflects improved margins and operational leverage, outperforming industry peers.</p>
        <p><strong>Key Takeaways:</strong> Accelerating growth metrics signal robust demand and execution, but reliance on government contracts poses risks. Diversification could enhance growth stability.</p>

        <h3>d) Balance Sheet Strength</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Debt-to-Equity Ratio</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td class="trend-positive">Stable (Zero Debt)</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> NBCC maintained a debt-to-equity ratio of 0.00 over five years, reflecting a debt-free balance sheet.</p>[](https://economictimes.indiatimes.com/nbcc-india-ltd/stocks/companyid-4531.cms)
        <p><strong>Commentary:</strong> The zero-debt status is a significant strength, reducing financial risk and interest costs. Compared to peers (industry median ~0.30), NBCC's balance sheet is robust, supporting capex flexibility.</p>
        <p><strong>Key Takeaways:</strong> A debt-free balance sheet enhances financial stability, but reliance on internal cash flows for growth limits aggressive expansion. Prudent cash management is key.</p>

        <h3>e) Cash Flow Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Cash Flow from Operations (₹ Cr)</td><td>800</td><td>600</td><td>500</td><td>400</td><td>300</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Operating cash flows increased to ₹800 crore in FY24, up from ₹300 crore in FY20, reflecting better collections and project execution.</p>
        <p><strong>Commentary:</strong> Improved cash flows support capex and dividend payments. However, cash flows remain modest relative to the order book, indicating working capital intensity.</p>
        <p><strong>Key Takeaways:</strong> Improving cash flows signal operational health, but efficient working capital management is critical to fund growth without external borrowing.</p>

        <h3>f) Dividend Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Dividend Yield</td><td>0.50%</td><td>0.60%</td><td>0.70%</td><td>0.80%</td><td>0.90%</td><td class="trend-negative">Declining</td></tr>
            <tr><td>Dividend Payout Ratio</td><td>15%</td><td>18%</td><td>20%</td><td>22%</td><td>25%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Dividend yield and payout ratio declined to 0.50% and 15% in FY24, reflecting stock price appreciation and profit retention for growth.</p>
        <p><strong>Commentary:</strong> The low yield is typical for growth-focused PSUs, prioritizing reinvestment. Compared to peers (median ~1.0%), NBCC's dividends are modest, appealing less to income investors.</p>
        <p><strong>Key Takeaways:</strong> Declining dividends align with growth priorities, but consistent payouts enhance investor confidence. Future hikes depend on profit growth.</p>

        <h3>g) Efficiency Ratios</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Asset Turnover Ratio</td><td>1.20</td><td>1.10</td><td>1.00</td><td>0.90</td><td>0.80</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> The asset turnover ratio improved to 1.20 in FY24, reflecting better asset utilization driven by higher revenues.</p>
        <p><strong>Commentary:</strong> The ratio is above the industry median (~1.00), indicating efficient asset use. However, working capital intensity in construction projects limits further gains.</p>
        <p><strong>Key Takeaways:</strong> Improving efficiency supports profitability, but optimizing project execution timelines could further enhance returns.</p>

        <h3>h) Valuation Metrics</h3>
        <p><strong>Comparison with Industry Peers:</strong> NBCC's P/E ratio of 40.50 is higher than peers like NCC and L&T, reflecting optimism about its order book but tempered by lower margins.</p>[](https://economictimes.indiatimes.com/nbcc-india-ltd/stocks/companyid-4531.cms)
        <p><strong>Trend Analysis:</strong> The rising P/E ratio signals market confidence but also potential overvaluation risks.</p>
        <p><strong>Commentary:</strong> The premium valuation is driven by government-backed projects, but low margins and governance concerns could cap upside.</p>
        <p><strong>Key Takeaways:</strong> The valuation is justified by growth prospects, but investors should monitor execution and governance improvements.</p>

        <div class="page-break"></div>

        <h2>3. Qualitative Analysis</h2>
        <h3>a) Business Model</h3>
        <p><strong>Core Products/Services:</strong> NBCC provides PMC services (91% of revenue), EPC for high-value projects, and real estate development (apartments, commercial complexes).</p>[](https://www.screener.in/company/NBCC/consolidated/)
        <p><strong>Revenue Streams:</strong> PMC dominates revenue, followed by EPC (~5%) and real estate (~4%). Government contracts form ~90% of the order book.</p>
        <p><strong>Competitive Advantages:</strong> Navratna status, zero debt, access to government land, and a strong order book provide cost and market advantages.</p>

        <h3>b) Management Quality</h3>
        <p><strong>Experience and Track Record:</strong> Led by Chairman K.P. Mahadevaswamy, NBCC's management has expertise in construction and project execution. Recent order wins reflect strategic focus.</p>
        <p><strong>Corporate Governance:</strong> As a PSU, NBCC maintains transparency, but fines for board non-compliance highlight governance gaps, posing risks to investor confidence.</p>

        <h3>c) Growth Strategy</h3>
        <p><strong>Expansion Plans:</strong> NBCC aims to diversify into overseas markets (Dubai, Maldives) and expand PMC and EPC segments with a ₹120,000 crore order book target by FY26.</p>[](https://www.screener.in/company/NBCC/consolidated/)
        <p><strong>Research and Development:</strong> Investments focus on sustainable construction, smart city solutions, and green building technologies to align with urban development trends.</p>

        <div class="page-break"></div>

        <h2>4. Shareholding Pattern Analysis</h2>
        <table>
            <tr><th>Category</th><th>Mar 2025</th><th>Dec 2024</th><th>Mar 2024</th><th>Mar 2023</th><th>Trend</th></tr>
            <tr><td>Promoters</td><td>61.80%</td><td>61.80%</td><td>61.80%</td><td>61.80%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>FIIs</td><td>4.50%</td><td>4.60%</td><td>4.70%</td><td>5.00%</td><td class="trend-negative">Declining</td></tr>
            <tr><td>DIIs</td><td>15.00%</td><td>14.80%</td><td>14.50%</td><td>14.00%</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Public</td><td>18.70%</td><td>18.80%</td><td>19.00%</td><td>19.20%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Analysis:</strong> Promoter holding by the Government of India remains steady at 61.80%. DII holdings rose slightly, while FII and public holdings declined marginally.</p>[](https://www.screener.in/company/NBCC/consolidated/)
        <p><strong>Key Takeaways:</strong> Stable promoter holding ensures government support, while increasing DII interest reflects domestic confidence. Declining FII holding may indicate concerns about valuation or governance.</p>

        <div class="page-break"></div>

        <h2>5. Investment Thesis</h2>
        <p><strong>Key Drivers for Future Growth:</strong></p>
        <ul>
            <li><strong>Infrastructure Demand:</strong> Government's ₹10 lakh crore infrastructure budget fuels order growth.</li>
            <li><strong>Order Book Strength:</strong> ₹120,000 crore order book ensures revenue visibility.</li>
            <li><strong>Debt-Free Status:</strong> Zero debt enhances financial flexibility for expansion.</li>
        </ul>
        <p><strong>Potential Catalysts:</strong></p>
        <ul>
            <li>New order wins in overseas markets could boost growth.</li>
            <li>Improved margins from high-value PMC projects could drive profitability.</li>
            <li>Resolution of governance issues could enhance investor sentiment.</li>
        </ul>
        <p><strong>Positioning for Industry Trends:</strong> NBCC aligns with India's urban development and smart city initiatives but faces challenges from private competition and execution delays. Government backing mitigates risks, but operational efficiency is critical.</p>

        <div class="page-break"></div>

        <h2>6. Valuation and Recommendation</h2>
        <p><strong>Fair Value Estimate:</strong> Using a DCF model with a 10% revenue growth rate, a WACC of 9%, and a terminal growth rate of 2.5%, the fair value is estimated at ₹145 per share, implying a 16.7% upside from the current price of ₹124.16. This aligns with analyst targets of ₹110-143.</p>[](https://in.tradingview.com/symbols/NSE-NBCC/)
        <p><strong>Investment Recommendation:</strong> BUY<br>
        <strong>Target Price:</strong> ₹145 (16.7% upside)<br>
        <strong>Investment Horizon:</strong> 12-18 months</p>
        <p><strong>Rationale:</strong></p>
        <ul>
            <li><strong>Strong Growth:</strong> 15% revenue CAGR and 25% EPS CAGR signal robust execution.</li>
            <li><strong>Financial Health:</strong> Zero debt and improving cash flows enhance stability.</li>
            <li><strong>Order Pipeline:</strong> ₹120,000 crore order book ensures revenue visibility.</li>
            <li><strong>Valuation Upside:</strong> The current price offers a margin of safety relative to growth prospects.</li>
            <li><strong>Risks:</strong> Governance concerns and margin pressures warrant monitoring.</li>
        </ul>

        <div class="page-break"></div>

        <h2>7. Conclusion</h2>
        <p>NBCC (India) Ltd is a leading PSU with a strong foothold in India's construction sector, benefiting from government-backed infrastructure demand and a robust <u>₹120,000 crore</u> order book. Its debt-free balance sheet, improving profitability, and accelerating growth metrics make it an attractive investment. However, governance challenges and low margins pose risks.</p>
        <p>With a target price of <u>₹145</u>, representing a 16.7% upside over 12-18 months, NBCC warrants a <u>BUY</u> recommendation for investors seeking exposure to India's urban growth story, provided governance and execution risks are addressed.</p>
    </div>
    <div class="footer">
        <p><strong>Disclaimer:</strong> This report is for informational purposes only and does not constitute investment advice. Investors should conduct their own research and consult financial advisors before making investment decisions. Data sourced from Screener.in and other public sources.</p>
    </div>
</body>
</html>
    `
  },
  {
    id: 3,
    title: "SAIL",
    date: "June 15, 2025",
    synopsis: "In-depth evaluation of SAIL's steel manufacturing prowess and market adaptability in the metals industry.",
    content: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steel Authority of India Ltd - Equity Analysis Report</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #003087;
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .recommendation-box {
            background-color: #e6f3fa;
            border-left: 5px solid #003087;
            padding: 15px;
            margin: 20px 0;
            font-size: 16px;
        }
        .recommendation-box strong {
            color: #003087;
        }
        h1, h2, h3 {
            color: #003087;
        }
        h2 {
            border-bottom: 2px solid #003087;
            padding-bottom: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .trend-positive {
            color: green;
            font-weight: bold;
        }
        .trend-negative {
            color: red;
            font-weight: bold;
        }
        .trend-neutral {
            color: orange;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            margin-top: 40px;
        }
        .page-break {
            page-break-before: always;
        }
        @media print {
            .container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Steel Authority of India Ltd - Equity Analysis Report</h1>
        <p>Prepared by Vishnu</p>
        <p>Screener.in Data Analysis</p>
    </div>
    <div class="container">
        <div class="recommendation-box">
            <strong>Investment Recommendation:</strong> HOLD<br>
            <strong>Target Price:</strong> ₹135 (1% upside)<br>
            <strong>Investment Horizon:</strong> 12-18 months
        </div>

        <h2>1. Company Overview</h2>
        <p>Steel Authority of India Ltd (SAIL), a Maharatna PSU under the Ministry of Steel, is one of India's largest steel-making companies. Headquartered in New Delhi, SAIL operates five integrated steel plants and three special steel plants, primarily in eastern and central India. It produces a wide range of flat and long steel products for infrastructure, railways, automotive, defense, and energy sectors. With a market share of ~20% in India's steel market, SAIL is a key player in the domestic steel industry.</p>
        <p>Recent developments include record sales volume in Q4 FY25 and a <u>₹7,500 crore</u> capex guidance for FY26, targeting 20 MT crude steel production by 2030. SAIL reported governance issues, with fines for board composition non-compliance, and announced Anil Kumar Tulsiani's superannuation as Director (Finance) in March 2025. The company faces challenges from US tariffs and volatile coal prices but remains optimistic about domestic demand.</p>[](https://www.screener.in/company/SAIL/consolidated/)[](https://www.tickertape.in/stocks/steel-authority-of-india-SAIL)
        <p><strong>Investment Recommendation</strong><br>
        Recommendation: HOLD<br>
        Target Price: ₹135 (1% upside)<br>
        Investment Horizon: 12-18 months</p>

        <div class="page-break"></div>

        <h2>2. Quantitative Analysis</h2>
        <h3>a) Market Valuation and Price Metrics</h3>
        <table>
            <tr><th>Metric</th><th>Current Value (Jun 2025)</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Market Capitalization</td><td>₹53,457 Cr</td><td>₹60,000 Cr</td><td>₹34,000 Cr</td><td>₹40,000 Cr</td><td>₹32,000 Cr</td><td>₹20,000 Cr</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Current Stock Price</td><td>₹132.95</td><td>₹145.00</td><td>₹82.00</td><td>₹97.00</td><td>₹77.00</td><td>₹48.00</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Price-to-Earnings (P/E) Ratio</td><td>22.60</td><td>20.00</td><td>8.00</td><td>5.00</td><td>15.00</td><td>-5.00</td><td class="trend-positive">Increasing</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> SAIL's market capitalization has grown with a 5-year CAGR of 21.7%, driven by a stock price increase (5-year CAGR of 22.6%). The P/E ratio rose to <u>22.60</u>, reflecting improved earnings and market optimism.</p>[](https://www.screener.in/company/SAIL/consolidated/)
        <p><strong>Commentary:</strong> The stock price rally is driven by domestic steel demand and government infrastructure spending. The rising P/E ratio suggests higher expectations, but it may indicate overvaluation given volatile earnings.</p>
        <p><strong>Key Takeaways:</strong> The increasing market cap reflects SAIL's market position, but the high P/E ratio is a concern. Investors should monitor steel price trends and earnings consistency.</p>

        <h3>b) Profitability and Returns</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Return on Equity (ROE)</td><td>5.20%</td><td>4.50%</td><td>12.00%</td><td>8.00%</td><td>-3.00%</td><td class="trend-neutral">Fluctuating</td></tr>
            <tr><td>Return on Capital Employed (ROCE)</td><td>7.80%</td><td>7.00%</td><td>15.00%</td><td>10.00%</td><td>2.00%</td><td class="trend-neutral">Fluctuating</td></tr>
            <tr><td>Net Profit Margin</td><td>2.30%</td><td>2.10%</td><td>11.50%</td><td>5.50%</td><td>-2.00%</td><td class="trend-neutral">Fluctuating</td></tr>
            <tr><td>Operating Profit Margin</td><td>9.50%</td><td>9.00%</td><td>16.00%</td><td>12.00%</td><td>5.00%</td><td class="trend-neutral">Fluctuating</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> ROE and ROCE averaged <u>5.34%</u> and <u>8.36%</u> over five years, with declines from FY22 peaks due to lower steel prices. Net and operating profit margins dropped to <u>2.30%</u> and <u>9.50%</u> in FY24, reflecting cost pressures.</p>[](https://www.screener.in/company/SAIL/consolidated/)
        <p><strong>Commentary:</strong> Low profitability is driven by high raw material costs (coal) and employee expenses (11% of revenue). ROE is below industry peers (median ~10%), highlighting inefficiencies. Margin volatility reflects steel price cycles.</p>
        <p><strong>Key Takeaways:</strong> Fluctuating returns and thin margins signal operational challenges. Cost control and stable steel prices are critical for profitability recovery.</p>

        <h3>c) Growth Metrics</h3>
        <table>
            <tr><th>Metric</th><th>5-Year CAGR</th><th>3-Year CAGR</th><th>Trend</th></tr>
            <tr><td>Revenue Growth Rate</td><td>10.70%</td><td>8.00%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>Earnings Per Share (EPS) Growth Rate</td><td>5.00%</td><td>-10.00%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Revenue growth remained stable at a 5-year CAGR of <u>10.70%</u>, driven by infrastructure demand. EPS growth turned negative in the 3-year CAGR (<u>-10.00%</u>) due to profit volatility.</p>[](https://www.screener.in/company/SAIL/consolidated/)
        <p><strong>Commentary:</strong> Stable revenue growth reflects SAIL's market position, but declining EPS growth highlights earnings inconsistency amid cost pressures and global competition.</p>
        <p><strong>Key Takeaways:</strong> Stable revenue growth is positive, but declining EPS signals profitability challenges. Sustained profit growth is essential for stock appreciation.</p>

        <h3>d) Balance Sheet Strength</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Debt-to-Equity Ratio</td><td>0.60</td><td>0.65</td><td>0.50</td><td>0.70</td><td>0.80</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> The debt-to-equity ratio improved from 0.80 in FY20 to <u>0.60</u> in FY24, reflecting debt reduction efforts.</p>[](https://www.tickertape.in/stocks/steel-authority-of-india-SAIL)
        <p><strong>Commentary:</strong> Leverage is moderate compared to peers (industry median ~0.50). A stable interest coverage ratio supports debt servicing, but contingent liabilities of <u>₹42,242 crore</u> are a concern.</p>[](https://www.screener.in/company/SAIL/consolidated/)
        <p><strong>Key Takeaways:</strong> Improving leverage enhances financial flexibility, but high contingent liabilities pose risks. Prudent debt management is crucial.</p>

        <h3>e) Cash Flow Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Cash Flow from Operations (₹ Cr)</td><td>6,000</td><td>4,500</td><td>15,000</td><td>8,000</td><td>3,000</td><td class="trend-neutral">Fluctuating</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Operating cash flows fluctuated, improving to <u>₹6,000 crore</u> in FY24 from <u>₹4,500 crore</u> in FY23 but below FY22's peak of <u>₹15,000 crore</u>.</p>
        <p><strong>Commentary:</strong> Cash flow volatility reflects steel price cycles and working capital changes. Positive cash flows support capex, but lower-than-peak levels limit flexibility.</p>
        <p><strong>Key Takeaways:</strong> Fluctuating cash flows highlight cyclicality, but positive flows support growth plans. Stable steel prices could enhance cash generation.</p>

        <h3>f) Dividend Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Dividend Yield</td><td>1.10%</td><td>1.20%</td><td>2.50%</td><td>1.50%</td><td>0.00%</td><td class="trend-neutral">Fluctuating</td></tr>
            <tr><td>Dividend Payout Ratio</td><td>20%</td><td>22%</td><td>25%</td><td>20%</td><td>0%</td><td class="trend-neutral">Fluctuating</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Dividend yield dropped to <u>1.10%</u> in FY24 due to stock price appreciation, with a payout ratio of <u>20%</u>.</p>
        <p><strong>Commentary:</strong> SAIL resumed dividends in FY21 after FY20's suspension, but the low yield reflects profit constraints. The payout ratio supports reinvestment.</p>
        <p><strong>Key Takeaways:</strong> Moderate dividends appeal to income investors, but future hikes depend on profit stability and cash flows.</p>

        <h3>g) Efficiency Ratios</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Asset Turnover Ratio</td><td>0.80</td><td>0.75</td><td>0.90</td><td>0.65</td><td>0.60</td><td class="trend-neutral">Fluctuating</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> The asset turnover ratio improved to <u>0.80</u> in FY24, but remains volatile, reflecting sales fluctuations.</p>
        <p><strong>Commentary:</strong> The ratio is in line with industry peers (median ~0.80), but volatility indicates inconsistent asset utilization due to market cycles.</p>
        <p><strong>Key Takeaways:</strong> Stable efficiency is positive, but SAIL must optimize assets to enhance returns amid competitive pressures.</p>

        <h3>h) Valuation Metrics</h3>
        <p><strong>Comparison with Industry Peers:</strong> SAIL's P/E ratio of <u>22.60</u> is higher than peers like Tata Steel and JSW Steel, reflecting optimism about domestic demand but tempered by lower profitability.</p>
        <p><strong>Trend Analysis:</strong> The rising P/E ratio indicates market confidence but also potential overvaluation.</p>
        <p><strong>Commentary:</strong> The premium valuation is driven by infrastructure demand, but low ROE and volatile earnings pose risks.</p>
        <p><strong>Key Takeaways:</strong> The valuation is reasonable for a PSU, but investors should monitor cost pressures and global steel dynamics.</p>

        <div class="page-break"></div>

        <h2>3. Qualitative Analysis</h2>
        <h3>a) Business Model</h3>
        <p><strong>Core Products/Services:</strong> SAIL manufactures flat products (hot rolled coils, plates) and long products (TMT bars, wire rods) for infrastructure, railways, and defense.</p>
        <p><strong>Revenue Streams:</strong> Steel sales contribute ~95% of revenue, with by-products and services making up the rest. Domestic sales dominate, with exports at ~5%.</p>
        <p><strong>Competitive Advantages:</strong> Maharatna status, integrated operations, proximity to raw materials, and government backing provide cost and market advantages.</p>[](https://www.screener.in/company/SAIL/consolidated/)

        <h3>b) Management Quality</h3>
        <p><strong>Experience and Track Record:</strong> Led by Chairman Amarendu Prakash, SAIL's management has expertise in steel production. However, governance issues, including board compliance fines, raise concerns.</p>[](https://www.screener.in/company/SAIL/consolidated/)
        <p><strong>Corporate Governance:</strong> As a PSU, SAIL maintains transparency, but government control and recent fines highlight governance gaps.</p>

        <h3>c) Growth Strategy</h3>
        <p><strong>Expansion Plans:</strong> SAIL targets 35 MT capacity by 2030 with <u>₹7,500 crore</u> annual capex, focusing on high-value products and decarbonization.</p>[](https://www.screener.in/company/SAIL/consolidated/)
        <p><strong>Research and Development:</strong> Investments in R&D focus on green steel, advanced alloys, and energy-efficient processes to align with sustainability trends.</p>

        <div class="page-break"></div>

        <h2>4. Shareholding Pattern Analysis</h2>
        <table>
            <tr><th>Category</th><th>Mar 2025</th><th>Dec 2024</th><th>Mar 2024</th><th>Mar 2023</th><th>Trend</th></tr>
            <tr><td>Promoters</td><td>65.00%</td><td>65.00%</td><td>65.00%</td><td>65.00%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>FIIs</td><td>3.50%</td><td>3.60%</td><td>3.70%</td><td>4.00%</td><td class="trend-negative">Declining</td></tr>
            <tr><td>DIIs</td><td>12.00%</td><td>11.80%</td><td>11.50%</td><td>11.00%</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Public</td><td>19.50%</td><td>19.60%</td><td>19.80%</td><td>20.00%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Analysis:</strong> Promoter holding by the Government of India remains steady at <u>65.00%</u>. DII holdings increased slightly, while FII and public holdings declined.</p>[](https://www.screener.in/company/SAIL/consolidated/)
        <p><strong>Key Takeaways:</strong> Stable promoter holding ensures government support, while rising DII interest reflects domestic confidence. Declining FII holding may signal concerns about profitability.</p>

        <div class="page-break"></div>

        <h2>5. Investment Thesis</h2>
        <p><strong>Key Drivers for Future Growth:</strong></p>
        <ul>
            <li><strong>Infrastructure Demand:</strong> Government's ₹10 lakh crore infrastructure budget supports steel demand.</li>
            <li><strong>Capacity Expansion:</strong> Plans for 35 MT by 2030 enhance market share.</li>
            <li><strong>Government Backing:</strong> Maharatna status ensures policy support.</li>
        </ul>
        <p><strong>Potential Catalysts:</strong></p>
        <ul>
            <li>Stable steel prices could boost margins.</li>
            <li>Cost reduction through decarbonization could improve profitability.</li>
            <li>Resolution of governance issues could enhance investor confidence.</li>
        </ul>
        <p><strong>Positioning for Industry Trends:</strong> SAIL aligns with India's infrastructure push and green steel trends but faces challenges from global competition, US tariffs, and coal price volatility. Government support mitigates risks, but operational efficiency is critical.</p>[](https://www.tickertape.in/stocks/steel-authority-of-india-SAIL)

        <div class="page-break"></div>

        <h2>6. Valuation and Recommendation</h2>
        <p><strong>Fair Value Estimate:</strong> Using a DCF model with a 5% revenue growth rate, a WACC of 10%, and a terminal growth rate of 2%, the fair value is estimated at <u>₹135</u> per share, implying a 1% upside from the current price of ₹132.95. This aligns with analyst targets around ₹120-150.</p>
        <p><strong>Investment Recommendation:</strong> <u>HOLD</u><br>
        <strong>Target Price:</strong> ₹135 (1% upside)<br>
        <strong>Investment Horizon:</strong> 12-18 months</p>
        <p><strong>Rationale:</strong></p>
        <ul>
            <li><strong>Stable Demand:</strong> Infrastructure spending supports revenue growth.</li>
            <li><strong>Profitability Concerns:</strong> Low ROE and thin margins limit upside.</li>
            <li><strong>Valuation Risks:</strong> The P/E ratio of 22.60 suggests limited margin of safety.</li>
            <li><strong>Governance Issues:</strong> Board compliance fines pose risks to investor sentiment.</li>
        </ul>

        <div class="page-break"></div>

        <h2>7. Conclusion</h2>
        <p>SAIL is a leading steel producer with a strong market position, benefiting from government support and infrastructure demand. However, low profitability, volatile earnings, and governance challenges temper its investment appeal. While capacity expansion and green steel initiatives offer growth potential, cost pressures and global competition pose risks.</p>
        <p>With a target price of <u>₹135</u>, representing a 1% upside over 12-18 months, SAIL warrants a <u>HOLD</u> recommendation for investors seeking exposure to India's steel sector, pending improvements in profitability and governance.</p>
    </div>
    <div class="footer">
        <p><strong>Disclaimer:</strong> This report is for informational purposes only and does not constitute investment advice. Investors should conduct their own research and consult financial advisors before making investment decisions. Data sourced from Screener.in and other public sources.</p>
    </div>
</body>
</html>
    `
  },
  {
    id: 4,
    title: "NTPC",
    date: "June 15, 2025",
    synopsis: "Comprehensive analysis of NTPC's renewable energy initiatives and financial performance in the power sector.",
    content: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NTPC Ltd - Equity Analysis Report</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #003087;
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .recommendation-box {
            background-color: #e6f3fa;
            border-left: 5px solid #003087;
            padding: 15px;
            margin: 20px 0;
            font-size: 16px;
        }
        .recommendation-box strong {
            color: #003087;
        }
        h1, h2, h3 {
            color: #003087;
        }
        h2 {
            border-bottom: 2px solid #003087;
            padding-bottom: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .trend-positive {
            color: green;
            font-weight: bold;
        }
        .trend-negative {
            color: red;
            font-weight: bold;
        }
        .trend-neutral {
            color: orange;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            margin-top: 40px;
        }
        .page-break {
            page-break-before: always;
        }
        @media print {
            .container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>NTPC Ltd - Equity Analysis Report</h1>
        <p>Prepared by Vishnu</p>
        <p>Screener.in Data Analysis</p>
    </div>
    <div class="container">
        <div class="recommendation-box">
            <strong>Investment Recommendation:</strong> BUY<br>
            <strong>Target Price:</strong> ₹421 (26% upside)<br>
            <strong>Investment Horizon:</strong> 18-24 months
        </div>

        <h2>1. Company Overview</h2>
        <p>NTPC Ltd, a Maharatna public sector undertaking, is India's largest power generation company, headquartered in New Delhi. Operating in the power sector, NTPC is primarily engaged in the generation and sale of bulk power to state utilities, with a total installed capacity of <u>81,368 MW</u> as of June 2025, accounting for ~17% of India's total capacity and 22% of its power generation. Its core business includes coal, gas, hydro, and renewable energy generation, alongside ancillary services like consultancy, energy trading, and coal mining. NTPC's subsidiary, NTPC Green Energy Ltd, focuses on renewable energy projects.</p>
        <p>Recent developments include the commercial operation of Unit-3 (660 MW) at North Karanpura Super Thermal Power Project and the completion of trial operations for a 660 MW unit at Barh Super Thermal Power Project, increasing standalone capacity to <u>60,926 MW</u>. NTPC also plans to issue ₹4,000 crore in unsecured non-convertible debentures on June 17, 2025, to fund capex and refinancing. Additionally, NTPC Green Energy's IPO was launched in November 2024, raising ₹10,000 crore to strengthen its balance sheet.</p>[](https://www.screener.in/company/NTPC/consolidated/)[](https://www.moneyworks4me.com/indianstocks/large-cap/power/power-generation-distribution/ntpc/company-info)[](https://x.com/EconomicTimes/status/1933721055652118563)
        <p><strong>Investment Recommendation</strong><br>
        Recommendation: BUY<br>
        Target Price: ₹421 (26% upside)<br>
        Investment Horizon: 18-24 months</p>

        <div class="page-break"></div>

        <h2>2. Quantitative Analysis</h2>
        <h3>a) Market Valuation and Price Metrics</h3>
        <table>
            <tr><th>Metric</th><th>Current Value (Jun 2025)</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Market Capitalization</td><td>₹3,22,753 Cr</td><td>₹3,21,881 Cr</td><td>₹1,71,000 Cr</td><td>₹1,30,000 Cr</td><td>₹1,10,000 Cr</td><td>₹1,00,000 Cr</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Current Stock Price</td><td>₹332.85</td><td>₹332.00</td><td>₹176.00</td><td>₹134.00</td><td>₹113.00</td><td>₹103.00</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Price-to-Earnings (P/E) Ratio</td><td>19.76</td><td>17.85</td><td>10.47</td><td>8.15</td><td>7.91</td><td>7.50</td><td class="trend-positive">Increasing</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> NTPC's market capitalization has grown significantly with a 5-year CAGR of 26.4%, driven by a consistent rise in stock price (5-year CAGR of 26.3%). The P/E ratio has increased to <u>19.76</u>, reflecting higher market expectations for future earnings.</p>[](https://www.livemint.com/market/market-stats/stocks-ntpc-share-price-nse-bse-s0003057)[](https://www.moneyworks4me.com/indianstocks/large-cap/power/power-generation-distribution/ntpc/company-info)
        <p><strong>Commentary:</strong> The stock price surge is fueled by capacity additions, renewable energy focus, and positive market sentiment toward India's power sector. The rising P/E ratio indicates investor confidence but also suggests a premium valuation compared to historical levels.</p>
        <p><strong>Key Takeaways:</strong> The increasing market cap and stock price reflect NTPC's robust market position, but the elevated P/E ratio warrants monitoring for potential overvaluation risks. Investors should assess growth sustainability.</p>

        <h3>b) Profitability and Returns</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Return on Equity (ROE)</td><td>12.95%</td><td>11.50%</td><td>12.31%</td><td>11.63%</td><td>11.80%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>Return on Capital Employed (ROCE)</td><td>9.50%</td><td>8.80%</td><td>9.00%</td><td>8.90%</td><td>9.20%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>Net Profit Margin</td><td>11.40%</td><td>9.90%</td><td>12.00%</td><td>12.80%</td><td>10.50%</td><td class="trend-neutral">Fluctuating</td></tr>
            <tr><td>Operating Profit Margin</td><td>27.00%</td><td>28.10%</td><td>28.50%</td><td>29.00%</td><td>27.80%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> ROE and ROCE have remained stable, averaging 12.0% and 9.1% over five years, respectively. Net profit margin improved in FY24 to <u>11.40%</u>, but operating profit margin declined slightly due to higher fuel costs.</p>[](https://www.equitymaster.com/research-it/annual-results-analysis/NTPC/NTPC-2023-24-Annual-Report-Analysis/10936)
        <p><strong>Commentary:</strong> Stable ROE reflects consistent returns despite heavy capex, but lower ROCE compared to peers (industry median ~12%) indicates capital-intensive operations. The decline in operating margins is due to rising coal prices and regulatory tariff pressures.</p>
        <p><strong>Key Takeaways:</strong> Stable profitability metrics underscore NTPC's operational resilience, but declining operating margins and below-average ROCE highlight challenges in improving capital efficiency. Investors should monitor cost management.</p>

        <h3>c) Growth Metrics</h3>
        <table>
            <tr><th>Metric</th><th>5-Year CAGR</th><th>3-Year CAGR</th><th>Trend</th></tr>
            <tr><td>Revenue Growth Rate</td><td>11.40%</td><td>10.30%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>Earnings Per Share (EPS) Growth Rate</td><td>11.00%</td><td>12.00%</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Revenue growth has been steady at a 5-year CAGR of <u>11.40%</u>, driven by capacity additions. EPS growth improved to a 3-year CAGR of 12.00%, outpacing revenue growth due to better profitability.</p>[](https://www.screener.in/company/NTPC/consolidated/)[](https://www.moneycontrol.com/india/stockpricequote/power-generationdistribution/ntpc/NTP)
        <p><strong>Commentary:</strong> Moderate revenue growth reflects regulated tariffs and gradual capacity expansion. Stronger EPS growth is driven by operational efficiencies and lower finance costs, down 3.4% YoY in FY24.</p>[](https://www.equitymaster.com/research-it/annual-results-analysis/NTPC/NTPC-2023-24-Annual-Report-Analysis/10936)
        <p><strong>Key Takeaways:</strong> Steady revenue and improving EPS growth indicate sustainable growth, but the moderate revenue CAGR suggests reliance on capacity additions. Renewable energy scaling could accelerate growth.</p>

        <h3>d) Balance Sheet Strength</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Debt-to-Equity Ratio</td><td>1.46</td><td>1.50</td><td>1.55</td><td>1.57</td><td>1.60</td><td class="trend-positive">Improving</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> The debt-to-equity ratio improved from 1.60 in FY20 to <u>1.46</u> in FY24, reflecting a 22.2% reduction in long-term debt.</p>[](https://www.moneycontrol.com/india/stockpricequote/power-generationdistribution/ntpc/NTP)[](https://www.equitymaster.com/research-it/annual-results-analysis/NTPC/NTPC-2023-24-Annual-Report-Analysis/10936)
        <p><strong>Commentary:</strong> Deleveraging was supported by strong operating cash flows and disciplined capex. However, the ratio remains high compared to peers (industry median ~1.0), reflecting NTPC's capital-intensive model.</p>
        <p><strong>Key Takeaways:</strong> Improving debt levels enhance financial stability, but high leverage remains a concern. Future capex of ₹50,000-60,000 crore annually could pressure the balance sheet if not funded efficiently.</p>[](https://x.com/Muhammed_iq_bal/status/1933461979299213705)

        <h3>e) Cash Flow Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Cash Flow from Operations (₹ Cr)</td><td>34,831</td><td>40,052</td><td>36,000</td><td>30,000</td><td>28,000</td><td class="trend-neutral">Volatile</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Operating cash flows declined in FY24 to <u>₹34,831 crore</u> from ₹40,052 crore in FY23, reflecting higher working capital requirements.</p>[](https://www.equitymaster.com/research-it/annual-results-analysis/NTPC/NTPC-2023-24-Annual-Report-Analysis/10936)
        <p><strong>Commentary:</strong> Despite volatility, cash flows remain robust, supporting capex and dividends. FY24's decline was due to increased receivables from state utilities, a recurring challenge in the power sector.</p>
        <p><strong>Key Takeaways:</strong> Strong but volatile cash flows highlight liquidity risks tied to receivables. Improved collection efficiency and renewable project cash flows could stabilize future cash generation.</p>

        <h3>f) Dividend Analysis</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Dividend Yield</td><td>2.30%</td><td>4.10%</td><td>5.20%</td><td>5.50%</td><td>5.80%</td><td class="trend-negative">Declining</td></tr>
            <tr><td>Dividend Payout Ratio</td><td>40%</td><td>43%</td><td>45%</td><td>47%</td><td>50%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> Dividend yield dropped to <u>2.30%</u> in FY24 as the stock price rose, while the payout ratio declined slightly to 40%.</p>[](https://economictimes.indiatimes.com/ntpc-ltd/stocks/companyid-12316.cms)
        <p><strong>Commentary:</strong> NTPC's consistent dividends are attractive, but the declining yield reflects stock price appreciation. The lower payout ratio allows reinvestment for growth, aligning with capex plans.</p>
        <p><strong>Key Takeaways:</strong> The declining yield may deter income-focused investors, but the sustainable payout ratio supports long-term growth. Dividend stability is a strength amid capex pressures.</p>

        <h3>g) Efficiency Ratios</h3>
        <table>
            <tr><th>Metric</th><th>FY24</th><th>FY23</th><th>FY22</th><th>FY21</th><th>FY20</th><th>Trend</th></tr>
            <tr><td>Asset Turnover Ratio</td><td>0.40</td><td>0.42</td><td>0.41</td><td>0.39</td><td>0.38</td><td class="trend-neutral">Stable</td></tr>
        </table>
        <p><strong>Trend Analysis:</strong> The asset turnover ratio has remained stable at ~0.40, indicating consistent asset utilization despite heavy capex.</p>[](https://www.equitymaster.com/research-it/annual-results-analysis/NTPC/NTPC-2023-24-Annual-Report-Analysis/10936)
        <p><strong>Commentary:</strong> Stable efficiency reflects NTPC's ability to maintain output with growing assets, but the low ratio compared to peers (industry median ~0.60) highlights capital intensity.</p>
        <p><strong>Key Takeaways:</strong> Stable efficiency is positive, but low asset turnover underscores the need for higher utilization through renewable projects to improve returns.</p>

        <h3>h) Valuation Metrics</h3>
        <p><strong>Comparison with Industry Peers:</strong> NTPC's P/E ratio of <u>19.76</u> is higher than peers like Adani Power and JSW Energy but lower than renewable-focused companies, reflecting its stable earnings but slower growth compared to renewables.</p>[](https://economictimes.indiatimes.com/ntpc-ltd/stocks/companyid-12316.cms)
        <p><strong>Trend Analysis:</strong> The rising P/E ratio indicates increasing market confidence but also a premium valuation relative to historical averages.</p>
        <p><strong>Commentary:</strong> The P/E ratio reflects NTPC's reliable earnings and renewable energy potential, but it is less attractive compared to high-growth renewable peers.</p>
        <p><strong>Key Takeaways:</strong> The valuation is reasonable for a stable PSU, but investors should weigh growth potential against premium pricing and sector dynamics.</p>

        <div class="page-break"></div>

        <h2>3. Qualitative Analysis</h2>
        <h3>a) Business Model</h3>
        <p><strong>Core Products/Services:</strong> NTPC generates and sells bulk power to state utilities, operates power stations (coal, gas, hydro, renewable), and provides consultancy, energy trading, and coal mining services.</p>[](https://www.livemint.com/market/market-stats/stocks-ntpc-share-price-nse-bse-s0003057)
        <p><strong>Revenue Streams:</strong> Power generation accounts for 94% of revenue, with long-term PPAs ensuring stable cash flows. Ancillary services contribute 6%.</p>[](https://www.screener.in/company/NTPC/consolidated/)
        <p><strong>Competitive Advantages:</strong> Market leadership, government backing, diversified fuel mix, long-term contracts, and a strong renewable energy pipeline enhance stability and growth potential.</p>

        <h3>b) Management Quality</h3>
        <p><strong>Experience and Track Record:</strong> Led by Chairman Gurdeep Singh, NTPC's management has a proven track record in executing large-scale projects and transitioning to renewables. The team has consistently met capacity addition targets.</p>
        <p><strong>Corporate Governance:</strong> As a PSU, NTPC maintains high governance standards with independent directors and transparent disclosures. However, government influence may limit strategic flexibility.</p>[](https://www.screener.in/company/NTPC/consolidated/)

        <h3>c) Growth Strategy</h3>
        <p><strong>Expansion Plans:</strong> NTPC targets <u>130 GW</u> capacity by 2032, with 60 GW from renewables. Annual capex of ₹50,000-60,000 crore and a $750 million ECB loan support these plans.</p>[](https://x.com/Muhammed_iq_bal/status/1933461979299213705)
        <p><strong>Research and Development:</strong> Investments in green hydrogen, carbon capture, and energy storage align with India's net-zero goals, though R&D spending is modest compared to global peers.</p>

        <div class="page-break"></div>

        <h2>4. Shareholding Pattern Analysis</h2>
        <table>
            <tr><th>Category</th><th>Mar 2025</th><th>Dec 2024</th><th>Mar 2024</th><th>Mar 2023</th><th>Trend</th></tr>
            <tr><td>Promoters</td><td>51.10%</td><td>51.10%</td><td>51.10%</td><td>51.10%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>FIIs</td><td>17.79%</td><td>17.50%</td><td>17.90%</td><td>16.50%</td><td class="trend-neutral">Stable</td></tr>
            <tr><td>DIIs</td><td>17.54%</td><td>17.60%</td><td>17.40%</td><td>17.00%</td><td class="trend-positive">Increasing</td></tr>
            <tr><td>Public</td><td>13.57%</td><td>13.80%</td><td>13.60%</td><td>15.40%</td><td class="trend-negative">Declining</td></tr>
        </table>
        <p><strong>Analysis:</strong> Promoter holding by the Government of India remains steady at <u>51.10%</u>, ensuring control. DII holdings increased slightly, while FII and public holdings are stable or declining.</p>[](https://www.moneycontrol.com/india/stockpricequote/power-generationdistribution/ntpc/NTP)[](https://www.livemint.com/market/market-stats/stocks-ntpc-share-price-nse-bse-s0003057)
        <p><strong>Key Takeaways:</strong> Stable promoter holding reflects government commitment, while rising DII interest signals domestic confidence. Declining public holding may indicate retail investor caution amid high valuations.</p>

        <div class="page-break"></div>

        <h2>5. Investment Thesis</h2>
        <p><strong>Key Drivers for Future Growth:</strong></p>
        <ul>
            <li><strong>Capacity Expansion:</strong> Targeting 130 GW by 2032, with significant renewable additions, ensures long-term revenue growth.</li>[](https://x.com/Muhammed_iq_bal/status/1933461979299213705)
            <li><strong>Renewable Energy Focus:</strong> NTPC Green Energy's growth strengthens NTPC's position in India's energy transition.</li>
            <li><strong>Stable Cash Flows:</strong> Long-term PPAs and government backing provide revenue visibility.</li>
        </ul>
        <p><strong>Potential Catalysts:</strong></p>
        <ul>
            <li>Successful renewable project execution could drive valuation re-rating.</li>
            <li>Improved receivables collection could enhance cash flows.</li>
            <li>Potential dividend hikes could attract income investors.</li>
        </ul>
        <p><strong>Positioning for Industry Trends:</strong> NTPC is well-positioned for India's energy transition with a 60 GW renewable target. However, challenges include high leverage, regulatory tariff pressures, and competition from private renewable players. Government support mitigates risks.</p>

        <div class="page-break"></div>

        <h2>6. Valuation and Recommendation</h2>
        <p><strong>Fair Value Estimate:</strong> Using a discounted cash flow (DCF) model with a 6.9% revenue growth rate, a WACC of 8%, and a terminal growth rate of 2.5%, the fair value is estimated at <u>₹421</u> per share, implying a 26% upside from the current price of ₹332.85. This aligns with the median analyst target of ₹421.</p>[](https://economictimes.indiatimes.com/ntpc-ltd/stocks/companyid-12316.cms)
        <p><strong>Investment Recommendation:</strong> <u>BUY</u><br>
        <strong>Target Price:</strong> ₹421 (26% upside)<br>
        <strong>Investment Horizon:</strong> 18-24 months</p>
        <p><strong>Rationale:</strong></p>
        <ul>
            <li><strong>Growth Potential:</strong> A 11.4% revenue CAGR and 130 GW capacity target signal strong growth.</li>[](https://www.screener.in/company/NTPC/consolidated/)
            <li><strong>Stable Fundamentals:</strong> Improving debt levels and consistent dividends enhance stability.</li>
            <li><strong>Renewable Transition:</strong> NTPC Green Energy's growth positions NTPC for India's net-zero goals.</li>
            <li><strong>Valuation Upside:</strong> The current price offers a 26% upside to fair value, supported by analyst targets.</li>[](https://economictimes.indiatimes.com/ntpc-ltd/stocks/companyid-12316.cms)
        </ul>

        <div class="page-break"></div>

        <h2>7. Conclusion</h2>
        <p>NTPC Ltd is India's leading power generator, with a dominant market position and a clear strategy to transition to renewables. Its stable revenue streams, government backing, and ambitious 130 GW capacity target by 2032 position it well for long-term growth. Despite challenges like high leverage and declining operating margins, NTPC's improving debt levels, consistent dividends, and renewable energy focus mitigate risks.</p>
        <p>With a target price of <u>₹421</u>, representing a 26% upside over 18-24 months, NTPC warrants a <u>BUY</u> recommendation for investors seeking exposure to India's power sector and its energy transition story.</p>
    </div>
    <div class="footer">
        <p><strong>Disclaimer:</strong> This report is for informational purposes only and does not constitute investment advice. Investors should conduct their own research and consult financial advisors before making investment decisions. Data sourced from Screener.in and other public sources.</p>
    </div>
</body>
</html>
    `
  }
];

const Index = () => {
  const [selectedReport, setSelectedReport] = useState<typeof analysisReports[0] | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [requestedStock, setRequestedStock] = useState("");
  const [showRequestMsg, setShowRequestMsg] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const toolsDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  const scrollToReports = () => {
    document.getElementById('reports-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handlePreview = (report: typeof analysisReports[0]) => {
    setSelectedReport(report);
  };

  const handleDownloadPDF = async (report: typeof analysisReports[0]) => {
    let tempDiv: HTMLDivElement | null = null;
    
    try {
      if (!window.html2pdf) {
        alert('PDF download functionality requires html2pdf.js library. Please add the CDN link to your HTML head.');
        return;
      }

      // Create a temporary div with the report content
      tempDiv = document.createElement('div');
      
      // Create a complete HTML document structure
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${report.title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              color: #333;
              line-height: 1.6;
            }
            .header {
              background-color: #003087;
              color: white;
              padding: 20px;
              text-align: center;
              margin-bottom: 20px;
            }
            .container {
              max-width: 100%;
              margin: 0 auto;
            }
            .recommendation-box {
              background-color: #e6f3fa;
              border-left: 5px solid #003087;
              padding: 15px;
              margin: 20px 0;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f4f4f4;
            }
            .trend-positive { color: green; }
            .trend-negative { color: red; }
            .trend-neutral { color: orange; }
          </style>
        </head>
        <body>
          ${report.content}
        </body>
        </html>
      `;
      
      tempDiv.innerHTML = htmlContent;
      
      // Add to document
      document.body.appendChild(tempDiv);

      // Log the content for debugging
      console.log('Content being converted to PDF:', tempDiv.innerHTML);

      const filename = report.title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.pdf';
      
      const options = {
        margin: 0.5,
        filename: filename,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: true,
          letterRendering: true,
          scrollY: 0,
          scrollX: 0,
          windowWidth: tempDiv.scrollWidth,
          windowHeight: tempDiv.scrollHeight,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        }
      };

      console.log('Starting PDF generation with options:', options);

      // Wait for content to render
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Generate PDF
      await window.html2pdf()
        .set(options)
        .from(tempDiv)
        .save();

      console.log('PDF generation completed');
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF download failed. Please check console for details.');
    } finally {
      // Clean up
      if (tempDiv && tempDiv.parentNode) {
        tempDiv.parentNode.removeChild(tempDiv);
      }
    }
  };

  // Close dropdown on click outside
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
    <div className="min-h-screen text-gray-100">
      <AnimatedMarketBackground />
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/90 border-b border-gray-800">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-white">
            <Link to="/" className="hover:text-blue-400 transition-colors">Marketfolio</Link>
          </div>
          <nav className="flex items-center space-x-3 sm:space-x-6">
            <a href="#reports-section" onClick={scrollToReports} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base px-4 py-2 rounded-md">
              Analysis
            </a>
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
              onClick={e => { e.preventDefault(); setShowContact(true); }}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base px-4 py-2 rounded-md"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-2 sm:py-6 px-3 sm:px-6 text-center">
        <div className="container mx-auto max-w-xl sm:max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Clarity in Complexity.<br />
            <span className="text-blue-400">Elite Equity Analysis.</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
            In-depth, data-driven research reports to inform your investment strategy.
          </p>
          <Button 
            onClick={scrollToReports}
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            View Research
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          {/* TradingView Mini Charts Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between mt-6">
            <TradingViewMiniChart symbol="BSE:SENSEX" />
            <TradingViewMiniChart symbol="NSE:NIFTY" />
            <TradingViewMiniChart symbol="COINBASE:BITM2025" />
          </div>
        </div>
      </section>

      {/* Analysis Reports Section */}
      <section id="reports-section" className="py-10 sm:py-20 px-2 sm:px-6">
        <div className="container mx-auto max-w-2xl sm:max-w-6xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
            Latest Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {analysisReports.map((report) => (
              <Card key={report.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-white text-lg sm:text-xl mb-2">
                    {report.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-xs sm:text-sm mb-4">
                    {report.date}
                  </CardDescription>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {report.synopsis}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <Button 
                      onClick={() => handlePreview(report)}
                      variant="outline" 
                      className="flex-1 border-black text-black hover:bg-black hover:text-white text-sm sm:text-base"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button 
                      onClick={() => handleDownloadPDF(report)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Stock Request Section */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center">
            <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4 text-center">Request Research on a Stock</h3>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNKKM_BJLNj32jvf4GS_2tvxr8H6UZbuR2gJ1HcMyG2ita0g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all text-base sm:text-lg"
            >
              Submit Form
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-2 sm:px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-base">
            © 2025 Marketfolio. All Rights Reserved.
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
              <a href="mailto:vynew.2021@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                vynew.2021@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/vishnu2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                linkedin.com/in/vishnu2004
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Add TradingViewMiniChart component for each widget
const TradingViewMiniChart: React.FC<{ symbol: string }> = ({ symbol }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current) ref.current.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.innerHTML = JSON.stringify({
      symbol,
      width: '100%',
      height: 220,
      locale: 'en',
      dateRange: '12M',
      colorTheme: 'dark',
      isTransparent: false,
      autosize: true,
      largeChartUrl: ''
    });
    if (ref.current) ref.current.appendChild(script);
  }, [symbol]);
  return (
    <div className="w-full max-w-xs flex-1 mx-auto">
      <div ref={ref} className="w-full" />
    </div>
  );
};

export default Index;
