import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FlaskRound as Flask } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/lab-chemicals', label: 'Lab Chemicals' },
    { path: '/equipment', label: 'Equipment' },
    { path: '/diagnostic-kits', label: 'Diagnostic Kits' },
    { path: '/lab-design', label: 'Lab Design' },
    { path: '/internship', label: 'Internship' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Flask className="h-8 w-8" />
            <span className="font-bold text-xl">Lab Crafters</span>
          </Link>
          
          <div className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-secondary transition duration-200 px-3 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 hover:bg-primary-light rounded-md transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;