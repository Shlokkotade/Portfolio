import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from './ui/Link';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for online store management with analytics, inventory, and order processing features.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    repoUrl: "#",
    category: "web"
  },
  {
    title: "Recipe Finder App",
    description: "Mobile application for discovering recipes based on available ingredients with filtering options and favorites.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React Native", "Firebase", "API Integration"],
    demoUrl: "#",
    repoUrl: "#",
    category: "mobile"
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website with modern design and interactive elements.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    demoUrl: "#",
    repoUrl: "#",
    category: "web"
  },
  {
    title: "Task Management System",
    description: "Full-stack application for team task management with real-time updates and user permissions.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    demoUrl: "#",
    repoUrl: "#",
    category: "fullstack"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts and historical data visualization.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
    demoUrl: "#",
    repoUrl: "#",
    category: "web"
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, progress, and nutrition with personalized recommendations.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React Native", "Redux", "Health API"],
    demoUrl: "#",
    repoUrl: "#",
    category: "mobile"
  }
];

const categories = ["all", "web", "mobile", "fullstack"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 2 - 1;
    const y = (event.clientY - rect.top) / rect.height * 2 - 1;
    setMousePosition({ x, y });
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Check out some of my recent work
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full transition-colors capitalize ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-500"
              style={{ 
                transform: hoveredIndex === index ? "scale(1.05) rotateX(" + mousePosition.y * 15 + "deg) rotateY(" + mousePosition.x * 15 + "deg)" : "none"
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => {
                setHoveredIndex(null);
                setMousePosition({ x: 0, y: 0 });
              }}
            >
              <div 
                className="h-48 overflow-hidden transition-transform duration-500"
                style={{ 
                  transform: hoveredIndex === index ? "translateZ(50px)" : "none"
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div 
                className="p-6 transition-transform duration-500"
                style={{ 
                  transform: hoveredIndex === index ? "translateZ(30px)" : "none"
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Link 
                    href={project.demoUrl} 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                  <Link 
                    href={project.repoUrl} 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;