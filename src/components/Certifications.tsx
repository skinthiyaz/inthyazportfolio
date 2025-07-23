import React from 'react';
import { Award, Code, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified in Frontend Technologies',
      issuer: 'Professional Certification',
      year: '2023',
      icon: Code
    },
    {
      title: 'Certified in Python',
      issuer: 'Programming Certification',
      year: '2022',
      icon: Award
    },
    {
      title: 'Certified in Developing Soft Skills & Personality',
      issuer: 'Professional Development',
      year: '2021',
      icon: GraduationCap
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="group border-accent/20 bg-gradient-to-br from-background to-accent/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="p-4 bg-accent/10 rounded-full mx-auto w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <cert.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{cert.issuer}</p>
                <Badge variant="outline" className="mx-auto">{cert.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;