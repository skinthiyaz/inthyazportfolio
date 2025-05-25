
import React from 'react';
import { Download, FileText, Calendar, MapPin, Mail, Phone, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ResumeSection = () => {
  const handleDownloadPDF = () => {
    // Create a simple resume content for PDF download
    const resumeContent = `
SHAIK INTHIYAZ
Frontend Developer

Email: shaikinthiyaz7729@gmail.com
Phone: 7729844661
GitHub: https://github.com/skinthiyaz

EDUCATION:
• Master of Computer Applications - JNTUK University (2024)
• Bachelor of Computer Applications - ANU University (2021) 
• 12th in MPC - AKVK Junior College (2018)

TECHNICAL SKILLS:
• Frontend: HTML, CSS, JavaScript, React.js, TypeScript
• Backend: Python
• Tools: Git, Responsive Design
• Other: Machine Learning, Database Management

PROJECTS:
• Employee Management System - React application with CRUD operations
• Brain Hemorrhage Detection - ML/DL project using TensorFlow and OpenCV
• Personal Portfolio - Responsive website with modern technologies

SOFT SKILLS:
• Problem Solving
• Communication
• Creativity
• Collaboration
• Attention to Detail
• Time Management
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shaik_Inthiyaz_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section id="resume" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my professional resume or view key highlights below
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <Button 
            onClick={handleDownloadPDF}
            size="lg" 
            className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg"
          >
            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Download Resume (PDF)
          </Button>
        </div>

        {/* Resume Preview */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Shaik Inthiyaz</h3>
                <p className="text-xl text-primary font-semibold">Frontend Developer</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    shaikinthiyaz7729@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    7729844661
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Summary */}
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Professional Summary
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate frontend developer and recent MCA graduate with strong skills in React.js, JavaScript, and Python. 
                  Experienced in creating responsive web applications and solving complex problems through innovative solutions. 
                  Committed to continuous learning and delivering high-quality user experiences.
                </p>
              </div>

              <Separator />

              {/* Education */}
              <div>
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h5 className="font-semibold">Master of Computer Applications</h5>
                    <p className="text-muted-foreground">JNTUK University</p>
                    <Badge variant="outline" className="mt-1">2024</Badge>
                  </div>
                  <div className="border-l-2 border-accent/30 pl-4">
                    <h5 className="font-semibold">Bachelor of Computer Applications</h5>
                    <p className="text-muted-foreground">ANU University</p>
                    <Badge variant="outline" className="mt-1">2021</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Technical Skills */}
              <div>
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">Frontend Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {['HTML & CSS', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-accent">Backend & Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Git', 'Database Management', 'Machine Learning'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Key Projects */}
              <div>
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Key Projects
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h5 className="font-semibold">Employee Management System</h5>
                    <p className="text-muted-foreground mb-2">
                      Full-featured React application for managing employee data with CRUD operations and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['React', 'JavaScript', 'CSS', 'Bootstrap'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="border-l-2 border-accent/30 pl-4">
                    <h5 className="font-semibold">Brain Hemorrhage Detection</h5>
                    <p className="text-muted-foreground mb-2">
                      ML/DL project for medical image analysis using convolutional neural networks and advanced image processing.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'TensorFlow', 'OpenCV', 'Scikit-Learn'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
