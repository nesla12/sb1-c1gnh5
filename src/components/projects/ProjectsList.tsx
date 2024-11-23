import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: '1',
    title: 'Rainforest Restoration Initiative',
    description: 'Restoring 1000 hectares of degraded rainforest through community-led reforestation efforts.',
    category: 'Environmental',
    impact: {
      trees: 50000,
      community: 1200,
      supporters: 450,
    },
    votes: 2500,
    timeLeft: '3 days',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798883c5',
    progress: 75,
  },
  {
    id: '2',
    title: 'Sustainable Agriculture Hub',
    description: 'Creating a community hub for sustainable farming practices and organic food production.',
    category: 'Agriculture',
    impact: {
      trees: 2000,
      community: 500,
      supporters: 280,
    },
    votes: 1800,
    timeLeft: '5 days',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449',
    progress: 60,
  },
  {
    id: '3',
    title: 'Ocean Cleanup Network',
    description: 'Building a network of autonomous drones for ocean plastic cleanup and marine conservation.',
    category: 'Ocean',
    impact: {
      trees: 0,
      community: 800,
      supporters: 650,
    },
    votes: 3200,
    timeLeft: '2 days',
    imageUrl: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d',
    progress: 85,
  },
];

const ProjectsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Environmental', 'Agriculture', 'Ocean', 'Energy', 'Social'];

  const handleVote = (projectId: string) => {
    console.log(`Voted for project: ${projectId}`);
    // Implement voting logic here
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Projects</h2>
        <p className="text-gray-600">Support and vote for projects making a positive impact on our world.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <Filter className="text-gray-400 w-5 h-5" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;