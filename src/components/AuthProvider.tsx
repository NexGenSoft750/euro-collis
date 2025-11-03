"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth } from '@/hooks';

interface AuthContextType {
  user: { id: string; email: string; name?: string; phone?: string; address?: string; city?: string; postalCode?: string; country?: string } | null;
  token: string | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name?: string) => boolean;
  updateUser: (updates: Partial<{ id: string; email: string; name?: string; phone?: string; address?: string; city?: string; postalCode?: string; country?: string }>) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
