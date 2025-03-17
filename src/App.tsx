import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LabChemicals from './pages/LabChemicals';
import Equipment from './pages/Equipment';
import DiagnosticKits from './pages/DiagnosticKits';
import LabDesign from './pages/LabDesign';
import Internship from './pages/Internship';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lab-chemicals" element={<LabChemicals />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/diagnostic-kits" element={<DiagnosticKits />} />
            <Route path="/lab-design" element={<LabDesign />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App