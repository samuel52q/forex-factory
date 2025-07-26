import React, { useState, useEffect } from 'react';

// Mock data for arbitrage opportunities
const mockArbitrageData = [
  { id: 1, pair: 'BTC/USDT', buyExchange: 'Binance', sellExchange: 'Coinbase', buyPrice: 42850.23, sellPrice: 42923.45, profit: 73.22, profitPercent: 0.17, volume: 2.5 },
  { id: 2, pair: 'ETH/USDT', buyExchange: 'KuCoin', sellExchange: 'Kraken', buyPrice: 2634.56, sellPrice: 2648.92, profit: 14.36, profitPercent: 0.55, volume: 12.8 },
  { id: 3, pair: 'ADA/USDT', buyExchange: 'Huobi', sellExchange: 'Binance', buyPrice: 0.4523, sellPrice: 0.4534, profit: 0.0011, profitPercent: 0.24, volume: 2500 },
  { id: 4, pair: 'SOL/USDT', buyExchange: 'FTX', sellExchange: 'Coinbase', buyPrice: 96.45, sellPrice: 97.12, profit: 0.67, profitPercent: 0.69, volume: 45.2 },
  { id: 5, pair: 'MATIC/USDT', buyExchange: 'Binance', sellExchange: 'KuCoin', buyPrice: 0.8923, sellPrice: 0.8945, profit: 0.0022, profitPercent: 0.25, volume: 1200 }
];

const mockPortfolioData = [
  { asset: 'BTC', amount: 0.25, value: 10712.56, change: 2.35, changePercent: 0.022 },
  { asset: 'ETH', amount: 5.67, value: 14935.72, change: 156.89, changePercent: 0.011 },
  { asset: 'ADA', amount: 2500, value: 1130.75, change: -23.45, changePercent: -0.020 },
  { asset: 'SOL', amount: 15.8, value: 1528.36, change: 45.67, changePercent: 0.031 },
  { asset: 'USDT', amount: 5000, value: 5000, change: 0, changePercent: 0 }
];

const mockOrderBook = {
  bids: [
    { price: 42850.23, amount: 0.125, total: 5356.28 },
    { price: 42845.67, amount: 0.250, total: 10711.42 },
    { price: 42840.12, amount: 0.089, total: 3812.77 },
    { price: 42835.45, amount: 0.156, total: 6682.33 },
    { price: 42830.78, amount: 0.234, total: 10022.40 }
  ],
  asks: [
    { price: 42855.89, amount: 0.098, total: 4199.88 },
    { price: 42860.45, amount: 0.187, total: 8014.90 },
    { price: 42865.23, amount: 0.145, total: 6215.46 },
    { price: 42870.67, amount: 0.203, total: 8702.85 },
    { price: 42875.12, amount: 0.167, total: 7160.14 }
  ]
};

