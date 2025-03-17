import React from 'react';
import { Microscope, Beaker, FlaskRound as Flask, Thermometer } from 'lucide-react';

const Equipment = () => {
  const categories = [
    {
      title: 'Analytical Instruments',
      icon: Microscope,
      items: [
        'Spectrophotometers',
        'Chromatography Systems',
        'Mass Spectrometers',
        'Elemental Analyzers'
      ]
    },
    {
      title: 'Lab Essentials',
      icon: Beaker,
      items: [
        'Pipettes & Dispensers',
        'Centrifuges',
        'Mixers & Shakers',
        'pH Meters'
      ]
    },
    {
      title: 'Research Equipment',
      icon: Flask,
      items: [
        'PCR Systems',
        'Microscopes',
        'Cell Culture Equipment',
        'Incubators'
      ]
    },
    {
      title: 'Measurement Devices',
      icon: Thermometer,
      items: [
        'Balances & Scales',
        'Temperature Controllers',
        'Pressure Meters',
        'Flow Meters'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Laboratory Equipment</h1>
          <p className="text-xl">State-of-the-art Equipment for Modern Laboratories</p>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <category.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Equipment?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">All equipment meets international quality standards</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">Technical assistance and training available</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Maintenance Service</h3>
              <p className="text-gray-600">Regular maintenance and calibration services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;