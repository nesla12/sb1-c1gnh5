import React from 'react';
import { ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'send',
    token: 'ETH',
    amount: '0.5',
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    timestamp: '2024-03-10T14:30:00Z',
    status: 'completed',
  },
  {
    id: 2,
    type: 'receive',
    token: 'SOL',
    amount: '10.0',
    address: '0x123d35Cc6634C0532925a3b844Bc454e4438f123',
    timestamp: '2024-03-10T13:15:00Z',
    status: 'completed',
  },
  {
    id: 3,
    type: 'swap',
    token: 'ECO',
    amount: '100.0',
    address: '0x456d35Cc6634C0532925a3b844Bc454e4438f456',
    timestamp: '2024-03-10T12:45:00Z',
    status: 'pending',
  },
];

const TransactionHistory = () => {
  return (
    <div className="divide-y divide-gray-200">
      {transactions.map((tx) => (
        <div key={tx.id} className="py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg mr-4 ${
              tx.type === 'send' ? 'bg-red-100' :
              tx.type === 'receive' ? 'bg-green-100' :
              'bg-blue-100'
            }`}>
              {tx.type === 'send' ? (
                <ArrowUpRight className={`w-5 h-5 text-red-600`} />
              ) : tx.type === 'receive' ? (
                <ArrowDownRight className={`w-5 h-5 text-green-600`} />
              ) : (
                <RefreshCw className={`w-5 h-5 text-blue-600`} />
              )}
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} {tx.token}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(tx.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-gray-900">
              {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.token}
            </div>
            <div className="text-sm text-gray-500">
              {tx.address.slice(0, 6)}...{tx.address.slice(-4)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;