import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  imageSrc?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, imageSrc }) => {
  return (
    <div className="flex h-screen">
      {/* Left side - Form */}
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-yellow-50">
          <div className="max-w-md w-full mx-auto py-12">
            <Link to="/">
              <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-8">
                NursingStudentsHelp<span className="text-yellow-500">.us</span>
              </h1>
            </Link>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              {subtitle}
            </p>

            {children}
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block flex-1">
        <div className="fixed w-1/2 h-screen right-0">
          <img
            src={imageSrc}
            alt="Nursing students"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-yellow-600/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}