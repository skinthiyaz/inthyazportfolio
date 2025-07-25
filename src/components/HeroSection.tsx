
import React from 'react';
import { ArrowRight, Github, Linkedin, Download, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-bounce delay-200">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-1/3 animate-bounce delay-500">
        <Code2 className="w-6 h-6 text-primary/60" />
      </div>
      <div className="absolute bottom-1/3 left-1/6 animate-bounce delay-700">
        <Zap className="w-4 h-4 text-accent" />
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, I'm Shaik Inthiyaz 👋
            </h1>
            
            {/* Subtitle */}
            <div className="text-xl md:text-2xl text-muted-foreground">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
                React Developer | Front-End Engineer | Software Enthusiast
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Passionate about building clean, scalable UIs with real-time features and API-driven architecture.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg">
              <a href="#contact" className="flex items-center gap-2">
                Let&apos;s Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group border-2 hover:border-primary/50 backdrop-blur-sm">
              <a href="#projects" className="flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                View Work
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            <span className="text-sm text-muted-foreground">Follow me:</span>
            <div className="flex gap-3">
              <a 
                href="https://github.com/skinthiyaz" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shaikinthiyaz/" 
                target="_blank"
                className="group p-3 rounded-full bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile Picture & Animated Background - Responsive */}
        <div className="relative flex justify-center items-center min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:h-[600px] order-1 lg:order-2 animate-fade-in delay-300 mb-12 lg:mb-0">
          {/* Main Circle */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-blue-500/10 to-accent/30 overflow-hidden backdrop-blur-sm border border-primary/20 w-full h-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none mx-auto">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>
            </div>
            
            {/* Profile Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-lg mx-auto">
                  {/* Profile Image */}
                  <img 
                    src="https://i.postimg.cc/4yyMY0fZ/Whats-App-Image-2025-05-24-at-13-00-14-c4486726.jpg"
                    alt="Shaik Inthiyaz"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 bg-accent rounded-full shadow-lg"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute top-2 right-2 sm:top-8 sm:right-8 animate-bounce delay-300">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-bold text-primary">JS</span>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 sm:bottom-8 sm:left-8 animate-bounce delay-700">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-[10px] sm:text-xs font-bold text-accent">PY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
