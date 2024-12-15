import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-yellow-500 w-6 h-6" />
              <span className="text-2xl font-bold">NursingStudentsHelp</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering nursing students to achieve academic excellence through expert guidance and support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                NCLEX Preparation
              </li>
              <li className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                ATI TEAS Support
              </li>
              <li className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                Online Tutoring
              </li>
              <li className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                Exam Assistance
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-yellow-500 w-5 h-5" />
                <a
                  href="mailto:support@nursingstudentshelp.com"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                >
                  support@nursingstudentshelp.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-yellow-500 w-5 h-5" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-yellow-500 w-5 h-5" />
                <span className="text-gray-400">123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm text-gray-400">
            <a
              href="/privacy-policy"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/refund-policy"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Refund Policy
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <span className="font-bold">NursingStudentsHelp</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
