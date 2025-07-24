import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResumeDownload = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="w-[50rem] max-w-full mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl">
            <CardHeader className="text-center">
              <div className="p-4 bg-primary/10 rounded-full mx-auto w-fit mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Professional Resume</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-left">
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
                <Button asChild size="lg" className="group">
                  <a href="/certs/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    View Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;