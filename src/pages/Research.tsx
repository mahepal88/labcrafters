import React from 'react';
import { Microscope, BookOpen, Users, Lightbulb } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: 'Analytical Research',
      description: 'Advanced analytical techniques and methodologies',
      icon: Microscope,
      topics: [
        'Chromatography',
        'Spectroscopy',
        'Mass Spectrometry',
        'Thermal Analysis'
      ]
    },
    {
      title: 'Materials Science',
      description: 'Investigation of novel materials and properties',
      icon: BookOpen,
      topics: [
        'Polymers',
        'Nanomaterials',
        'Composites',
        'Surface Analysis'
      ]
    },
    {
      title: 'Collaborative Projects',
      description: 'Partnerships with academic and industry leaders',
      icon: Users,
      topics: [
        'University Research',
        'Industry Partnerships',
        'Government Projects',
        'International Collaboration'
      ]
    },
    {
      title: 'Innovation Lab',
      description: 'Development of new laboratory technologies',
      icon: Lightbulb,
      topics: [
        'Lab Automation',
        'Digital Integration',
        'Process Optimization',
        'Custom Solutions'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Research & Development</h1>
          <p className="text-xl">Advancing Scientific Discovery Through Innovation</p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <area.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Research Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Patents Filed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-lg">Research Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Research Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary font-semibold mb-2">New Publication</div>
              <h3 className="text-xl font-bold mb-2">Advanced Analysis Techniques</h3>
              <p className="text-gray-600">Breakthrough in spectroscopic analysis methods for complex chemical compounds.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary font-semibold mb-2">Innovation</div>
              <h3 className="text-xl font-bold mb-2">Automated Lab Systems</h3>
              <p className="text-gray-600">Development of new automated systems for high-throughput screening.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-secondary font-semibold mb-2">Collaboration</div>
              <h3 className="text-xl font-bold mb-2">Industry Partnership</h3>
              <p className="text-gray-600">Joint research project with leading pharmaceutical company on drug discovery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;