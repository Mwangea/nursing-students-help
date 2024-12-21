import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { AuthLayout } from './AuthLayout';
import { theme } from '../../constants/Theme';


export const ForgotPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement password reset logic
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 1000);
  };

  if (isEmailSent) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent you instructions to reset your password"
      >
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-6">
            If you don't receive an email within a few minutes, please check your spam folder.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsEmailSent(false)}
          >
            Try another email
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            Remember your password?{' '}
            <Link
              to="/login"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </AuthLayout>
    );
  }
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you instructions"
      imageSrc={theme.images.forgotpassword}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <Button type="submit" fullWidth isLoading={isLoading}>
          Send reset instructions
        </Button>

        <p className="text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link
            to="/login"
            className="font-medium text-yellow-600 hover:text-yellow-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}