// Header Component
export const Header = ({ activeTab, setActiveTab, darkMode, setDarkMode }) => {
  const [balance] = useState(33307.39);

  return (
    <header className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Vinancee</h1>
          </div>
          
          <nav className="flex space-x-6">
            {['Dashboard', 'Arbitrage', 'Portfolio', 'Trading', 'Analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:bg-gray-100 dark:hover:bg-gray-800`
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Balance: <span className="font-semibold text-green-500">${balance.toLocaleString()}</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-md ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = ({ darkMode }) => {
  return (
    <section className={`relative ${darkMode ? 'bg-gray-900' : 'bg-white'} overflow-hidden`}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1662460149857-2759c9b2c6f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHx0cmFkaW5nJTIwaW50ZXJmYWNlfGVufDB8fHxibHVlfDE3NTM1MjA1NzR8MA&ixlib=rb-4.1.0&q=85"
          alt="Trading Interface"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Advanced Arbitrage Trading Platform
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-3xl mx-auto`}>
            Discover profitable arbitrage opportunities across multiple exchanges with real-time price monitoring and automated execution
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors">
              Start Trading
            </button>
            <button className={`px-8 py-3 rounded-lg font-semibold border-2 transition-colors ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dashboard Component
export const Dashboard = ({ darkMode }) => {
  const [stats] = useState({
    totalProfit: 1247.89,
    totalTrades: 156,
    successRate: 94.2,
    avgProfit: 8.01
  });

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Profit" value={`$${stats.totalProfit}`} change="+12.5%" darkMode={darkMode} />
        <StatsCard title="Total Trades" value={stats.totalTrades} change="+8.2%" darkMode={darkMode} />
        <StatsCard title="Success Rate" value={`${stats.successRate}%`} change="+2.1%" darkMode={darkMode} />
        <StatsCard title="Avg Profit" value={`$${stats.avgProfit}`} change="+5.4%" darkMode={darkMode} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Trading Performance</h3>
          <img
            src="https://images.unsplash.com/photo-1643962578875-90e5e275d449?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwaW50ZXJmYWNlfGVufDB8fHxibHVlfDE3NTM1MjA1NzR8MA&ixlib=rb-4.1.0&q=85"
            alt="Trading Charts"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Market Analytics</h3>
          <img
            src="https://images.unsplash.com/photo-1586448681913-2fc1b29c5cca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc1MzUyMDU4MXww&ixlib=rb-4.1.0&q=85"
            alt="Financial Dashboard"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

// Arbitrage Component
export const ArbitrageSection = ({ darkMode }) => {
  const [opportunities, setOpportunities] = useState(mockArbitrageData);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpportunities(prev => prev.map(opp => ({
        ...opp,
        buyPrice: opp.buyPrice + (Math.random() - 0.5) * 10,
        sellPrice: opp.sellPrice + (Math.random() - 0.5) * 10,
        profit: Math.random() * 100,
        profitPercent: Math.random() * 1
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Arbitrage Opportunities
        </h2>
        <div className="flex space-x-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Auto Trade
          </button>
          <button className={`px-4 py-2 rounded-lg border transition-colors ${
            darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}>
            Refresh
          </button>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Pair</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Buy Exchange</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Sell Exchange</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Buy Price</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Sell Price</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Profit</th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>Action</th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {opportunities.map((opp) => (
                <tr key={opp.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{opp.pair}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{opp.buyExchange}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{opp.sellExchange}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>${opp.buyPrice.toFixed(2)}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>${opp.sellPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex flex-col">
                      <span className="text-green-500 font-medium">${opp.profit.toFixed(2)}</span>
                      <span className="text-green-400 text-xs">{opp.profitPercent.toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                      Execute
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Portfolio Component
export const Portfolio = ({ darkMode }) => {
  const totalValue = mockPortfolioData.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Portfolio</h2>
        <div className="text-right">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Value</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${totalValue.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
            <div className="p-6">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Holdings</h3>
              <div className="space-y-4">
                {mockPortfolioData.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{asset.asset}</span>
                      </div>
                      <div>
                        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{asset.asset}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{asset.amount} {asset.asset}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${asset.value.toLocaleString()}</p>
                      <p className={`text-sm ${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(2)} ({asset.changePercent >= 0 ? '+' : ''}{(asset.changePercent * 100).toFixed(1)}%)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Portfolio Distribution</h3>
            <div className="space-y-3">
              {mockPortfolioData.map((asset, index) => {
                const percentage = (asset.value / totalValue * 100).toFixed(1);
                return (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{asset.asset}</span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: `${percentage}%`}}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Deposit Funds
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Withdraw Funds
              </button>
              <button className={`w-full py-2 rounded-lg border transition-colors ${
                darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                Rebalance Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Trading Component
export const TradingSection = ({ darkMode }) => {
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [orderType, setOrderType] = useState('market');
  const [side, setSide] = useState('buy');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Order Book */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Order Book - {selectedPair}</h3>
        
        {/* Asks */}
        <div className="mb-4">
          <h4 className="text-red-500 text-sm font-medium mb-2">Asks (Sell Orders)</h4>
          <div className="space-y-1">
            {mockOrderBook.asks.reverse().map((ask, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-red-500">${ask.price.toFixed(2)}</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{ask.amount}</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>${ask.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Price */}
        <div className="text-center py-2 border-y border-gray-300 dark:border-gray-600 mb-4">
          <span className="text-lg font-bold text-green-500">$42,853.45</span>
          <span className="text-sm text-green-500 ml-2">+0.25%</span>
        </div>

        {/* Bids */}
        <div>
          <h4 className="text-green-500 text-sm font-medium mb-2">Bids (Buy Orders)</h4>
          <div className="space-y-1">
            {mockOrderBook.bids.map((bid, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-green-500">${bid.price.toFixed(2)}</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{bid.amount}</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>${bid.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trading Form */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Place Order</h3>
        
        <div className="space-y-4">
          {/* Pair Selection */}
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Trading Pair</label>
            <select 
              value={selectedPair}
              onChange={(e) => setSelectedPair(e.target.value)}
              className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            >
              <option value="BTC/USDT">BTC/USDT</option>
              <option value="ETH/USDT">ETH/USDT</option>
              <option value="ADA/USDT">ADA/USDT</option>
              <option value="SOL/USDT">SOL/USDT</option>
            </select>
          </div>

          {/* Order Type */}
          <div className="flex space-x-2">
            <button
              onClick={() => setOrderType('market')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                orderType === 'market' 
                  ? 'bg-blue-600 text-white' 
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
              }`}
            >
              Market
            </button>
            <button
              onClick={() => setOrderType('limit')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                orderType === 'limit' 
                  ? 'bg-blue-600 text-white' 
                  : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
              }`}
            >
              Limit
            </button>
          </div>

          {/* Buy/Sell */}
          <div className="flex space-x-2">
            <button
              onClick={() => setSide('buy')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                side === 'buy' ? 'bg-green-600 text-white' : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setSide('sell')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                side === 'sell' ? 'bg-red-600 text-white' : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
              }`}
            >
              Sell
            </button>
          </div>

          {/* Amount */}
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Amount</label>
            <input
              type="number"
              placeholder="0.00"
              className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            />
          </div>

          {orderType === 'limit' && (
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Price</label>
              <input
                type="number"
                placeholder="0.00"
                className={`w-full p-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>
          )}

          <button className={`w-full py-3 rounded-md font-medium ${
            side === 'buy' 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-red-600 text-white hover:bg-red-700'
          } transition-colors`}>
            {side === 'buy' ? 'Buy' : 'Sell'} {selectedPair.split('/')[0]}
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Price Chart</h3>
        <img
          src="https://images.unsplash.com/photo-1645731504293-ad4d5da42a10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHx0cmFkaW5nJTIwaW50ZXJmYWNlfGVufDB8fHxibHVlfDE3NTM1MjA1NzR8MA&ixlib=rb-4.1.0&q=85"
          alt="Trading Chart"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

// Analytics Component
export const Analytics = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Advanced Trading Analytics</h3>
          <img
            src="https://images.unsplash.com/photo-1660020619062-70b16c44bf0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHx0cmFkaW5nJTIwaW50ZXJmYWNlfGVufDB8fHxibHVlfDE3NTM1MjA1NzR8MA&ixlib=rb-4.1.0&q=85"
            alt="Analytics Dashboard"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Market Sentiment</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Fear & Greed Index</span>
              <span className="text-green-500 font-semibold">68 (Greed)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Market Volatility</span>
              <span className="text-yellow-500 font-semibold">Medium</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Active Arbitrage Opps</span>
              <span className="text-blue-500 font-semibold">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Avg Spread</span>
              <span className="text-purple-500 font-semibold">0.34%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, change, darkMode }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
        <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
      </div>
      <div className="text-right">
        <span className="text-green-500 text-sm font-medium">{change}</span>
      </div>
    </div>
  </div>
);