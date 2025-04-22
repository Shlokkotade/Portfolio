import { User, FileText, Calendar, MapPin } from 'lucide-react';
import { Link } from './ui/Link';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 transform -rotate-6 rounded-2xl bg-blue-600/20 dark:bg-blue-500/10"></div>
            <img 
              src="/profile1.png" 
              width="600" height="800"
              alt="About Me" 
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Full-Stack Developer & Designer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            🚀 Passionate AI/ML Enthusiast | Aspiring Software Engineer | Competitive Coder

I am a B.Tech CSE (AI & ML) student at Sanjivani University, driven by a passion for software development, artificial intelligence, and problem-solving.
              I'm a passionate for Full-Stack Development with creating 
              user-friendly and performant web applications. I specialize in React, Node.js, 
              and modern frontend frameworks while maintaining a keen eye for design and user experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Shlok Kotade</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Born: December 21, 2005</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Location: Kopargaon, Maharastra, India</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <Link 
                  href="/Resume.pdf" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  download
                >
                  Download CV
                </Link>
              </div>
            </div>

            <Link 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;