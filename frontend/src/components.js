import React, { useState, useEffect } from 'react';

// Advanced Mock Data for Professional Trading Platform

// Technical Indicators Data
const mockTechnicalIndicators = {
  RSI: { value: 67.5, signal: 'NEUTRAL', color: 'text-yellow-500' },
  MACD: { value: 0.024, signal: 'BUY', color: 'text-green-500' },
  'Bollinger Bands': { value: 'UPPER', signal: 'SELL', color: 'text-red-500' },
  'Moving Average': { value: 'ABOVE', signal: 'BUY', color: 'text-green-500' },
  'Stochastic': { value: 45.2, signal: 'BUY', color: 'text-green-500' },
  'Williams %R': { value: -23.7, signal: 'BUY', color: 'text-green-500' },
  'ADX': { value: 32.8, signal: 'STRONG', color: 'text-blue-500' },
  'CCI': { value: 156.3, signal: 'OVERBOUGHT', color: 'text-red-500' }
};

// AI Trading Signals
const mockTradingSignals = [
  { 
    id: 1, 
    symbol: 'EURUSD', 
    direction: 'BUY', 
    strength: 87, 
    entryPrice: 1.0845, 
    stopLoss: 1.0820, 
    takeProfit: 1.0895, 
    riskReward: '1:2.1',
    timeframe: '4H',
    aiConfidence: 92,
    reasoning: 'Strong bullish momentum + oversold RSI + positive news sentiment'
  },
  { 
    id: 2, 
    symbol: 'GBPUSD', 
    direction: 'SELL', 
    strength: 79, 
    entryPrice: 1.2654, 
    stopLoss: 1.2689, 
    takeProfit: 1.2589, 
    riskReward: '1:1.8',
    timeframe: '1H',
    aiConfidence: 85,
    reasoning: 'Bearish divergence + resistance level + negative economic data'
  },
  { 
    id: 3, 
    symbol: 'USDJPY', 
    direction: 'BUY', 
    strength: 73, 
    entryPrice: 149.25, 
    stopLoss: 148.95, 
    takeProfit: 149.85, 
    riskReward: '1:2.0',
    timeframe: '15M',
    aiConfidence: 78,
    reasoning: 'Support bounce + bullish engulfing pattern + positive momentum'
  },
  { 
    id: 4, 
    symbol: 'BTCUSD', 
    direction: 'BUY', 
    strength: 91, 
    entryPrice: 42850, 
    stopLoss: 42400, 
    takeProfit: 43800, 
    riskReward: '1:2.1',
    timeframe: 'Daily',
    aiConfidence: 94,
    reasoning: 'Institutional accumulation + bullish flag breakout + strong volume'
  }
];

// Economic Calendar Data
const mockEconomicEvents = [
  { id: 1, time: '09:30', currency: 'USD', event: 'Non-Farm Payrolls', impact: 'HIGH', forecast: '185K', previous: '199K', actual: null },
  { id: 2, time: '10:00', currency: 'EUR', event: 'CPI Flash Estimate', impact: 'HIGH', forecast: '2.4%', previous: '2.6%', actual: '2.3%' },
  { id: 3, time: '14:30', currency: 'GBP', event: 'GDP Growth Rate', impact: 'MEDIUM', forecast: '0.2%', previous: '0.1%', actual: null },
  { id: 4, time: '16:00', currency: 'USD', event: 'Fed Speech', impact: 'HIGH', forecast: null, previous: null, actual: null },
  { id: 5, time: '22:30', currency: 'JPY', event: 'BoJ Meeting Minutes', impact: 'MEDIUM', forecast: null, previous: null, actual: null }
];

// Market Sentiment Data
const mockMarketSentiment = {
  overall: 72, // 0-100 scale
  fear_greed: 68,
  volatility: 'MEDIUM',
  trend: 'BULLISH',
  news_sentiment: 'POSITIVE',
  social_sentiment: 'NEUTRAL',
  institutional_flow: 'BUYING'
};

