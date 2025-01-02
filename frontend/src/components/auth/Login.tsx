import React, { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { AuthForm } from './AuthForm';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import { theme } from '../../constants/Theme';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const { showToast } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For dynamic error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setErrorMessage(null); // Clear previous errors
    setIsLoading(true);

    try {
      await login(formData);
      showToast('Successfully logged in!', 'success');
    } catch (error) {
      // Handle error without reloading the page
      const errorMsg =
        error instanceof Error ? error.message : 'Invalid credentials';
      setErrorMessage(errorMsg); // Display error message dynamically
      showToast(errorMsg, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage(null); // Clear error when user starts typing
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
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </AuthLayout>
  );
};
