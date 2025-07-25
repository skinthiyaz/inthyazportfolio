
import React, { useEffect } from 'react';
import { ArrowRight, Code, Layout, Github, Linkedin, Mail, Phone, Layers, Monitor, Download, Calendar, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfileSnapshot from '@/components/ProfileSnapshot';
import WorkExperience from '@/components/WorkExperience';
import Certifications from '@/components/Certifications';
import ResumeDownload from '@/components/ResumeDownload';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import SkillBar from '@/components/SkillBar';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const projects = [
    {
      title: 'Job Board Platform',
      description: 'A comprehensive job board platform with React, featuring API integration, real-time updates via WebSocket, and deployed with CI/CD pipeline for seamless user experience.',
      technologies: ['React', 'WebSocket', 'API Integration', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop', // Job board/office
      demoLink: '#',
      githubLink: 'https://github.com/skinthiyaz',
    },
    {
      title: 'Truck Management System',
      description: 'React-based fleet management UI with real-time tracking capabilities, reusable components, and optimized API handling for efficient fleet operations.',
      technologies: ['React', 'Real-time Tracking', 'API Optimization', 'Component Architecture'],
      image: 'https://res.cloudinary.com/impargo-gmbh/image/upload/v1660662282/lkw_cover_fleetmanagement_01_6c6f0d2994.png',
      demoLink: '#',
      githubLink: 'https://github.com/skinthiyaz',
    },
  ];

  const renderEducationTimeline = () => {
    const education = [

      {
        degree: 'Bachelor of Computer Applications',
        institution: 'ANU University',
        year: '2021',
        icon: Award,
      },
      {
        degree: '12th in MPC',
        institution: 'AKVK Junior College',
        year: '2018',
        icon: Calendar,
      },
    ];

    return (
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="group relative bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.degree}</h4>
                <p className="text-muted-foreground mt-1">{item.institution}</p>
                <Badge variant="outline" className="mt-2">{item.year}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTechnicalSkills = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Frontend
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind', 'Redux', 'Material UI'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" />
              Backend
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              APIs & Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {['REST', 'WebSockets', 'Git', 'AWS', 'Netlify', 'CI/CD'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Layout className="w-5 h-5 text-accent" />
              Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {['Agile', 'TDD', 'Performance Optimization'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderSoftSkills = () => {
    const softSkills = [
      { name: 'Problem Solving', icon: '🧩' }, 
      { name: 'Communication', icon: '💬' }, 
      { name: 'Creativity', icon: '🎨' }, 
      { name: 'Collaboration', icon: '🤝' },
      { name: 'Attention to Detail', icon: '🔍' },
      { name: 'Time Management', icon: '⏰' }
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {softSkills.map((skill, index) => (
          <div key={index} className="group bg-gradient-to-br from-background to-accent/10 border border-accent/20 rounded-lg p-4 text-center hover:shadow-lg hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      
      <main>
        {/* Enhanced Hero Section */}
        <HeroSection />
        
        {/* Profile Snapshot Section */}
        <ProfileSnapshot />
        
        {/* Work Experience Section */}
        <WorkExperience />
        
        {/* About Section - Enhanced */}
        <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a3a3a3%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      My Journey
                    </h3>
                    <div className="space-y-6 text-lg leading-relaxed">
                      <p className="text-muted-foreground">
                      Passionate and skilled Frontend Developer with over 3 years of professional experience in designing and delivering responsive, user-centric web applications. Holding a Bachelor’s degree in Computer Applications from Acharya Nagarjuna University, I bring a solid foundation in software development combined with real-world expertise in modern frontend technologies.
                      </p>
                      
                      <p className="text-muted-foreground">
                      Proficient in ReactJS, JavaScript (ES6+), TypeScript, HTML5, CSS3, and Tailwind CSS, I specialize in translating complex problems into clean, scalable, and intuitive interfaces. I have built and deployed full-scale web platforms with real-time capabilities, integrated APIs, and performance optimizations using tools like Redux, WebSockets, and CI/CD pipelines.
                      </p>
                      
                      <p className="text-muted-foreground">
                      Proficient in ReactJS, JavaScript (ES6+), TypeScript, HTML5, CSS3, and Tailwind CSS, I specialize in translating complex problems into clean, scalable, and intuitive interfaces. I have built and deployed full-scale web platforms with real-time capabilities, integrated APIs, and performance optimizations using tools like Redux, WebSockets, and CI/CD pipelines.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="border-accent/20 bg-gradient-to-br from-background to-accent/5 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-accent" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {renderEducationTimeline()}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section - Enhanced */}
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">My Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore my latest work and creative solutions
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    demoLink={project.demoLink}
                    githubLink={project.githubLink}
                    className={`delay-${(index + 1) * 100} border-primary/20 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Skills Section - Enhanced */}
        <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">Skills & Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technologies and abilities that drive my development process
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
                {renderTechnicalSkills()}
              </div>
              
              <Separator className="my-12" />
              
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
                {renderSoftSkills()}
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <Certifications />
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Services Section - Enhanced */}
        <section id="services" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional services tailored to bring your ideas to life
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                title="Responsive Web Development"
                description="Creating mobile-friendly websites that work seamlessly across all devices and screen sizes."
                Icon={Monitor}
              />
              
              <ServiceCard
                title="Frontend Implementation"
                description="Translating UI/UX designs into functional code with attention to detail and user experience."
                Icon={Layout}
              />
              
              <ServiceCard
                title="Web Application Development"
                description="Building dynamic web applications with React.js and modern JavaScript frameworks."
                Icon={Code}
              />
              
              <ServiceCard
                title="Code Optimization"
                description="Improving website performance through efficient coding practices and optimization techniques."
                Icon={Layers}
              />
            </div>
          </div>
        </section>
        
        {/* Contact Section - Enhanced */}
        <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent mb-6">Get In Touch</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to start your next project? Let's create something amazing together
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                  <p className="text-lg mb-8 text-muted-foreground">
                    Feel free to reach out if you're looking for a frontend developer, have a question, or just want to connect.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center group">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground break-all">{/* or truncate, or overflow-x-auto */}
                          shaikinthiyaz7729@gmail.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">7729844661</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto group border-primary/30 hover:border-primary">
                      <a href="https://github.com/skinthiyaz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto group border-accent/30 hover:border-accent">
                      <a href="https://www.linkedin.com/in/shaikinthiyaz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20 bg-gradient-to-br from-background to-accent/5 shadow-xl">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-primary/10 via-background to-accent/10 py-12 border-t border-primary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-muted-foreground">
                &copy; {new Date().getFullYear()} Shaik Inthiyaz. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
