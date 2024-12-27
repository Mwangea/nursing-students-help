import React, { useState } from 'react';
import { theme } from '../../constants/Theme';
import { AuthLayout } from './AuthLayout';
import { AuthForm } from './AuthForm';
import { useNotification } from '../../context/NotificationContext';
import { useAuth } from '../../context/AuthContext';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const { showToast } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(formData);
      showToast('Successfully logged in!', 'success');
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : 'Invalid credentials', 
        'error'
      );
    } finally {
      setIsLoading(false);
    }
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