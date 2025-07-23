import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WorkExperience = () => {
  const workExperience = [
    {
      company: 'Trangla Innovations Pvt Ltd',
      position: 'Frontend Developer',
      duration: 'Dec 2021 - Present',
      description: 'Developing modern web applications and fleet management systems using React and modern technologies.',
      achievements: [
        'Developed front-end for fleet management system',
        'Built modular UI components with React',
        'Integrated real-time features and cloud deployment',
        'Implemented performance optimizations and responsive design'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key contributions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((experience, index) => (
            <Card key={index} className="border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      {experience.position}
                    </CardTitle>
                    <p className="text-xl font-semibold text-accent mt-2">{experience.company}</p>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2 w-fit">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Key Achievements
                  </h4>
                  <div className="grid gap-3">
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;