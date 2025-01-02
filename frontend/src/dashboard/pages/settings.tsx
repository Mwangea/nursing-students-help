import { DashboardLayout } from "../layout/DashBoardLayout";
import { User, Bell, Lock, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-500">Manage your account preferences and settings</p>
        </div>

        <div className="grid gap-6">
          {/* Profile Settings */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-yellow-600" />
              <h2 className="text-xl font-semibold">Profile Settings</h2>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    defaultValue="John Doe"
                    title="Full Name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    defaultValue="john@example.com"
                    title="Email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                Save Changes
              </button>
            </form>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="h-6 w-6 text-yellow-600" />
              <h2 className="text-xl font-semibold">Notification Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive updates about your assignments</p>
                </div>
                <label htmlFor="emailNotifications" className="relative inline-flex items-center cursor-pointer">
                  <input id="emailNotifications" type="checkbox" className="sr-only peer" defaultChecked aria-label="Email Notifications" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                </label>
              </div>
              {/* Add more notification settings as needed */}
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-6 w-6 text-yellow-600" />
              <h2 className="text-xl font-semibold">Security Settings</h2>
            </div>
            
            <div className="space-y-4">
              <button className="text-yellow-600 hover:text-yellow-700 font-medium">
                Change Password
              </button>
              <button className="text-yellow-600 hover:text-yellow-700 font-medium">
                Enable Two-Factor Authentication
              </button>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="h-6 w-6 text-yellow-600" />
              <h2 className="text-xl font-semibold">Payment Settings</h2>
            </div>
            
            <div className="space-y-4">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                Add Payment Method
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}