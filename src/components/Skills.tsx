import React from 'react';
import { 
  Database, 
  Settings, 
  Zap, 
  TestTube, 
  MessageSquare, 
  TrendingUp,
  Globe,
  CheckCircle
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "CRM Platforms",
      icon: Database,
      skills: [
        { name: "Freshdesk", level: 97 },
        { name: "Freshchat", level: 98 },
        { name: "Freshsales", level: 92 },
        { name: "HubSpot (Marketing & Sales)", level: 85 }
      ]
    },
    {
      title: "Integration & Testing",
      icon: Settings,
      skills: [
        { name: "API Integration with Postman", level: 92 },
        { name: "CRM Dataflow Mapping", level: 93 },
        { name: "Functional & Integration Testing", level: 92 },
        { name: "UAT and End-to-End Testing", level: 95 }
      ]
    },
    {
      title: "Core Strengths",
      icon: TrendingUp,
      skills: [
        { name: "Client Communication & Onboarding", level: 90 },
        { name: "Presales & Demo Setup", level: 92 },
        { name: "Post-implementation Support", level: 96 },
        { name: "Time & Team Management", level: 100 }
      ]
    }
  ];

  const languages = [
    { name: "Tamil", level: "Native", flag: "🇮🇳" },
    { name: "English", level: "Proficient", flag: "🇺🇸" },
    { name: "Sourashtra", level: "Native", flag: "🗣️" }
  ];

  const certifications = [
    "Freshworks Implementation Specialist",
    "HubSpot Content Marketing",
    "API Testing with Postman",
    "Agile Project Management"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{lang.flag}</span>
                    <span className="font-medium text-gray-900">{lang.name}</span>
                  </div>
                  <span className="text-teal-600 font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Specialist </h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;