import React from 'react';
import { ExternalLink, Github, Zap, Users, Settings, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Freshworks Suite Implementation for Retail Client",
      description: "Complete omnichannel customer service transformation for a major retail chain with 500+ agents across multiple locations.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Multi-channel ticket routing (Email, Chat, Phone, Social)",
        "Automated SLA management with escalation workflows",
        "Custom field configurations for product categorization",
        "Integration with inventory management system via API",
        "Real-time dashboard with KPI tracking"
      ],
      technologies: ["Freshdesk", "Freshchat", "API Integration", "Workflow Automation"],
      results: [
        "40% reduction in average response time",
        "25% increase in customer satisfaction scores",
        "60% improvement in first-call resolution rate"
      ],
      icon: Zap
    },
    {
      title: "HubSpot Presales Automation for SaaS Company",
      description: "Comprehensive lead management and nurturing system for a growing B2B SaaS company with complex sales cycles.",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Advanced lead scoring based on behavioral data",
        "Automated email sequences for different buyer personas",
        "Deal pipeline optimization with custom stages",
        "Sales team performance tracking and reporting",
        "Integration with product usage analytics"
      ],
      technologies: ["HubSpot Sales", "HubSpot Marketing", "API Integration", "Analytics"],
      results: [
        "35% increase in qualified leads",
        "50% reduction in sales cycle length",
        "30% improvement in deal close rate"
      ],
      icon: BarChart3
    },
    {
      title: "HRMS Configuration for Global Workforce",
      description: "Enterprise-level HRMS deployment for a multinational company with 2000+ employees across 15 countries.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Multi-country Employee Hub processing with local compliance",
        "Employee self-service portal",
        "Automated leave management and approval workflows",
        "Performance review system with 360-degree feedback",
        "Advanced reporting for HR analytics"
      ],
      technologies: ["Neeyamo HRMS", "API Integration", "Mobile App", "Compliance Management"],
      results: [
        "90% reduction in manual HR processes",
        "99.5% payroll accuracy across all countries",
        "85% employee adoption rate within 3 months"
      ],
      icon: Users
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of my most impactful implementation projects that transformed business operations and delivered measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                      <project.icon className="text-blue-600" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Achieved:</h4>
                    <div className="grid sm:grid-cols-1 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-green-700">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help implement the right CRM and SaaS solutions for your organization's unique needs.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;