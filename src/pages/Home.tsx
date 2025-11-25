import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LabChemicals = () => {
  return (
    <div>

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091215367-59ab6b41c682?auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-4">Laboratory Chemicals</h1>
          <p className="text-xl">Trusted, high-purity chemicals for research and industrial applications</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Chemical Range</h2>
          <p className="text-gray-700 mb-10">
            We supply a wide range of laboratory and industrial-grade chemicals that
            meet international safety and purity standards.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Chemical Solutions?</h2>
          <p className="text-xl mb-8">
            Our experts can help you find the right chemicals for your specific needs.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-light transition duration-200"
          >
            Contact Our Experts
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LabChemicals;
