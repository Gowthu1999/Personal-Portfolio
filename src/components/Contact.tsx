import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Linkedin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95241 63687",
      href: "tel:+919524163687"
    },
    {
      icon: Mail,
      label: "Email",
      value: "rjgowthu1999@gmail.com",
      href: "mailto:rjgowthu1999@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madurai, Tamil Nadu",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/gowtham-jenarthanan-7ba1921b7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next CRM implementation or have questions about my services? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                    <info.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                    <p className="text-gray-900 font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What I Can Help With:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  CRM Implementation & Configuration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  Workflow Automation Setup
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  API Integration & Testing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  User Training & Support
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  System Optimization & Consulting
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a topic</option>
                    <option value="crm-implementation">CRM Implementation</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="support">Post-Implementation Support</option>
                    <option value="training">Training & Documentation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and any specific challenges you're facing..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-semibold flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2" size={20} />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  Thank you for your message! I'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;