import React from 'react';
import { MapPin, Phone, Mail, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Gowtham
                <span className="block text-blue-600">Jenarthanan</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                Implementation Analyst | CRM & SaaS Expert | Helpdesk & Chatbot Specialist
              </h2>
              <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                "Helping businesses streamline workflows with smart CRM, SaaS, Helpdesk, and Chatbot solutions."
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-700">Madurai, Tamil Nadu</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-700">+91 95241 63687</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-700">rjgowthu1999@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get In Touch
              </button>
              <a
                href="https://www.linkedin.com/in/gowtham-jenarthanan-7ba1921b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src="/WhatsApp Image 2025-07-27 at 1.41.27 PM-fotor-20250727155125.png"
                  alt="Gowtham Jenarthanan - Professional Photo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <span className="text-sm mb-2">Learn More</span>
            <ChevronDown className="animate-bounce" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;