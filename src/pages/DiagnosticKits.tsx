import React from 'react';
import { Microscope, Heart, Dna, Goal as Vial } from 'lucide-react';

const DiagnosticKits = () => {
  const categories = [
    {
      title: 'Clinical Chemistry',
      icon: Vial,
      items: [
        'Biochemistry Analyzers',
        'Electrolyte Kits',
        'Enzyme Assays',
        'Hormone Tests'
      ]
    },
    {
      title: 'Molecular Diagnostics',
      icon: Dna,
      items: [
        'PCR Test Kits',
        'DNA/RNA Extraction',
        'Sequencing Reagents',
        'Genetic Testing'
      ]
    },
    {
      title: 'Immunology',
      icon: Heart,
      items: [
        'ELISA Kits',
        'Rapid Tests',
        'Antibody Tests',
        'Immunoassays'
      ]
    },
    {
      title: 'Microbiology',
      icon: Microscope,
      items: [
        'Culture Media',
        'Sensitivity Discs',
        'Identification Kits',
        'Staining Kits'
      ]
    }
  ];

  return (
    <div>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Diagnostic Kits & Consumables</h1>
          <p className="text-xl">Comprehensive Range of High-Quality Diagnostic Solutions</p>
        </div>
      </section>

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

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Diagnostic Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-600">ISO certified products ensuring accurate results</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Results</h3>
              <p className="text-gray-600">Quick turnaround time for all diagnostic tests</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Support</h3>
              <p className="text-gray-600">Expert assistance for all diagnostic solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticKits;