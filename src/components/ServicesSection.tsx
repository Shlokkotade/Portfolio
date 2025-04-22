import { Code, LayoutGrid, Database, PencilRuler, Smartphone, LineChart, X } from 'lucide-react';
import { useState } from 'react';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  price: string; 
}

interface EnrollmentForm {
  name: string;
  email: string;
  phone: string;
  requirements: string;
  service: string;
}

const initialFormState: EnrollmentForm = {
  name: '',
  email: '',
  phone: '',
  requirements: '',
  service: ''
};

const services: Service[] = [
  {
    title: "Web Development",
    description: "Creating custom websites and web applications with modern technologies and best practices for optimal performance.",
    icon: <Code className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    price: "Starting from $2000"
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces with focus on user experience, accessibility, and modern aesthetics.",
    icon: <PencilRuler className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    price: "Starting from $1500"
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    icon: <LayoutGrid className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    price: "Starting from $1800"
  },
  {
    title: "Backend Development",
    description: "Developing scalable and secure server-side applications with Node.js, Express, and various database technologies.",
    icon: <Database className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    price: "Starting from $2500"
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications using React Native for iOS and Android platforms.",
    icon: <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    price: "Starting from $3000"
  },
  {
    title: "Performance Optimization",
    description: "Improving website speed and performance through code optimization, lazy loading, and modern web techniques.",
    icon: <LineChart className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    price: "Starting from $1000"
  }
];

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<EnrollmentForm>(initialFormState);
  const [errors, setErrors] = useState<Partial<EnrollmentForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<EnrollmentForm> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.requirements.trim()) newErrors.requirements = 'Requirements are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setSubmitSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
        setFormData(initialFormState);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    setFormData({
      ...initialFormState,
      service: serviceTitle
    });
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Solutions I provide to my clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  {service.price}
                </p>
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enrollment Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Enroll in {formData.service}
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-green-500 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Enrollment Successful!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We'll contact you soon with further details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Requirements
                      </label>
                      <textarea
                        value={formData.requirements}
                        onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                        rows={4}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.requirements ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Describe your project requirements"
                      />
                      {errors.requirements && (
                        <p className="mt-1 text-sm text-red-500">{errors.requirements}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;