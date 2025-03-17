import React from 'react';
import { Building2, Ruler, Shield, Users } from 'lucide-react';

const LabDesign = () => {
  const services = [
    {
      title: 'Space Planning',
      description: 'Optimal layout design for efficient workflow',
      icon: Building2,
      features: [
        'Workflow optimization',
        'Safety considerations',
        'Storage solutions',
        'Future expansion planning'
      ]
    },
    {
      title: 'Safety Implementation',
      description: 'Comprehensive safety measures and protocols',
      icon: Shield,
      features: [
        'Emergency systems',
        'Ventilation design',
        'Safety equipment placement',
        'Waste management'
      ]
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored designs for specific requirements',
      icon: Ruler,
      features: [
        'Educational labs',
        'Research facilities',
        'Industrial labs',
        'Medical laboratories'
      ]
    },
    {
      title: 'Consultation',
      description: 'Expert guidance throughout the process',
      icon: Users,
      features: [
        'Requirements analysis',
        'Budget planning',
        'Equipment selection',
        'Implementation support'
      ]
    }
  ];

  return (
    <div>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Laboratory Design Services</h1>
          <p className="text-xl">Creating Efficient and Safe Laboratory Spaces</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">Understanding your specific requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">Creating detailed layout and specifications</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">Professional installation and setup</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabDesign;