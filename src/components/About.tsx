import React from 'react';
import { Target, Users, Settings, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Implementation Excellence",
      description: "End-to-end product implementation with focus on customer success"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Strong track record in customer onboarding and support"
    },
    {
      icon: Settings,
      title: "Workflow Automation",
      description: "Expert in streamlining business processes with smart automation"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Proven ability to enhance system efficiency and user adoption"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Detail-Oriented Implementation Specialist
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a dedicated Implementation Analyst with over 4 years of experience, I specialize in 
              transforming business workflows through strategic CRM and SaaS solutions. My expertise 
              spans across the complete implementation lifecycle - from initial consultation and 
              system design to deployment and ongoing optimization.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I have successfully deployed and configured solutions across the Freshworks ecosystem 
              (Freshdesk, Freshchat, Freshsales) and HubSpot platforms, helping organizations 
              streamline their customer engagement processes. My approach combines technical expertise 
              with strong client relationship management to ensure successful project outcomes and 
              high user adoption rates.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a background in physics and a passion for problem-solving, I bring analytical 
              thinking and attention to detail to every project, ensuring that implementations 
              not only meet current requirements but also scale for future growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;