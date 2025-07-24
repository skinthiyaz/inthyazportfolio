
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
  className?: string;
}

const projectKeyPoints: Record<string, string[]> = {
  'Job Board Platform': [
    'UI/UX Design: Developed interactive and responsive interfaces with React, allowing users to easily browse jobs and apply',
    'API Integration: Integrated third-party APIs for enhanced functionality, including real-time job updates and authentication.',
    'Performance Optimization: Used techniques like code splitting and lazy loading to ensure fast and smooth application performance.',
    'Real-Time Features: Implemented WebSocket services for live updates on job postings and application statuses.',
    'Cloud Deployment & CI/CD: Deployed the app on cloud platforms (e.g., AWS) and set up CI/CD pipelines for efficient deployment.'
  ],
  'Truck Management System': [
    'Front-End Development: Engineered and implemented the front-end interface for the Fleet Management System using ReactJS, ensuring a responsive and user-friendly UI.',
    'Reusable UI Components: Designed and developed modular, reusable UI components using HTML, CSS, JavaScript, and ReactJS, in collaboration with cross-functional teams to streamline development.',
    'Real-Time Functionality: Integrated real-time tracking features to improve operational transparency and coordination for fleet logistics.',
    'API Integration: Collaborated with backend teams to ensure seamless API integration and efficient data flow between systems.',
    'User Experience (UX): Contributed to user experience enhancements by creating intuitive workflows tailored for dispatchers and logistics personnel.'
  ]
};

const projectSummaries: Record<string, string> = {
  'Job Board Platform':
    'As a React Developer, I contributed to the development of a dynamic job board platform, focusing on building responsive, user-friendly interfaces for job seekers and employers, while ensuring seamless functionality.',
  'Truck Management System':
    'A Truck Management System is a fleet operations platform built for SwiftLogistics to streamline and optimize trucking workflows. The system facilitates efficient management of trucks and drivers, load assignments, and route optimization while ensuring real-time tracking and communication between dispatchers and drivers.'
};

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  demoLink,
  className
}: ProjectCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const keyPoints = projectKeyPoints[title] || [];
  const summary = projectSummaries[title];
  return (
    <div className={cn(
      'rounded-lg overflow-hidden border border-border bg-card transition-all duration-300 opacity-0 animate-fade-in',
      className
    )}>
      <div className="aspect-video bg-muted overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent/30">
            <span className="text-xl text-muted-foreground font-heading">{title}</span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs py-1 px-2 bg-accent text-accent-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {showDetails && (
          <div className="mb-4">
            {summary && <p className="mb-2 text-foreground text-sm">{summary}</p>}
            {keyPoints.length > 0 && (
              <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                {keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        <div className="flex justify-center mt-4">
          {demoLink && (
            <Button asChild variant="default" size="sm" onClick={e => { e.preventDefault(); setShowDetails(v => !v); }}>
              <a href="#">
                {showDetails ? 'Hide Project Details' : 'View Project Details'} <ArrowRight size={16} className="ml-1" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
