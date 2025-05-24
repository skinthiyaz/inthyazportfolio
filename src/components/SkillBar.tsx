
import React from 'react';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-3">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{name}</span>
        <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{level}%</span>
      </div>
      <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-blue-500 to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default SkillBar;
