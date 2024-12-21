import React, { useState } from 'react';

import { theme } from '../../constants/Theme';
import { AuthLayout } from './AuthLayout';
import { AuthForm } from './AuthForm';


export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Sign in to access your account"
      imageSrc={theme.images.login}
    >
      <AuthForm
        type="login"
        isLoading={isLoading}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
      />
    </AuthLayout>
  );
};