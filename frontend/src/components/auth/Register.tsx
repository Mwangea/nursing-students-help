import React, { useState } from 'react';

import { theme } from '../../constants/Theme';
import { AuthLayout } from './AuthLayout';
import { AuthForm } from './AuthForm';


export const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement registration logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join NursingStudentsHelp.us today"
      imageSrc={theme.images.register}
    >
      <AuthForm
        type="register"
        isLoading={isLoading}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
      />
    </AuthLayout>
  );
};