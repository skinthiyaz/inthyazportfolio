
import React, { useEffect } from 'react';
import { ArrowRight, Code, Layout, Github, Linkedin, Mail, Phone, Layers, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import SkillBar from '@/components/SkillBar';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const projects = [
    {
      title: 'Employee Management System',
      description: 'A full-featured React application for managing employee data, with CRUD operations, search functionality, and responsive design.',
      technologies: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Brain Hemorrhage Detection',
      description: 'ML/DL project for detecting brain hemorrhage from medical images using convolutional neural networks and advanced image processing techniques.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-Learn'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website showcasing my projects and skills, built using modern frontend technologies.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  const renderEducationTimeline = () => {
    const education = [
      {
        degree: 'Master of Computer Applications',
        institution: 'JNTUK University',
        year: '2024',
      },
      {
        degree: 'Bachelor of Computer Applications',
        institution: 'ANU University',
        year: '2021',
      },
      {
        degree: '12th in MPC',
        institution: 'AKVK Junior College',
        year: '2018',
      },
    ];

    return (
      <div className="space-y-2">
        {education.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <h4 className="font-semibold">{item.degree}</h4>
            <p className="text-sm text-muted-foreground">{item.institution}, {item.year}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderTechnicalSkills = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <SkillBar name="HTML & CSS" level={90} />
          <SkillBar name="JavaScript" level={85} />
          <SkillBar name="React.js" level={80} />
          <SkillBar name="TypeScript" level={70} />
        </div>
        <div>
          <SkillBar name="Python" level={75} />
          <SkillBar name="Database Management" level={70} />
          <SkillBar name="Responsive Design" level={85} />
          <SkillBar name="Machine Learning" level={60} />
        </div>
      </div>
    );
  };

  const renderSoftSkills = () => {
    const softSkills = [
      'Problem Solving', 
      'Communication', 
      'Creativity', 
      'Collaboration',
      'Attention to Detail',
      'Time Management'
    ];

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {softSkills.map((skill, index) => (
          <div key={index} className="bg-accent/30 rounded-md p-3 text-center">
            <p className="text-sm">{skill}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full inline-block">
                Frontend Developer
              </span>
              
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Hey, I'm <span className="text-primary">Shaik Inthiyaz</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                A passionate frontend developer with strong skills in React.js, JavaScript, and Python. Recent MCA graduate looking to create impactful web experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative lg:h-[450px] hidden lg:block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/50 overflow-hidden flex items-center justify-center">
                <div className="rounded-full h-64 w-64 bg-background shadow-lg flex items-center justify-center">
                  {/* Profile image placeholder */}
                  <div className="text-6xl font-bold text-primary">SI</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-accent/10">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <p className="text-lg mb-6">
                  I am a passionate frontend developer and recent MCA graduate from JNTUK University. With a strong foundation in frontend technologies, 
                  I specialize in creating responsive, user-friendly web interfaces that combine aesthetic appeal with functional efficiency.
                </p>
                
                <p className="text-lg mb-6">
                  My journey in technology has equipped me with skills in HTML, CSS, JavaScript, React.js, and Python. I enjoy turning complex problems into 
                  simple, intuitive designs. I'm particularly interested in user experience and creating web applications that are accessible to all users.
                </p>
                
                <p className="text-lg">
                  Beyond technical skills, I bring strong communication abilities, creativity in problem-solving, and a commitment to continuous learning. 
                  I'm excited to apply my education and skills to create meaningful digital experiences and contribute to innovative projects.
                </p>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    {renderEducationTimeline()}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="section-container">
          <h2 className="section-title">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                className={`delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-accent/10">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                {renderTechnicalSkills()}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
                {renderSoftSkills()}
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="section-container">
          <h2 className="section-title">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-accent/10">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  Feel free to reach out if you're looking for a frontend developer, have a question, or just want to connect.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>shaikinthiyaz7729@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <span>7729844661</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href="#" 
                    className="bg-accent hover:bg-accent/80 text-accent-foreground p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-accent hover:bg-accent/80 text-accent-foreground p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-primary/5 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Shaik Inthiyaz. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
