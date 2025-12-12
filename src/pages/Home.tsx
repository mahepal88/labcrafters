import React from 'react';
import { ArrowRight, FlaskRound as Flask, Microscope, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Lab Crafters</h1>
          <p className="text-xl mb-8">Your Premier Scientific Equipment and Laboratory Design Partner</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <Flask className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold mb-2">Scientific Equipment</h3>
              <p className="text-gray-600">State-of-the-art laboratory equipment for all your research needs</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <Microscope className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold mb-2">Chemical Supplies</h3>
              <p className="text-gray-600">High-quality chemicals and reagents for your experiments</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <Building className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold mb-2">Lab Design</h3>
              <p className="text-gray-600">Custom laboratory design and setup services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Laboratory?</h2>
          <p className="text-xl mb-8">Let's discuss your requirements and create the perfect solution for you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
