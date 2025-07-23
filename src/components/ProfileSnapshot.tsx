import React from 'react';
import { User, Code, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfileSnapshot = () => {
  const strengths = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
    { icon: User, title: 'UI/UX Focus', description: 'User-centered design approach' },
    { icon: Zap, title: 'Performance', description: 'Optimized applications' },
    { icon: Users, title: 'Agile Teamwork', description: 'Collaborative development' }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">
            Professional Snapshot
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Frontend developer with 3+ years of experience specializing in clean code practices, UI/UX focus, 
                and performance optimization. Expertise in API integration, real-time features, and agile teamwork. 
                Passionate about building scalable, maintainable solutions that deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="group border-accent/20 bg-gradient-to-br from-background to-accent/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-accent/10 rounded-lg mx-auto w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <strength.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{strength.title}</h3>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSnapshot;