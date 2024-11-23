import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform the World Through{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Conscious Action
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join a global community leveraging AI and blockchain technology to create positive impact
            and drive conscious evolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full border border-gray-200 hover:border-purple-500 transition-colors">
              Explore Impact
            </button>
          </div>
        </div>
      </div>

      {/* Floating AI Guide Button */}
      <button className="fixed bottom-6 right-6 bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group">
        <Bot className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default Hero;