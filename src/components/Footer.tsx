import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lab Crafters</h3>
            <p className="text-gray-400">
              Your trusted partner in scientific equipment, chemicals, and laboratory design solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +91 7569459812</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@labc.in</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Cabin No 17, COCUB<br />
                No.16/2A, First Floor<br />
                Service Road, Vanagaram<br />
                Chennai - 600095, India.</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Lab Crafters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
