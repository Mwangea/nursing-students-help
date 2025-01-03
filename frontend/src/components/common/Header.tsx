import { Stethoscope, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when location changes (route navigation)
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-black text-yellow-500 py-2 text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <a href="mailto:support@nursingstudentshelp.us" className="hover:text-white transition-colors">
                support@nursingstudentshelp.us
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📞</span>
              <a href="tel:+18001234567" className="hover:text-white transition-colors">
                +1-800-123-4567
              </a>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <span>🕒</span>
              <span>Open 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Stethoscope className="h-10 w-10 text-yellow-500" />
              <span className="text-2xl font-bold text-gray-900 hidden sm:block">
                NursingStudentsHelp.us
              </span>
              <span className="text-xl font-bold text-gray-900 sm:hidden">
                NSH.us
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
                Home
              </Link>
              <Link to="/questions" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
                Search Questions
              </Link>
              <Link to="/subjects" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
                Subjects
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
                FAQs
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* Action Button */}
            <div className="hidden md:flex">
              <Link to="/register" 
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors shadow-md">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setMenuOpen(false)}>
            <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out"
                 onClick={e => e.stopPropagation()}>
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <Stethoscope className="h-8 w-8 text-yellow-500" />
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6 text-gray-700" />
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 py-4">
                  <div className="flex flex-col space-y-3 px-4">
                    <Link to="/" className="text-gray-700 hover:text-yellow-500 py-2 transition-colors">
                      Home
                    </Link>
                    <Link to="/questions" className="text-gray-700 hover:text-yellow-500 py-2 transition-colors">
                      Search Questions
                    </Link>
                    <Link to="/subjects" className="text-gray-700 hover:text-yellow-500 py-2 transition-colors">
                      Subjects
                    </Link>
                    <Link to="/faq" className="text-gray-700 hover:text-yellow-500 py-2 transition-colors">
                      FAQs
                    </Link>
                    <Link to="/contact" className="text-gray-700 hover:text-yellow-500 py-2 transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <Link to="/register"
                    className="block w-full bg-yellow-500 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-yellow-600 transition-colors shadow-md"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}