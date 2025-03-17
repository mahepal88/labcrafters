import React from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const Internship = () => {
  const programs = [
    {
      title: 'Laboratory Techniques',
      duration: '3 months',
      description: 'Hands-on training in basic and advanced laboratory techniques',
      skills: [
        'Equipment handling',
        'Safety protocols',
        'Sample preparation',
        'Data analysis'
      ]
    },
    {
      title: 'Quality Control',
      duration: '2 months',
      description: 'Training in quality control procedures and standards',
      skills: [
        'Quality assurance',
        'Documentation',
        'Testing procedures',
        'Compliance'
      ]
    },
    {
      title: 'Research Methods',
      duration: '4 months',
      description: 'Research methodology and experimental design',
      skills: [
        'Research planning',
        'Data collection',
        'Analysis techniques',
        'Report writing'
      ]
    }
  ];

  return (
    <div>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Internship Program</h1>
          <p className="text-xl">Building Future Laboratory Professionals</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <GraduationCap className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Practical Experience</h3>
              <p className="text-gray-600">Hands-on training with modern equipment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <BookOpen className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Expert Mentoring</h3>
              <p className="text-gray-600">Guidance from industry professionals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with industry leaders</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Certification</h3>
              <p className="text-gray-600">Industry-recognized certification</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-secondary font-semibold mb-4">Duration: {program.duration}</p>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <h4 className="font-bold mb-2">Key Skills:</h4>
                <ul className="space-y-2">
                  {program.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Apply now for our internship programs</p>
          <a href="/contact" className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-light transition duration-200">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Internship;