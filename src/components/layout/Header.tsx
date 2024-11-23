import React from 'react';
import { Wallet, Store, Users, BookOpen, LineChart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
    { name: 'Marketplace', icon: <Store className="w-5 h-5" /> },
    { name: 'Social', icon: <Users className="w-5 h-5" /> },
    { name: 'Learn', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Impact', icon: <LineChart className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                ZEITGEIST
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 hover:bg-purple-50 rounded-md"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Connect
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;