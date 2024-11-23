import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';

const ProjectAnalytics = () => {
  const stats = [
    { label: 'Active Votes', value: '12.5K', change: '+22%', icon: <Users className="w-5 h-5" /> },
    { label: 'Avg. Vote Weight', value: '450', change: '+15%', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Projects Supported', value: '28', change: '+8%', icon: <BarChart3 className="w-5 h-5" /> },
    { label: 'Success Rate', value: '92%', change: '+5%', icon: <PieChart className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Analytics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="text-purple-600">{stat.icon}</div>
              <span className="text-green-600 text-sm font-medium">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-gray-900">Recent Votes</h4>
          <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-medium text-gray-900">Project {i}</div>
                  <div className="text-sm text-gray-600">2 hours ago</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">+100 VOTE</div>
                <div className="text-sm text-gray-600">$50.00</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAnalytics;