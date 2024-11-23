import React from 'react';
import { Users, TreePine, Timer, ThumbsUp } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    impact: {
      trees: number;
      community: number;
      supporters: number;
    };
    votes: number;
    timeLeft: string;
    imageUrl: string;
    progress: number;
  };
  onVote: (id: string) => void;
}

const ProjectCard = ({ project, onVote }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-600 mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-600">
                <TreePine className="w-4 h-4 mr-1" />
                <span>{project.impact.trees}</span>
              </div>
              <div className="flex items-center text-blue-600">
                <Users className="w-4 h-4 mr-1" />
                <span>{project.impact.community}</span>
              </div>
            </div>
            <div className="flex items-center text-orange-600">
              <Timer className="w-4 h-4 mr-1" />
              <span>{project.timeLeft}</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full" 
              style={{ width: `${project.progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span>{project.votes} VOTE tokens</span>
            </div>
            <button
              onClick={() => onVote(project.id)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;