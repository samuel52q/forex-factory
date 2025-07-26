import React, { useState } from 'react';
import './App.css';
import {
  Header,
  TradingDashboard,
  TradingSignals,
  TechnicalAnalysis,
  AdvancedPortfolio,
  RiskManagement,
  Backtesting,
  EconomicCalendar
} from './components';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <TradingDashboard darkMode={darkMode} />;
      case 'Signals':
        return <TradingSignals darkMode={darkMode} />;
      case 'Analysis':
        return <TechnicalAnalysis darkMode={darkMode} />;
      case 'Portfolio':
        return <AdvancedPortfolio darkMode={darkMode} />;
      case 'Risk':
        return <RiskManagement darkMode={darkMode} />;
      case 'Backtest':
        return <Backtesting darkMode={darkMode} />;
      case 'News':
        return <EconomicCalendar darkMode={darkMode} />;
      default:
        return <TradingDashboard darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {renderContent()}
      </div>
      
      {/* Floating AI Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
          <span className="text-xl">🤖</span>
        </button>
      </div>
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default App;