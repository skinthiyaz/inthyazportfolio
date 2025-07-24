
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const htmlElement = section as HTMLElement;
        const sectionTop = htmlElement.offsetTop;
        const sectionHeight = htmlElement.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-background/95 shadow-sm backdrop-blur-sm py-4' : 'py-6'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="text-xl font-bold font-heading text-primary">Inthiyaz</span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                activeSection === link.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              {link.label}
            </a>
          ))}
          {/* Dark mode toggle */}
          <div className="flex items-center ml-4">
            <span className="mr-2 text-xs text-muted-foreground">🌞</span>
            <Switch
              checked={resolvedTheme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              aria-label="Toggle dark mode"
              className="transition-colors"
            />
            <span className="ml-2 text-xs text-muted-foreground">🌙</span>
          </div>
        </nav>

        <div className="md:hidden">
          <MobileNav links={navLinks} activeSection={activeSection} onSectionClick={scrollToSection} />
        </div>
      </div>
    </header>
  );
};

const MobileNav = ({ 
  links, 
  activeSection, 
  onSectionClick 
}: { 
  links: { label: string; id: string }[]; 
  activeSection: string;
  onSectionClick: (id: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 left-0 bg-background/95 backdrop-blur-sm shadow-lg rounded-b-lg p-4">
          <div className="flex flex-col space-y-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionClick(link.id);
                  setIsOpen(false);
                }}
                className={cn(
                  'px-4 py-3 rounded-md text-base font-medium',
                  activeSection === link.id
                    ? 'text-primary bg-accent/50'
                    : 'text-foreground hover:bg-accent/30'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
