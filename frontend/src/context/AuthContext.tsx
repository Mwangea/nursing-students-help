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
        const response = await authApi.login(data);
        localStorage.setItem('token', response.token);
        setUser(response.user);
        navigate('/dashboard');
      };

      const register = async (data: { name: string; email: string; password: string }) => {
        const response = await authApi.register(data);
        localStorage.setItem('token', response.token);
        setUser(response.user);
        navigate('/dashboard');
      };

      const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
      };


      return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, setUser }}>
          {!loading && children}
        </AuthContext.Provider>
      );
    };
    
    export const useAuth = () => {
      const context = useContext(AuthContext);
      if (!context) throw new Error('useAuth must be used within AuthProvider');
      return context;
    };
    