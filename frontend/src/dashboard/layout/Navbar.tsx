import { useState } from 'react';
import { Search, Bell, Menu, User, LogOut, Settings, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

  const closeDropdowns = () => {
    setProfileOpen(false);
    setMobileSearchOpen(false);
  };

  return (
    <nav className="bg-black text-white px-2 sm:px-4 py-2 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onMenuClick}
              className="p-1.5 hover:bg-gray-800 rounded-lg"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-yellow-400 truncate">
                NursingStudentsHelp.us
              </span>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Desktop Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white h-9 px-4 py-1 rounded-lg pl-9 focus:outline-none focus:ring-1 focus:ring-yellow-400 w-48 lg:w-64 text-sm"
              />
              <Search className="absolute left-2.5 top-2 h-5 w-5 text-gray-400" />
            </div>
            
            {/* Mobile Search Button */}
            <button 
              onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-1.5 hover:bg-gray-800 rounded-lg"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Notification Button */}
            <div className="relative">
              <button 
                className="p-1.5 hover:bg-gray-800 rounded-lg"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-yellow-400 rounded-full ring-2 ring-black"></span>
              </button>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1.5 hover:bg-gray-800 rounded-lg"
                aria-expanded={isProfileOpen}
                aria-haspopup="true"
              >
                <div className="h-7 w-7 rounded-full bg-yellow-400 flex items-center justify-center">
                  <User className="h-4 w-4 text-black" />
                </div>
              </button>

              {isProfileOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 text-gray-800"
                  style={{ 
                    zIndex: 200,
                    position: 'fixed',
                    top: '3rem',
                    right: '1rem'
                  }}
                >
                  <div className="relative bg-white rounded-lg shadow-lg">
                    {/* Search Overlay */}
                    {isMobileSearchOpen && (
                      <div className="fixed inset-0 bg-black/50" onClick={() => setMobileSearchOpen(false)} />
                    )}
                    
                    <a href="/settings" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </a>
                    <a href="/help" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                      <HelpCircle className="h-4 w-4 mr-3" />
                      Help Center
                    </a>
                    <hr className="my-1" />
                    <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 text-red-600 w-full">
                      <LogOut className="h-4 w-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="mt-2 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-800 text-white h-9 px-4 py-1 rounded-lg pl-9 focus:outline-none focus:ring-1 focus:ring-yellow-400 text-sm"
              />
              <Search className="absolute left-2.5 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}