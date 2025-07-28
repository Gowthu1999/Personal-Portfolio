import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Implementation Analyst",
      company: "Kambaa Incorporation",
      location: "Coimbatore, Tamil Nadu",
      period: "Apr 2024 – Present",
      description: "Leading comprehensive deployment and configuration of customer experience solutions using the Freshworks suite — including Freshdesk, Freshchat, and Freshsales. My role spans requirement gathering, technical configuration, client training, API integration, and post-implementation support, with a focus on driving customer success and scalable digital transformation.",
      achievements: [
        "🔹 Freshdesk Implementation & Optimization: Spearheaded full-scale configuration for multiple clients with custom ticket workflows, automations, and escalation rules tailored to SLA policies",
        "Designed multi-channel ticketing (email, web, social) with organized ticket views, agent groups, and priority levels for operational clarity",
        "Created branded self-service portals and dynamic knowledge bases to boost user adoption and reduce repetitive tickets",
        "🔹 Freshchat with Chatbot & Omnichannel Engagement: Deployed AI-enhanced chatbot flows with proactive messaging and real-time multichannel integration",
        "Designed custom chatbot workflows for FAQ automation, pre-chat information gathering, and intelligent agent handover based on intent recognition",
        "Integrated Freshchat across WhatsApp, Facebook Messenger, and websites for seamless messaging experience",
        "🔹 Freshsales CRM Deployment: Led end-to-end implementation with custom sales pipelines aligned to client buying cycles",
        "Implemented AI-powered lead scoring, email sequences, and task automation to improve sales efficiency and closure rates",
        "🔹 API Integration & Customization: Utilized Postman and REST APIs for bidirectional syncing between CRMs, communication tools, and analytics platforms",
        "Configured custom field mapping, trigger-based data actions, and webhook configuration to reduce manual effort through automation",
        "🔹 Client Onboarding & Post-Go-Live Support: Conducted comprehensive UAT and provided hands-on training sessions with documentation",
        "Monitored performance post-go-live and applied continuous improvements based on analytics and client feedback"
      ]
    },
    {
      title: "Implementation Consultant",
      company: "Neeyamo",
      location: "Chennai, Tamil Nadu",
      period: "Jul 2020 – Oct 2023",
      description: "Specialized in HRMS implementation and CRM configuration, managing end-to-end deployment cycles for enterprise clients.",
      achievements: [
        "🔹 Requirement Gathering & Workflow Analysis: Collaborated with global clients to understand their HR processes, with special focus on centralizing employee information and organizational structure through the Employee Hub module",
        "🔹 HRMS Configuration: Customized employee profiles, role hierarchies, department mapping, and workflow approvals to streamline employee lifecycle management in the Employee Hub",
        "🔹 Attendance, Leave, and Recruitment Module Deployment: Implemented policy-based configurations for attendance shifts, leave types, and recruitment stages, ensuring end-to-end HR automation",
        "🔹 Functional Testing & Integration Validation: Conducted detailed integration testing with external systems such as biometric attendance devices and HR compliance platforms",
        "🔹 Client UAT & Go-Live: Facilitated User Acceptance Testing (UAT) and go-live readiness for all modules, with a focus on minimizing go-live issues and supporting post-launch feedback",
        "🔹 Employee Hub Optimization: Enhanced the module post-deployment by adding workflows for document management, employee updates, and centralized communication logs",
        "🔹 Documentation & Training: Created user manuals and conducted hands-on client training sessions to ensure adoption across HR, IT, and admin teams"
      ]
    },
    {
      title: "Service Delivery Executive",
      company: "Neeyamo",
      location: "Chennai, Tamil Nadu",
      period: "Jul 2019 – Feb 2020",
      description: "Provided post-implementation support and managed client relationships, ensuring smooth system operations and user adoption.",
      achievements: [
        "Maintained 99% system uptime across managed accounts",
        "Conducted user training sessions for 100+ end users",
        "Resolved critical issues with average response time under 2 hours"
      ]
    }
  ];

  const projects = [
    {
      title: "Freshworks Suite Implementation for Retail Client",
      description: "Complete omnichannel customer service setup with automated workflows",
      tech: ["Freshdesk", "Freshchat", "API Integration"]
    },
    {
      title: "HubSpot Presales Automation for SaaS Company",
      description: "Lead scoring system and automated nurturing campaigns",
      tech: ["HubSpot", "Marketing Automation", "CRM Integration"]
    },
    {
      title: "HRMS Configuration for Global Workforce",
      description: "Multi-country Employee Hub and compliance management system",
      tech: ["Neeyamo HRMS", "API Integration", "Compliance Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Briefcase className="mr-3 text-blue-600" size={24} />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Notable Projects</h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900">M.Sc. Physics</h4>
                  <p className="text-gray-600">Alagappa University</p>
                  <p className="text-blue-600 text-sm">2020 – 2022</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900">B.Sc. Physics</h4>
                  <p className="text-gray-600">The Madura College</p>
                  <p className="text-blue-600 text-sm">2016 – 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;