// Portfolio Performance Data
const mockPortfolioPerformance = {
  totalValue: 125847.32,
  dailyPnL: 1247.89,
  dailyPnLPercent: 0.99,
  weeklyPnL: 3456.78,
  weeklyPnLPercent: 2.83,
  monthlyPnL: 8934.56,
  monthlyPnLPercent: 7.65,
  totalPnL: 25847.32,
  totalPnLPercent: 25.85,
  winRate: 67.8,
  profitFactor: 1.87,
  sharpeRatio: 1.45,
  maxDrawdown: -12.3
};

// Risk Management Data
const mockRiskMetrics = {
  dailyVaR: 2847.56,
  portfolioRisk: 'MEDIUM',
  positionSizing: 'OPTIMAL',
  diversification: 85,
  correlation: 0.23,
  leverage: 2.5,
  marginUsed: 45.6,
  riskScore: 6.8
};

// Header Component with Advanced Features
export const Header = ({ activeTab, setActiveTab, darkMode, setDarkMode }) => {
  const [notifications] = useState(7);
  
  return (
    <header className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 sticky top-0 z-50`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FX</span>
            </div>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              FX<span className="text-blue-500">Signals</span>
            </h1>
          </div>
          
          <nav className="flex space-x-4">
            {['Dashboard', 'Signals', 'Analysis', 'Portfolio', 'Risk', 'Backtest', 'News'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : `${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            P&L: <span className="font-semibold text-green-500">+$1,247.89</span>
          </div>
          <div className="relative">
            <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
              🔔
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

// Advanced Trading Dashboard
export const TradingDashboard = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Portfolio Value" value={`$${mockPortfolioPerformance.totalValue.toLocaleString()}`} change="+2.34%" darkMode={darkMode} />
        <MetricCard title="Daily P&L" value={`$${mockPortfolioPerformance.dailyPnL.toLocaleString()}`} change={`+${mockPortfolioPerformance.dailyPnLPercent}%`} darkMode={darkMode} />
        <MetricCard title="Win Rate" value={`${mockPortfolioPerformance.winRate}%`} change="+1.2%" darkMode={darkMode} />
        <MetricCard title="Risk Score" value={mockRiskMetrics.riskScore.toFixed(1)} change="-0.3" darkMode={darkMode} />
      </div>

      {/* Main Trading Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TradingChart darkMode={darkMode} />
          <TechnicalIndicators darkMode={darkMode} />
        </div>
        
        <div className="space-y-6">
          <MarketSentiment darkMode={darkMode} />
          <AIInsights darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

// AI Trading Signals Component
export const TradingSignals = ({ darkMode }) => {
  const [signals, setSignals] = useState(mockTradingSignals);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignals(prev => prev.map(signal => ({
        ...signal,
        strength: Math.max(50, Math.min(100, signal.strength + (Math.random() - 0.5) * 10)),
        aiConfidence: Math.max(60, Math.min(100, signal.aiConfidence + (Math.random() - 0.5) * 8))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          AI Trading Signals
        </h2>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-medium ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Live</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Refresh Signals
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {signals.map((signal) => (
          <div key={signal.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border-l-4 ${signal.direction === 'BUY' ? 'border-green-500' : 'border-red-500'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold">{signal.symbol}</div>
                <div className={`px-3 py-1 rounded-full font-semibold text-sm ${
                  signal.direction === 'BUY' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                    : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {signal.direction}
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Strength:</span>
                  <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${signal.strength > 80 ? 'bg-green-500' : signal.strength > 60 ? 'bg-yellow-500' : 'bg-orange-500'}`}
                      style={{width: `${signal.strength}%`}}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{signal.strength}%</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  <span className="text-xs">🤖</span>
                  <span className={`text-xs font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{signal.aiConfidence}%</span>
                </div>
                <span className={`text-sm px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  {signal.timeframe}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Entry Price</span>
                <div className="font-semibold">{signal.entryPrice}</div>
              </div>
              <div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Stop Loss</span>
                <div className="font-semibold text-red-500">{signal.stopLoss}</div>
              </div>
              <div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Take Profit</span>
                <div className="font-semibold text-green-500">{signal.takeProfit}</div>
              </div>
              <div>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Risk/Reward</span>
                <div className="font-semibold text-blue-500">{signal.riskReward}</div>
              </div>
            </div>

            <div className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4`}>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>AI Analysis:</div>
              <div className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{signal.reasoning}</div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                Execute Trade
              </button>
              <button className={`px-4 py-2 rounded-lg border transition-colors ${
                darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Technical Analysis Component
export const TechnicalAnalysis = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Advanced Price Chart</h3>
            <img
              src="https://images.unsplash.com/photo-1643962578875-90e5e275d449?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBjaGFydHN8ZW58MHx8fGJsdWV8MTc1MzUyMjE0NXww&ixlib=rb-4.1.0&q=85"
              alt="Technical Analysis Chart"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          <MultiTimeframeAnalysis darkMode={darkMode} />
        </div>

        <div className="space-y-6">
          <TechnicalIndicatorsSummary darkMode={darkMode} />
          <PatternRecognition darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

// Portfolio Management Component
export const AdvancedPortfolio = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Portfolio Management</h2>
        <div className="flex space-x-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Rebalance
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Optimize
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <PortfolioOverview darkMode={darkMode} />
        <div className="lg:col-span-2">
          <PortfolioPerformance darkMode={darkMode} />
        </div>
        <RiskAnalysis darkMode={darkMode} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AllocationBreakdown darkMode={darkMode} />
        <PerformanceMetrics darkMode={darkMode} />
      </div>
    </div>
  );
};

// Risk Management Component
export const RiskManagement = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Risk Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RiskMetricCard title="Daily VaR" value={`$${mockRiskMetrics.dailyVaR.toLocaleString()}`} status="NORMAL" darkMode={darkMode} />
        <RiskMetricCard title="Portfolio Risk" value={mockRiskMetrics.portfolioRisk} status="MEDIUM" darkMode={darkMode} />
        <RiskMetricCard title="Max Drawdown" value={`${mockPortfolioPerformance.maxDrawdown}%`} status="LOW" darkMode={darkMode} />
        <RiskMetricCard title="Sharpe Ratio" value={mockPortfolioPerformance.sharpeRatio.toFixed(2)} status="GOOD" darkMode={darkMode} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PositionSizing darkMode={darkMode} />
        <RiskMonitoring darkMode={darkMode} />
      </div>
    </div>
  );
};

// Backtesting Component
export const Backtesting = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Strategy Backtesting</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BacktestSetup darkMode={darkMode} />
        <div className="lg:col-span-2">
          <BacktestResults darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

// Economic Calendar Component
export const EconomicCalendar = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Economic Calendar & News</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalendarEvents darkMode={darkMode} />
        <MarketNews darkMode={darkMode} />
      </div>
    </div>
  );
};

// Supporting Components

const MetricCard = ({ title, value, change, darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
        <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
      </div>
      <div className="text-right">
        <span className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
      </div>
    </div>
  </div>
);

const TradingChart = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <div className="flex justify-between items-center mb-4">
      <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>EURUSD - Live Chart</h3>
      <div className="flex space-x-2">
        {['1M', '5M', '15M', '1H', '4H', '1D'].map((tf) => (
          <button key={tf} className={`px-3 py-1 rounded text-xs ${tf === '4H' ? 'bg-blue-600 text-white' : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}`}>
            {tf}
          </button>
        ))}
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1643962578875-90e5e275d449?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBjaGFydHN8ZW58MHx8fGJsdWV8MTc1MzUyMjE0NXww&ixlib=rb-4.1.0&q=85"
      alt="Trading Chart"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
);

const TechnicalIndicators = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Technical Indicators</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(mockTechnicalIndicators).map(([indicator, data]) => (
        <div key={indicator} className="text-center">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{indicator}</div>
          <div className={`font-semibold ${data.color}`}>{data.signal}</div>
          <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{data.value}</div>
        </div>
      ))}
    </div>
  </div>
);

const MarketSentiment = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Market Sentiment</h3>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Overall Sentiment</span>
        <div className="flex items-center space-x-2">
          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: `${mockMarketSentiment.overall}%`}}></div>
          </div>
          <span className="text-sm font-medium">{mockMarketSentiment.overall}%</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Fear & Greed</span>
          <span className="text-green-500 font-medium">{mockMarketSentiment.fear_greed}</span>
        </div>
        <div className="flex justify-between">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Trend</span>
          <span className="text-blue-500 font-medium">{mockMarketSentiment.trend}</span>
        </div>
        <div className="flex justify-between">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Volatility</span>
          <span className="text-yellow-500 font-medium">{mockMarketSentiment.volatility}</span>
        </div>
      </div>
    </div>
  </div>
);

const AIInsights = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border border-purple-200 dark:border-purple-800`}>
    <div className="flex items-center space-x-2 mb-4">
      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs">🤖</span>
      </div>
      <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AI Market Insights</h3>
    </div>
    
    <div className="space-y-3">
      <div className={`bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-3`}>
        <div className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-1">Market Prediction</div>
        <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          High probability of bullish continuation in EURUSD based on institutional flow analysis and news sentiment.
        </div>
      </div>
      
      <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-3`}>
        <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">Risk Alert</div>
        <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Monitor upcoming NFP release at 14:30. High volatility expected in USD pairs.
        </div>
      </div>
    </div>
  </div>
);

const CalendarEvents = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Today's Events</h3>
    <div className="space-y-3">
      {mockEconomicEvents.map((event) => (
        <div key={event.id} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="flex items-center space-x-3">
            <div className={`w-2 h-8 rounded ${
              event.impact === 'HIGH' ? 'bg-red-500' : 
              event.impact === 'MEDIUM' ? 'bg-yellow-500' : 'bg-green-500'
            }`}></div>
            <div>
              <div className="font-medium text-sm">{event.time}</div>
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.currency}</div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{event.event}</div>
              <div className="flex space-x-2 text-xs">
                {event.forecast && <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>F: {event.forecast}</span>}
                {event.actual && <span className="text-green-500">A: {event.actual}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Additional helper components would be defined here...
// Due to length constraints, I'm including the main structure

const RiskMetricCard = ({ title, value, status, darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-4 shadow-lg`}>
    <div className="flex justify-between items-center">
      <div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
        <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
      </div>
      <div className={`px-2 py-1 rounded text-xs font-medium ${
        status === 'GOOD' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
        status === 'NORMAL' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
        status === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
        'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
      }`}>
        {status}
      </div>
    </div>
  </div>
);

// Placeholder components for complex sections
const MultiTimeframeAnalysis = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Multi-Timeframe Analysis</h3>
    <div className="grid grid-cols-3 gap-4">
      {['1H: BULLISH', '4H: BULLISH', 'Daily: NEUTRAL'].map((tf, i) => (
        <div key={i} className={`text-center p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className={`text-sm font-medium ${tf.includes('BULLISH') ? 'text-green-500' : 'text-yellow-500'}`}>{tf}</div>
        </div>
      ))}
    </div>
  </div>
);

const TechnicalIndicatorsSummary = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Indicators Summary</h3>
    <img
      src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3N8ZW58MHx8fGJsdWV8MTc1MzUyMjE2OXww&ixlib=rb-4.1.0&q=85"
      alt="Indicators Dashboard"
      className="w-full h-32 object-cover rounded-lg"
    />
  </div>
);

const PatternRecognition = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Pattern Recognition</h3>
    <div className="space-y-2">
      {['Bullish Flag Detected', 'Support Level Confirmed', 'Divergence Pattern'].map((pattern, i) => (
        <div key={i} className={`text-sm p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          ✓ {pattern}
        </div>
      ))}
    </div>
  </div>
);

const PortfolioOverview = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Portfolio Overview</h3>
    <div className="space-y-4">
      <div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Value</div>
        <div className="text-2xl font-bold text-green-500">${mockPortfolioPerformance.totalValue.toLocaleString()}</div>
      </div>
      <div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Today's P&L</div>
        <div className="text-lg font-semibold text-green-500">+${mockPortfolioPerformance.dailyPnL.toLocaleString()}</div>
      </div>
    </div>
  </div>
);

const PortfolioPerformance = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Performance Chart</h3>
    <img
      src="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxhbmFseXRpY3N8ZW58MHx8fGJsdWV8MTc1MzUyMjE2OXww&ixlib=rb-4.1.0&q=85"
      alt="Performance Chart"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
);

const RiskAnalysis = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Risk Analysis</h3>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Risk Score</span>
        <span className="text-yellow-500 font-medium">{mockRiskMetrics.riskScore}/10</span>
      </div>
      <div className="flex justify-between">
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Max Drawdown</span>
        <span className="text-red-500 font-medium">{mockPortfolioPerformance.maxDrawdown}%</span>
      </div>
      <div className="flex justify-between">
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sharpe Ratio</span>
        <span className="text-green-500 font-medium">{mockPortfolioPerformance.sharpeRatio}</span>
      </div>
    </div>
  </div>
);

const AllocationBreakdown = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Asset Allocation</h3>
    <img
      src="https://images.unsplash.com/photo-1639768939489-025b90ba9f23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBjaGFydHN8ZW58MHx8fGJsdWV8MTc1MzUyMjE0NXww&ixlib=rb-4.1.0&q=85"
      alt="Asset Allocation"
      className="w-full h-48 object-cover rounded-lg"
    />
  </div>
);

const PerformanceMetrics = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Key Metrics</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-green-500">{mockPortfolioPerformance.winRate}%</div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Win Rate</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-500">{mockPortfolioPerformance.profitFactor}</div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Profit Factor</div>
      </div>
    </div>
  </div>
);

const PositionSizing = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Position Sizing Calculator</h3>
    <div className="space-y-4">
      <div>
        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Account Balance</label>
        <input type="number" placeholder="100000" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} />
      </div>
      <div>
        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Risk %</label>
        <input type="number" placeholder="2" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} />
      </div>
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
        Calculate Position Size
      </button>
    </div>
  </div>
);

const RiskMonitoring = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Real-Time Risk Monitoring</h3>
    <img
      src="https://images.unsplash.com/photo-1660020619062-70b16c44bf0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxmaW5hbmNpYWwlMjBjaGFydHN8ZW58MHx8fGJsdWV8MTc1MzUyMjE0NXww&ixlib=rb-4.1.0&q=85"
      alt="Risk Monitoring"
      className="w-full h-48 object-cover rounded-lg"
    />
  </div>
);

const BacktestSetup = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Backtest Setup</h3>
    <div className="space-y-4">
      <div>
        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Strategy</label>
        <select className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
          <option>RSI + MACD</option>
          <option>Moving Average Crossover</option>
          <option>Bollinger Bands</option>
        </select>
      </div>
      <div>
        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Date Range</label>
        <input type="date" className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} />
      </div>
      <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all">
        Run Backtest
      </button>
    </div>
  </div>
);

const BacktestResults = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Backtest Results</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="text-center">
        <div className="text-xl font-bold text-green-500">+24.5%</div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Return</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-blue-500">1.89</div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sharpe Ratio</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-yellow-500">-8.2%</div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Max Drawdown</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-purple-500">68.4%</div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Win Rate</div>
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1700498466261-824cbd01974e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8Ymx1ZXwxNzUzNTIyMTc3fDA&ixlib=rb-4.1.0&q=85"
      alt="Backtest Chart"
      className="w-full h-48 object-cover rounded-lg"
    />
  </div>
);

const MarketNews = ({ darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Market News</h3>
    <div className="space-y-4">
      {[
        { title: 'Fed Hints at Rate Cut in Next Meeting', impact: 'HIGH', time: '2 hours ago' },
        { title: 'ECB Maintains Dovish Stance', impact: 'MEDIUM', time: '4 hours ago' },
        { title: 'USD Strengthens on Employment Data', impact: 'HIGH', time: '6 hours ago' }
      ].map((news, i) => (
        <div key={i} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="flex justify-between items-start mb-2">
            <div className="font-medium text-sm">{news.title}</div>
            <div className={`px-2 py-1 rounded text-xs ${
              news.impact === 'HIGH' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : 
              'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
            }`}>
              {news.impact}
            </div>
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{news.time}</div>
        </div>
      ))}
    </div>
  </div>
);