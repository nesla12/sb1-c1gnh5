import React from 'react';
import { PieChart, DollarSign, Users, Sprout, Code } from 'lucide-react';

interface RevenueShare {
  category: string;
  percentage: number;
  amount: number;
  icon: JSX.Element;
  color: string;
}

const RevenueDistribution = () => {
  const totalRevenue = 150000; // Example total revenue in USD
  
  const shares: RevenueShare[] = [
    {
      category: 'Community Projects',
      percentage: 30,
      amount: totalRevenue * 0.3,
      icon: <Sprout className="w-5 h-5" />,
      color: 'bg-green-500',
    },
    {
      category: 'User Rewards',
      percentage: 60,
      amount: totalRevenue * 0.6,
      icon: <Users className="w-5 h-5" />,
      color: 'bg-blue-500',
    },
    {
      category: 'Platform Development',
      percentage: 10,
      amount: totalRevenue * 0.1,
      icon: <Code className="w-5 h-5" />,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <DollarSign className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Revenue Distribution</h3>
        </div>
        <div className="flex items-center space-x-2">
          <PieChart className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-600">Last 12 Hours</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {shares.map((share) => (
          <div key={share.category} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-lg ${share.color} bg-opacity-10`}>
                  {React.cloneElement(share.icon, { className: `w-5 h-5 ${share.color.replace('bg-', 'text-')}` })}
                </div>
                <span className="font-medium text-gray-900">{share.category}</span>
              </div>
              <span className="text-sm font-medium text-gray-600">{share.percentage}%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              ${share.amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${share.color} h-2 rounded-full`}
                style={{ width: `${share.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-medium text-gray-900 mb-4">Recent Distributions</h4>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${shares[i % 3].color}`} />
                <div>
                  <div className="font-medium text-gray-900">{shares[i % 3].category}</div>
                  <div className="text-sm text-gray-600">Distribution #{1234 + i}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">
                  +${(Math.random() * 10000).toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">2 hours ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueDistribution;