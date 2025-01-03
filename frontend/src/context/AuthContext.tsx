// AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  register: (data: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  resetPassword: (data: { token: string; password: string }) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { user } = await authApi.getProfile();
          setUser(user);
        } catch {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (data: { email: string; password: string }) => {
    try {
      const response = await authApi.login(data);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      navigate('/dashboard');
      return response;
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && (error as { response: { status: number } }).response?.status === 401) {
        throw new Error('Invalid credentials');
      }
      throw new Error('An error occurred during login');
    }
  };

  const register = async (data: { name: string; email: string; password: string }) => {
    try {
      const response = await authApi.register(data);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      navigate('/dashboard');
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || 'Registration failed');
      }
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const resetPassword = async (data: { token: string; password: string }) => {
    try {
      await authApi.resetPassword(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || 'Password reset failed');
      }
      throw new Error('Password reset failed');
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await authApi.forgotPassword(email);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || 'Password reset request failed');
      }
      throw new Error('Password reset request failed');
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        login, 
        register, 
        logout, 
        setUser,
        resetPassword,
        forgotPassword
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};