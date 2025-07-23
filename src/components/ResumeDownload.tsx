import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a simple text resume for download
    const resumeContent = `
SHAIK INTHIYAZ
Frontend Developer | React Developer | Software Enthusiast
Email: shaikinthiyaz7729@gmail.com | Phone: 7729844661
GitHub: https://github.com/skinthiyaz

PROFESSIONAL SUMMARY
Frontend developer with 3+ years of experience specializing in clean code practices, UI/UX focus, and performance optimization. Expertise in API integration, real-time features, and agile teamwork.

WORK EXPERIENCE
Frontend Developer | Trangla Innovations Pvt Ltd | Dec 2021 - Present
• Developed front-end for fleet management system
• Built modular UI components with React
• Integrated real-time features and cloud deployment
• Implemented performance optimizations and responsive design

EDUCATION
Master of Computer Applications | JNTUK University | 2024
Bachelor of Computer Applications | ANU University | 2021
12th in MPC | AKVK Junior College | 2018

TECHNICAL SKILLS
Frontend: React, Next.js, Tailwind CSS, Redux, Material UI
Backend: Node.js, Express.js
APIs & Tools: REST, WebSockets, Git, AWS, Netlify, CI/CD
Practices: Agile, TDD, Performance Optimization

KEY PROJECTS
1. Job Board Platform - React, API integration, real-time updates via WebSocket
2. Truck Management System - React-based fleet UI with real-time tracking

CERTIFICATIONS
• Certified in Frontend Technologies (2023)
• Certified in Python (2022)
• Certified in Developing Soft Skills & Personality (2021)
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shaik_Inthiyaz_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or view the highlights below
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl">
            <CardHeader className="text-center">
              <div className="p-4 bg-primary/10 rounded-full mx-auto w-fit mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Professional Resume</CardTitle>
              <p className="text-muted-foreground">
                Complete overview of my experience, skills, and achievements
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Eye className="w-5 h-5 text-accent" />
                    Quick Overview
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 3+ Years Frontend Development</li>
                    <li>• React & Modern JavaScript Expert</li>
                    <li>• Real-time Applications & API Integration</li>
                    <li>• Performance Optimization Specialist</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Key Highlights</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fleet Management System Development</li>
                    <li>• Job Board Platform with WebSocket</li>
                    <li>• Clean Code & Agile Practices</li>
                    <li>• Multiple Professional Certifications</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-border">
                <Button onClick={handleDownload} size="lg" className="group">
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume (TXT)
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  PDF version available upon request
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;