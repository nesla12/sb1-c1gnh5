import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WalletDashboard from './components/wallet/WalletDashboard';
import ProjectsList from './components/projects/ProjectsList';
import RevenueDistribution from './components/analytics/RevenueDistribution';
import FeeAnalytics from './components/analytics/FeeAnalytics';
import ImpactMetrics from './components/analytics/ImpactMetrics';
import CommunityEngagement from './components/analytics/CommunityEngagement';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <WalletDashboard />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 gap-8">
            <ImpactMetrics />
            <CommunityEngagement />
            <RevenueDistribution />
            <FeeAnalytics />
          </div>
        </div>
        <ProjectsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;