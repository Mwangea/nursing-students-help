import { useState } from 'react';
import { Search, Bell, Menu, User, LogOut, Settings, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold text-yellow-400">NursingStudentsHelp.us</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-64"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button 
            title="Notifications"
            className="p-2 hover:bg-gray-800 rounded-full relative"
          >
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-yellow-400 rounded-full"></span>
          </button>
          <div className="relative">
            <button 
              onClick={() => setProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-lg"
            >
              <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
                <User className="h-5 w-5 text-black" />
              </div>
              <span className="hidden md:block">John Doe</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-800">
                <a href="/profile" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <User className="h-5 w-5 mr-3" />
                  Profile
                </a>
                <a href="/settings" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </a>
                <a href="/help" className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <HelpCircle className="h-5 w-5 mr-3" />
                  Help Center
                </a>
                <hr className="my-2" />
                <button className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-600 w-full">
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}