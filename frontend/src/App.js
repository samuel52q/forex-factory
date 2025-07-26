import React, { useState } from 'react';
import './App.css';
import {
  Header,
  HeroSection,
  Dashboard,
  ArbitrageSection,
  Portfolio,
  TradingSection,
  Analytics
} from './components';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <>
            <HeroSection darkMode={darkMode} />
            <div className="max-w-7xl mx-auto px-6 py-8">
              <Dashboard darkMode={darkMode} />
            </div>
          </>
        );
      case 'Arbitrage':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <ArbitrageSection darkMode={darkMode} />
          </div>
        );
      case 'Portfolio':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Portfolio darkMode={darkMode} />
          </div>
        );
      case 'Trading':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <TradingSection darkMode={darkMode} />
          </div>
        );
      case 'Analytics':
        return (
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Analytics darkMode={darkMode} />
          </div>
        );
      default:
        return (
          <>
            <HeroSection darkMode={darkMode} />
            <div className="max-w-7xl mx-auto px-6 py-8">
              <Dashboard darkMode={darkMode} />
            </div>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {renderContent()}
    </div>
  );
}

export default App;