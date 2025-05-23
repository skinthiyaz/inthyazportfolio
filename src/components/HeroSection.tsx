
import React from 'react';
import { ArrowRight, Github, Linkedin, Download, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23334155\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-bounce delay-200">
        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
      </div>
      <div className="absolute top-1/3 right-1/3 animate-bounce delay-500">
        <Code2 className="w-6 h-6 text-blue-600/70" />
      </div>
      <div className="absolute bottom-1/3 left-1/6 animate-bounce delay-700">
        <Zap className="w-4 h-4 text-cyan-500" />
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 border border-blue-500/20 rounded-full backdrop-blur-md shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Hey, I&apos;m{' '}
              <span className="relative inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                Shaik Inthiyaz
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent animate-[slide_2s_ease-in-out_infinite] rounded-lg"></span>
              </span>
            </h1>
            
            {/* Subtitle with Typewriter Effect */}
            <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              <span className="relative">
                Crafting digital experiences with
                <span className="ml-2 font-semibold text-blue-600">React.js</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            A passionate frontend developer with strong skills in{' '}
            <span className="font-semibold text-blue-700 dark:text-blue-400">React.js</span>,{' '}
            <span className="font-semibold text-blue-700 dark:text-blue-400">JavaScript</span>, and{' '}
            <span className="font-semibold text-blue-700 dark:text-blue-400">Python</span>. Recent MCA graduate ready to create impactful web experiences.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-slate-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2024</div>
              <div className="text-sm text-slate-500">MCA Graduate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-slate-500">Technologies</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <a href="#contact" className="flex items-center gap-2">
                Let&apos;s Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group border-2 border-blue-200 hover:border-blue-400 backdrop-blur-sm bg-white/50 hover:bg-blue-50 dark:bg-slate-800/50 dark:hover:bg-slate-700">
              <a href="#projects" className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                View Work
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            <span className="text-sm text-slate-500">Follow me:</span>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="group p-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-110 dark:from-slate-700 dark:to-slate-600 dark:border-slate-600"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors dark:text-slate-300" />
              </a>
              <a 
                href="#" 
                className="group p-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-110 dark:from-slate-700 dark:to-slate-600 dark:border-slate-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors dark:text-slate-300" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Side - Enhanced Visual */}
        <div className="relative lg:h-[600px] hidden lg:block animate-fade-in delay-300">
          {/* Main Circle */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-blue-500/25 overflow-hidden backdrop-blur-md border border-blue-300/30 shadow-2xl">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%233B82F6\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
            </div>
            
            {/* Profile Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/25 to-blue-600/35 flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-lg">
                  {/* Profile Image Placeholder */}
                  <div className="text-8xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    SI
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute top-8 right-8 animate-bounce delay-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm border border-blue-300/30 flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-blue-600">JS</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 animate-bounce delay-700">
              <div className="w-10 h-10 bg-white/20 rounded-lg backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold text-cyan-600">PY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
