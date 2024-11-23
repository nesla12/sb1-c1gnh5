import React from 'react';
import { LineChart, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const FeeAnalytics = () => {
  const feeStats = {
    totalFees: 25000,
    change: 12.5,
    hourlyData: [
      { hour: '1h', amount: 2100 },
      { hour: '2h', amount: 2300 },
      { hour: '3h', amount: 1900 },
      { hour: '4h', amount: 2500 },
      { hour: '5h', amount: 2200 },
      { hour: '6h', amount: 2400 },
      { hour: '7h', amount: 2600 },
      { hour: '8h', amount: 2350 },
      { hour: '9h', amount: 2450 },
      { hour: '10h', amount: 2150 },
      { hour: '11h', amount: 2250 },
      { hour: '12h', amount: 2400 },
    ],
  };

  const maxAmount = Math.max(...feeStats.hourlyData.map(d => d.amount));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <LineChart className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Fee Analytics</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-600">12 Hour Overview</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Total Fees (12h)</div>
          <div className="text-2xl font-bold text-gray-900">
            ${feeStats.totalFees.toLocaleString()}
          </div>
          <div className="flex items-center mt-2">
            {feeStats.change >= 0 ? (
              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              feeStats.change >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {Math.abs(feeStats.change)}% vs previous 12h
            </span>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Fee Distribution</div>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 mb-1">Community</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }} />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 mb-1">Users</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 mb-1">Platform</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end space-x-2">
          {feeStats.hourlyData.map((data, index) => (
            <div
              key={data.hour}
              className="flex-1 flex flex-col items-center"
            >
              <div
                className="w-full bg-purple-100 rounded-t"
                style={{
                  height: `${(data.amount / maxAmount) * 100}%`,
                  transition: 'height 0.3s ease-in-out',
                }}
              />
              <div className="text-xs text-gray-600 mt-2">{data.hour}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeAnalytics;