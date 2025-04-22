import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  link: string;
  pdfUrl: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "January 2023",
    credentialId: "UC-123456789",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    pdfUrl: "/certificates/full-stack-web-dev.pdf",
    category: "web"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "March 2023",
    credentialId: "ML-987654321",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    pdfUrl: "/certificates/machine-learning.pdf",
    category: "ai"
  },
  {
    title: "Introduction to Python Programming",
    issuer: "IBM",
    date: "Dec 2024",
    credentialId: "IBM-123456789",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    pdfUrl: "/certificates/aws-developer.pdf",
    category: "Programming"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Interaction Design Foundation",
    date: "November 2023",
    credentialId: "IDF-456789123",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    pdfUrl: "/certificates/uiux-design.pdf",
    category: "design"
  },
  {
    title: "Advanced JavaScript Concepts",
    issuer: "Frontend Masters",
    date: "February 2024",
    credentialId: "FM-234567891",
    image: "https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    pdfUrl: "/certificates/advanced-javascript.pdf",
    category: "web"
  }
];

const categories = ["all", "web", "mobile", "cloud", "ai", "design"];

const CertificationsSection = () => {
  const [filter, setFilter] = useState("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  
  const filteredCertificates = filter === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedCert(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 2 - 1;
    const y = (event.clientY - rect.top) / rect.height * 2 - 1;
    setMousePosition({ x, y });
  };

  const handleDownloadCertificate = (pdfUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Professional certifications and achievements
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

        {/* Timeline View */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-500 ml-5 md:ml-8 pl-8 pb-6">
            {filteredCertificates.map((cert, index) => (
              <div 
                key={index} 
                className="mb-12 relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 md:-left-10 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                
                {/* Certificate Card */}
                <div 
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  style={{ 
                    transform: hoveredIndex === index ? 
                      `scale(1.03) rotateX(${mousePosition.y * 8}deg) rotateY(${mousePosition.x * 8}deg)` : 
                      'scale(1) rotateX(0) rotateY(0)',
                    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease',
                    boxShadow: hoveredIndex === index ? '0 15px 30px rgba(0,0,0,0.15)' : '0 5px 15px rgba(0,0,0,0.1)',
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center'
                  }}
                  onClick={() => setSelectedCert(cert)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setMousePosition({ x: 0, y: 0 });
                  }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        style={{
                          transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.5s ease-out'
                        }}
                      />
                    </div>
                    <div className="p-6 md:w-2/3" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {cert.title}
                        </h3>
                        <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full px-3 py-1 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        <span className="font-semibold">Issuer:</span> {cert.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-medium">View Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div 
              ref={modalRef}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              style={{
                transform: 'scale(1)',
                animation: 'modalFadeIn 0.3s ease-out'
              }}
            >
              <div className="relative">
                <div className="h-48 md:h-64 overflow-hidden">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button 
                  className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-1"
                  onClick={() => setSelectedCert(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedCert.title}
                </h2>
                <div className="flex flex-wrap gap-y-3 mb-6">
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Issuer:</span> {selectedCert.issuer}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Issue Date:</span> {selectedCert.date}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Credential ID:</span> {selectedCert.credentialId}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    About this certification
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    This certification validates skills and knowledge in {selectedCert.title.toLowerCase()} concepts and best practices. It demonstrates expertise in relevant technologies and methodologies in the {selectedCert.category} domain.
                  </p>
                  
                  <a 
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownloadCertificate(selectedCert.pdfUrl, selectedCert.title);
                    }}
                    href="#"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Download Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes modalFadeIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default CertificationsSection;