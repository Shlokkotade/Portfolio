import { BriefcaseIcon } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company Inc.",
    period: "2021 - Present",
    description: "Lead frontend development for enterprise web applications with React and TypeScript.",
    highlights: [
      "Architected and implemented a component library used across 5+ products",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Developed responsive web applications and implemented UI/UX designs for various clients.",
    highlights: [
      "Created interactive data visualizations using D3.js",
      "Built custom CMS solutions with headless architecture",
      "Collaborated with designers to implement pixel-perfect interfaces"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Startup Hub",
    period: "2018 - 2019",
    description: "Assisted in developing and maintaining web applications for early-stage startups.",
    highlights: [
      "Contributed to frontend development using React",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in agile development processes and sprint planning"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            My professional journey and key roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 relative ${index === experiences.length - 1 ? '' : 'pb-8'}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] bg-white dark:bg-gray-800 p-1 rounded-full border-2 border-blue-600 dark:border-blue-500">
                  <BriefcaseIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                
                {/* Experience Card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;