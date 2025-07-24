import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WorkExperience = () => {
  const workExperience = [
    {
      company: 'Trangla Innovations Pvt Ltd',
      companyDescription: 'Trangla Innovations is a technology-driven company specializing in logistics and fleet management solutions, delivering scalable SaaS products for enterprise clients.',
      position: 'Frontend Developer',
      duration: 'Dec 2021 - Present',
      location: 'Hyderabad, India',
      techStack: ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'WebSockets', 'REST APIs', 'CI/CD', 'AWS'],
      description: 'As a Frontend Developer, I played a key role in architecting and developing modern web applications for logistics and fleet management. My focus was on building scalable, maintainable, and high-performance user interfaces that deliver seamless user experiences for enterprise clients.',
      responsibilities: [
        'Collaborated with cross-functional teams (design, backend, QA) to deliver end-to-end features.',
        'Transformed UI/UX designs into responsive, accessible, and pixel-perfect web interfaces.',
        'Implemented state management and data flow using Redux and Context API.',
        'Integrated real-time data updates using WebSockets for live fleet tracking and notifications.',
        'Optimized application performance through code splitting, lazy loading, and best practices.',
        'Wrote reusable, modular components and maintained a scalable component library.',
        'Ensured code quality with unit tests, code reviews, and adherence to best practices.',
        'Participated in Agile ceremonies, sprint planning, and regular client demos.'
      ],
      achievements: [
        'Developed the front-end for a large-scale fleet management system used by logistics companies.',
        'Reduced page load times by 40% through performance optimization and code refactoring.',
        'Built a real-time dashboard for live vehicle tracking, improving dispatcher efficiency.',
        'Created a reusable component library, accelerating development for new features.',
        'Received Employee of the Month award for outstanding project delivery.'
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
                    <p className="text-sm text-muted-foreground mt-1">{experience.companyDescription}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.techStack.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">{experience.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2 w-fit">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Role Overview</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">{experience.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Key Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
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