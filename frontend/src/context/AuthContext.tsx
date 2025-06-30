'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  access: string | null;
  login: (data: LoginPayload) => Promise<void>;
  logout: () => void;
};

type LoginPayload = {
  email: string;
  password: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [access, setAccess] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('access');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setAccess(storedToken);
    }
  }, []);

  const login = async ({ email, password }: LoginPayload) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error('Login failed');
    const data = await res.json();

    setUser(data.user);
    setAccess(data.access);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    setAccess(null);
    localStorage.clear();
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, access, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};