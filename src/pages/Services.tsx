import React from 'react';
import { FlaskRound as Flask, Microscope, Building, Beaker, PenTool as Tool, Lightbulb } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive Laboratory Solutions for Every Need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scientific Equipment */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Flask className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Scientific Equipment</h3>
              <p className="text-gray-600 mb-4">
                Premium laboratory equipment from trusted manufacturers, including:
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Analytical Instruments</li>
                <li>Measurement Devices</li>
                <li>Research Equipment</li>
                <li>Safety Equipment</li>
              </ul>
            </div>

            {/* Chemical Supplies */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Beaker className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Chemical Supplies</h3>
              <p className="text-gray-600 mb-4">
                High-quality chemicals and reagents for various applications:
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Research Chemicals</li>
                <li>Analytical Reagents</li>
                <li>Laboratory Consumables</li>
                <li>Custom Solutions</li>
              </ul>
            </div>

            {/* Lab Design */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Laboratory Design</h3>
              <p className="text-gray-600 mb-4">
                End-to-end laboratory design and setup services:
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Space Planning</li>
                <li>Safety Compliance</li>
                <li>Workflow Optimization</li>
                <li>Future-proof Design</li>
              </ul>
            </div>

            {/* Maintenance */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Tool className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Equipment Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive maintenance and calibration services:
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Regular Maintenance</li>
                <li>Calibration Services</li>
                <li>Emergency Repairs</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            {/* Consultation */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lightbulb className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
              <p className="text-gray-600 mb-4">
                Professional guidance for laboratory solutions:
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Requirements Analysis</li>
                <li>Solution Planning</li>
                <li>Budget Optimization</li>
                <li>Technical Support</li>
              </ul>
            </div>

            {/* Training */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Microscope className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training for laboratory personnel:
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Equipment Operation</li>
                <li>Safety Protocols</li>
                <li>Best Practices</li>
                <li>Certification Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;