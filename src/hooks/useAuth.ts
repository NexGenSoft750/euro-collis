"use client";

import { useState, useEffect, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

interface StoredUser extends User {
  password: string; // Hashed password (simple hash for demo)
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const LOCAL_STORAGE_KEY = 'eurocollis_auth';
const USERS_STORAGE_KEY = 'eurocollis_users';

// Simple hash function for demo purposes (not secure for production)
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString();
}

function getStoredUsers(): StoredUser[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(USERS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveStoredUsers(users: StoredUser[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : { user: null, token: null };
    }
    return { user: null, token: null };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authState));
    }
  }, [authState]);

  const login = useCallback((email: string, password: string) => {
    const users = getStoredUsers();
    const storedUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!storedUser) {
      return false; // User not found
    }

    const passwordHash = simpleHash(password);
    if (storedUser.password !== passwordHash) {
      return false; // Invalid password
    }

    // Create user object without password
    const { password: _, ...user } = storedUser;
    const token = 'mock-jwt-token-' + Date.now().toString();
    setAuthState({ user, token });
    return true;
  }, []);

  const signup = useCallback((email: string, password: string, name?: string) => {
    const users = getStoredUsers();
    
    // Check if user already exists
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return false; // User already exists
    }

    // Create new user
    const newUser: StoredUser = {
      id: Date.now().toString(),
      email: email.toLowerCase(),
      name: name || email.split('@')[0],
      password: simpleHash(password), // Store hashed password
    };

    users.push(newUser);
    saveStoredUsers(users);

    // Create user object without password
    const { password: _, ...user } = newUser;
    const token = 'mock-jwt-token-' + Date.now().toString();
    setAuthState({ user, token });
    return true;
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    if (!authState.user) return false;

    const users = getStoredUsers();
    const userIndex = users.findIndex(u => u.id === authState.user!.id);
    
    if (userIndex === -1) return false;

    // Update user in storage
    users[userIndex] = { ...users[userIndex], ...updates };
    saveStoredUsers(users);

    // Update auth state
    const { password: _, ...updatedUser } = users[userIndex];
    setAuthState({ ...authState, user: updatedUser });
    return true;
  }, [authState]);

  const logout = useCallback(() => {
    setAuthState({ user: null, token: null });
  }, []);

  return {
    user: authState.user,
    token: authState.token,
    login,
    signup,
    updateUser,
    logout,
  };
};
