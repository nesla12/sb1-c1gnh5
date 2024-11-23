import React from 'react';
import { Vote, Lock, Unlock, History } from 'lucide-react';

interface VotingStats {
  totalPower: number;
  locked: number;
  available: number;
  delegated: number;
}

const VotingPower = () => {
  const votingStats: VotingStats = {
    totalPower: 1000,
    locked: 400,
    available: 500,
    delegated: 100,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Vote className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Voting Power</h3>
        </div>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
          View History
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Total Power</div>
          <div className="text-xl font-bold text-gray-900">{votingStats.totalPower}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Locked</div>
          <div className="text-xl font-bold text-gray-900">{votingStats.locked}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Available</div>
          <div className="text-xl font-bold text-gray-900">{votingStats.available}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Delegated</div>
          <div className="text-xl font-bold text-gray-900">{votingStats.delegated}</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <Lock className="w-4 h-4 mr-2" />
          Lock Tokens
        </button>
        <button className="flex-1 flex items-center justify-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
          <Unlock className="w-4 h-4 mr-2" />
          Unlock Tokens
        </button>
        <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <History className="w-4 h-4 mr-2" />
          Delegate
        </button>
      </div>
    </div>
  );
};

export default VotingPower;