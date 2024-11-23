import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TokenBalanceProps {
  token: {
    name: string;
    symbol: string;
    balance: string;
    value: number;
    change: number;
  };
}

const TokenBalance = ({ token }: TokenBalanceProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">{token.name}</h3>
        <span className="text-sm text-gray-500">{token.symbol}</span>
      </div>
      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900">{token.balance}</div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-sm text-gray-500">
            ${token.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`flex items-center text-sm ${token.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {token.change >= 0 ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {Math.abs(token.change)}%
          </div>
        </div>
      </div>
      <button className="w-full py-2 text-sm text-purple-600 hover:text-purple-700 font-medium">
        View Details
      </button>
    </div>
  );
};

export default TokenBalance;