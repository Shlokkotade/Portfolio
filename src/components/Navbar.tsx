import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Code, Cpu, LifeBuoy, Mail, ChevronDown, Github, ExternalLink } from 'lucide-react';
import { Link } from './ui/Link';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const projectsDropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation links with icons
  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="h-4 w-4" /> },
    { name: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" /> },
    { 
      name: 'Projects', 
      href: '#projects', 
      icon: <Code className="h-4 w-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', href: '#projects-web', icon: <ExternalLink className="h-3 w-3" /> },
        { name: 'Mobile Apps', href: '#projects-mobile', icon: <ExternalLink className="h-3 w-3" /> },
        { name: 'Open Source', href: '#projects-opensource', icon: <Github className="h-3 w-3" /> }
      ]
    },
    { name: 'Skills', href: '#skills', icon: <Cpu className="h-4 w-4" /> },
    { name: 'Services', href: '#services', icon: <LifeBuoy className="h-4 w-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="./logo.jpg" 
              alt="SK7 Logo" 
              className="h-10 w-auto mr-2 rounded-full shadow-md"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEVEN</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div ref={projectsDropdownRef}>
                    <button
                      onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                        activeSection === link.href.substring(1)
                          ? 'text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <span className="flex items-center">
                        {link.icon}
                        <span className="ml-1">{link.name}</span>
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${projectsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {projectsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90 z-50"
                        >
                          <div className="py-1">
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                onClick={() => setProjectsDropdownOpen(false)}
                              >
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    href={link.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {link.icon}
                    <span className="ml-1">{link.name}</span>
                  </Link>
                )}
                {/* Animated underline for non-dropdown items */}
                {!link.hasDropdown && (
                  <span 
                    className={`block h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ${
                      activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                )}
              </div>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-t dark:border-gray-800 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                        className={`flex items-center justify-between w-full py-3 px-4 rounded-md ${
                          activeSection === link.href.substring(1)
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                        } transition-colors duration-200`}
                      >
                        <span className="flex items-center">
                          {link.icon}
                          <span className="ml-2">{link.name}</span>
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${projectsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {projectsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 mt-1 space-y-1"
                          >
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center py-2 px-4 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors duration-200"
                                onClick={() => {
                                  setProjectsDropdownOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`flex items-center py-3 px-4 rounded-md ${
                        activeSection === link.href.substring(1)
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
                      } transition-colors duration-200`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;