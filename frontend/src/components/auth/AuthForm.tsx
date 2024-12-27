import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { SocialLogin } from './SocialLogin';

interface AuthFormProps {
  type: 'login' | 'register';
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  formData: {
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
  };
  onChange: (field: string, value: string) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  type,
  isLoading,
  onSubmit,
  formData,
  onChange,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <form onSubmit={onSubmit}  className="space-y-6">
          {type === 'register' && (
            <Input
              label="Full name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder="John Doe"
            />
          )}

          <Input
            label="Email address"
            type="email"
            required
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="john@example.com"
          />

          <Input
            label="Password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => onChange('password', e.target.value)}
            placeholder="••••••••"
          />

          {type === 'register' && (
            <Input
              label="Confirm password"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => onChange('confirmPassword', e.target.value)}
              placeholder="••••••••"
            />
          )}

          {type === 'login' && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-yellow-600 hover:text-yellow-500"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <Button type="submit" fullWidth isLoading={isLoading}>
            {type === 'login' ? 'Sign in' : 'Create account'}
          </Button>

          <SocialLogin />

          <p className="mt-4 text-center text-sm text-gray-600">
            {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <Link
              to={type === 'login' ? '/register' : '/login'}
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              {type === 'login' ? 'Sign up' : 'Sign in'}
            </Link>
          </p>
        </form>
      </div>
      <div className="pb-8" /> {/* Added bottom padding */}
    </div>
  );
};

export default AuthForm;