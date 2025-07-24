
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon, className }) => {
  return (
    <Card className={`group border-primary/20 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 ${className || ''}`}>
      <CardContent className="p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
            </div>
            <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Decorative element */}
        <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
