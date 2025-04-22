import { ArrowDown } from 'lucide-react';
import { Link } from './ui/Link';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 pt-10 md:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
                Shlok Kotade
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack Developer & UX Designer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg text-lg">
            🚀 Passionate AI/ML Enthusiast | Aspiring Software Engineer | Competitive Coder

I am a B.Tech CSE (AI & ML) student at Sanjivani University, driven by a passion for software development, artificial intelligence, and problem-solving.
              I build exceptional digital experiences that are fast, accessible, and user-focused. 
              Let's bring your vision to life together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Contact Me
              </Link>
              <Link 
                href="/resume.pdf" 
                className="px-8 py-3 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium rounded-md hover:bg-blue-600/10 transition-colors"
                download
              >
                Download CV
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -z-10 w-72 h-72 rounded-full bg-blue-200/50 dark:bg-blue-500/20 -bottom-10 -right-10" />
              <div className="absolute -z-10 w-40 h-40 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20 -top-5 -left-5" />
              
              <img 
                src="./profile1.png" 
                alt="Profile" 
                 width="1000" height="800"
                className="w-[280px] sm:w-[350px] object-cover z-10 relative"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className={`h-8 w-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;