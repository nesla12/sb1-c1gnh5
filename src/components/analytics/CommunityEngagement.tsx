import React from 'react';
import { Users, MessageSquare, Award, Target } from 'lucide-react';

const CommunityEngagement = () => {
  const engagementStats = {
    activeUsers: {
      total: 12500,
      change: '+15%',
      timeline: [45, 60, 55, 70, 65, 80, 75],
    },
    discussions: {
      total: 850,
      change: '+8%',
      timeline: [20, 25, 30, 28, 35, 40, 38],
    },
    completedProjects: {
      total: 125,
      change: '+12%',
      timeline: [8, 12, 10, 15, 14, 18, 16],
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Community Engagement</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-900">Active Users</span>
            </div>
            <span className="text-green-600 text-sm font-medium">
              {engagementStats.activeUsers.change}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-4">
            {engagementStats.activeUsers.total.toLocaleString()}
          </div>
          <div className="flex items-end space-x-1 h-12">
            {engagementStats.activeUsers.timeline.map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-purple-200 rounded-t"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-900">Active Discussions</span>
            </div>
            <span className="text-green-600 text-sm font-medium">
              {engagementStats.discussions.change}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-4">
            {engagementStats.discussions.total.toLocaleString()}
          </div>
          <div className="flex items-end space-x-1 h-12">
            {engagementStats.discussions.timeline.map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-blue-200 rounded-t"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-900">Completed Projects</span>
            </div>
            <span className="text-green-600 text-sm font-medium">
              {engagementStats.completedProjects.change}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-4">
            {engagementStats.completedProjects.total.toLocaleString()}
          </div>
          <div className="flex items-end space-x-1 h-12">
            {engagementStats.completedProjects.timeline.map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-green-200 rounded-t"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-gray-900">Top Contributors</h4>
          <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { name: 'Alex Thompson', contributions: 156, impact: 'Environmental' },
            { name: 'Sarah Chen', contributions: 142, impact: 'Social' },
            { name: 'Miguel Rodriguez', contributions: 128, impact: 'Technology' },
          ].map((contributor, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium">
                  {contributor.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{contributor.name}</div>
                  <div className="text-sm text-gray-600">{contributor.impact} Focus</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">{contributor.contributions}</div>
                <div className="text-sm text-gray-600">contributions</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;