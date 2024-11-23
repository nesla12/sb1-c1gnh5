import React from 'react';
import { MessageSquare, Users, Rocket, Award } from 'lucide-react';
import DiscussionFeed from './DiscussionFeed';
import CommunityGroups from './CommunityGroups';
import TrendingTopics from './TrendingTopics';
import ImpactLeaderboard from './ImpactLeaderboard';

const SocialDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Discussions and Posts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Community Feed</h2>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                Create Post
              </button>
            </div>
            <DiscussionFeed />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Groups */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Your Communities</h3>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                View All
              </button>
            </div>
            <CommunityGroups />
          </div>

          {/* Trending Topics */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Trending Topics</h3>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                Explore
              </button>
            </div>
            <TrendingTopics />
          </div>

          {/* Impact Leaderboard */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Impact Leaders</h3>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                View All
              </button>
            </div>
            <ImpactLeaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDashboard;