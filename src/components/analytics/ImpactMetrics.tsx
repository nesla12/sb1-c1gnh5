import React from 'react';
import { TreePine, Droplets, Wind, Users, Leaf } from 'lucide-react';

const ImpactMetrics = () => {
  const metrics = [
    {
      title: 'Carbon Offset',
      value: '2,450',
      unit: 'tons',
      change: '+12%',
      icon: <Leaf className="w-5 h-5" />,
      color: 'text-green-600',
    },
    {
      title: 'Trees Planted',
      value: '125,000',
      unit: 'trees',
      change: '+8%',
      icon: <TreePine className="w-5 h-5" />,
      color: 'text-emerald-600',
    },
    {
      title: 'Water Saved',
      value: '1.2M',
      unit: 'liters',
      change: '+15%',
      icon: <Droplets className="w-5 h-5" />,
      color: 'text-blue-600',
    },
    {
      title: 'Clean Energy',
      value: '850',
      unit: 'MWh',
      change: '+20%',
      icon: <Wind className="w-5 h-5" />,
      color: 'text-cyan-600',
    },
    {
      title: 'Communities Impacted',
      value: '45',
      unit: 'regions',
      change: '+5%',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Global Impact Metrics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {metrics.map((metric) => (
          <div key={metric.title} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className={`${metric.color}`}>{metric.icon}</div>
              <span className="text-green-600 text-sm font-medium">{metric.change}</span>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-gray-600">{metric.title}</span>
                <span className="text-xs text-gray-500">{metric.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium text-gray-900">Recent Milestones</h4>
          <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
        </div>
        <div className="space-y-4">
          {[
            {
              title: '100K Trees Milestone',
              description: 'Reached 100,000 trees planted across global initiatives',
              date: '2 days ago',
              icon: <TreePine className="w-4 h-4" />,
              color: 'text-emerald-600',
            },
            {
              title: 'Carbon Neutral Status',
              description: 'Platform operations achieved carbon neutral status',
              date: '5 days ago',
              icon: <Leaf className="w-4 h-4" />,
              color: 'text-green-600',
            },
            {
              title: 'Community Growth',
              description: 'Surpassed 40 active community regions',
              date: '1 week ago',
              icon: <Users className="w-4 h-4" />,
              color: 'text-purple-600',
            },
          ].map((milestone, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className={`${milestone.color} p-2 bg-white rounded-lg`}>
                {milestone.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h5 className="font-medium text-gray-900">{milestone.title}</h5>
                  <span className="text-sm text-gray-500">{milestone.date}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;