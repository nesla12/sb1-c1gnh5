import React from 'react';
import { Copy, QrCode, Share2, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import TokenBalance from './TokenBalance';
import TransactionHistory from './TransactionHistory';
import VotingPower from './VotingPower';
import ProjectAnalytics from '../analytics/ProjectAnalytics';

const WalletDashboard = () => {
  const walletAddress = '0x1234...5678';
  
  const tokens = [
    { name: 'Ethereum', symbol: 'ETH', balance: '2.45', value: 4521.23, change: 2.5 },
    { name: 'Solana', symbol: 'SOL', balance: '45.12', value: 1234.56, change: -1.2 },
    { name: 'EcoToken', symbol: 'ECO', balance: '1250.00', value: 625.00, change: 5.3 },
    { name: 'Voting Power', symbol: 'VOTE', balance: '500.00', value: 250.00, change: 0.8 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Wallet Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Wallet</h2>
            <div className="flex items-center mt-2 space-x-2">
              <code className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{walletAddress}</code>
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <Copy className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <QrCode className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Top Up
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Send
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <ArrowDownRight className="w-4 h-4 mr-2" />
              Receive
            </button>
          </div>
        </div>
      </div>

      {/* Token Balances */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {tokens.map((token) => (
          <TokenBalance key={token.symbol} token={token} />
        ))}
      </div>

      {/* Voting Power Section */}
      <div className="mb-8">
        <VotingPower />
      </div>

      {/* Project Analytics */}
      <div className="mb-8">
        <ProjectAnalytics />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            View All
          </button>
        </div>
        <TransactionHistory />
      </div>
    </div>
  );
};

export default WalletDashboard;