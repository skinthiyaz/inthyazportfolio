
import React from 'react';
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

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  demoLink,
  githubLink,
  className
}: ProjectCardProps) => {
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
        
        <div className="flex items-center gap-3 mt-4">
          {demoLink && (
            <Button asChild variant="default" size="sm">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                Live Demo <ArrowRight size={16} className="ml-1" />
              </a>
            </Button>
          )}
          
          {githubLink && (
            <Button asChild variant="outline" size="sm">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
