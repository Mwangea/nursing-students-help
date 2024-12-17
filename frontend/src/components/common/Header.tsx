import { Stethoscope, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-black text-yellow-500 py-2 text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <div>
            📧 <a href="mailto:support@nursingstudentshelp.us" className="hover:underline">support@nursingstudentshelp.us</a>
          </div>
          <div>
            📞 <a href="tel:+18001234567" className="hover:underline">+1-800-123-4567</a>
          </div>
          <div>
            🕒 Open 24/7 (Sunday to Sunday)
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-yellow-500" />
          <span className="text-xl font-bold text-gray-900">
            NursingStudentsHelp.us
          </span>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/">
          <div  className="text-gray-700 hover:text-yellow-500">
            Home
          </div>
          </Link>
          <Link to="/search-questions">
          <div className="text-gray-700 hover:text-yellow-500">
            Search Questions
          </div>
          </Link>
          
          <Link to="/subjects" className="text-gray-700 hover:text-yellow-500">
            Subjects
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-yellow-500">
            FAQs
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-yellow-500">
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => (window.location.href = '/register')}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Get Started
          </button>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Stethoscope className="h-8 w-8 text-yellow-500" />
                <span className="text-xl font-bold text-gray-900">
                  NursingStudentsHelp.us
                </span>
              </div>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <a href="/" className="text-gray-700 hover:text-yellow-500">
              Home
            </a>
            <a href="#search" className="text-gray-700 hover:text-yellow-500">
              Search Questions
            </a>
            <a href="#subjects" className="text-gray-700 hover:text-yellow-500">
              Subjects
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-yellow-500">
              FAQs
            </a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500">
              Contact
            </a>
            <button
              onClick={() => (window.location.href = '/register')}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}