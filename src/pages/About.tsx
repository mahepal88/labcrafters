import React from 'react';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Lab Crafters</h1>
          <p className="text-xl">Building the Future of Scientific Research</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to revolutionize laboratory solutions, Lab Crafters has been at the forefront of scientific equipment supply and laboratory design for over a decade. Our commitment to excellence and innovation has made us a trusted partner for research institutions, universities, and industrial laboratories across the globe.
              </p>
              <p className="text-gray-600">
                We believe in providing not just products, but complete solutions that enable our clients to achieve their research goals efficiently and effectively. Our team of experts works closely with each client to understand their unique requirements and deliver tailored solutions that exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <Award className="h-8 w-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-600">Committed to delivering the highest quality products and services</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Highly qualified professionals with extensive industry experience</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <Target className="h-8 w-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">Staying ahead with the latest technological advancements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Dr. James Wilson",
                role: "Technical Director",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
