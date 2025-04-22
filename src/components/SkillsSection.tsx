import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML & CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "SQL", level: 78, category: "backend" },
  { name: "Firebase", level: 85, category: "backend" },
  
  // Tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
  { name: "Figma", level: 88, category: "tools" },
  { name: "Jest", level: 75, category: "tools" }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all skill bars within the section and animate them
            const skillBars = entry.target.querySelectorAll('.skill-progress-inner');
            skillBars.forEach((bar: Element) => {
              if (bar instanceof HTMLElement) {
                const width = bar.dataset.width || "0";
                bar.style.width = width;
                bar.style.opacity = "1";
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const toolsSkills = skills.filter(skill => skill.category === "tools");

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="space-y-2" ref={el => skillRefs.current[index] = el}>
                  <div className="flex justify-between items-center">
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="skill-progress-inner h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-0 transition-all duration-1000 ease-out"
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="space-y-2" ref={el => skillRefs.current[frontendSkills.length + index] = el}>
                  <div className="flex justify-between items-center">
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="skill-progress-inner h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full opacity-0 transition-all duration-1000 ease-out"
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Skills */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md lg:col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Tools & Technologies
            </h3>
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="space-y-2" ref={el => skillRefs.current[frontendSkills.length + backendSkills.length + index] = el}>
                  <div className="flex justify-between items-center">
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="skill-progress-inner h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-0 transition-all duration-1000 ease-out"
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;