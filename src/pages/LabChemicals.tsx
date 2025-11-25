import React from 'react';
import { FlaskRound as Flask, Shield, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const LabChemicals = () => {
  const chemicals = [
    {
      category: 'Analytical Reagents',
      items: ['Acids & Bases', 'Buffer Solutions', 'Indicators', 'Standard Solutions']
    },
    {
      category: 'Organic Chemicals',
      items: ['Solvents', 'Alcohols', 'Aldehydes', 'Amino Acids']
    },
    {
      category: 'Inorganic Chemicals',
      items: ['Salts', 'Metals', 'Oxides', 'Minerals']
    },
    {
      category: 'Biochemicals',
      items: ['Enzymes', 'Proteins', 'Growth Media', 'Antibodies']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Laboratory Chemicals</h1>
          <p className="text-xl">High-Quality Chemicals for Research and Analysis</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Flask className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Pure Quality</h3>
              <p className="text-gray-600">Highest grade chemicals for precise results</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Safety First</h3>
              <p className="text-gray-600">Strict safety and handling protocols</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Truck className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Efficient shipping and handling</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Certified</h3>
              <p className="text-gray-600">ISO certified quality management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Chemical Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chemicals.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
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

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Need Custom Chemical Solutions?</h2>
    <p className="text-xl mb-8">
      Our experts can help you find the right chemicals for your specific needs
    </p>

    <Link
      to="/contact"
      className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-light transition duration-200"
    >
      Contact Our Experts
    </Link>
  </div>
</section>

export default LabChemicals;
