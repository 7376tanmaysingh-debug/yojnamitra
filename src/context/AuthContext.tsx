import React, { createContext, useContext, useState, useEffect } from 'react';
import { CitizenUser } from '../types';

interface AuthContextType {
  user: CitizenUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  authModalReason: string | null;
  openAuthModal: (reason?: string) => void;
  closeAuthModal: () => void;
  loginWithGoogle: (email?: string, name?: string) => Promise<boolean>;
  loginWithEmail: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  sendMobileOtp: (phone: string) => Promise<{ success: boolean; maskedPhone?: string; otp?: string; error?: string }>;
  verifyMobileOtp: (phone: string, otp: string, name?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<CitizenUser | null>(null);
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('jankalyan_auth_token') || null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalReason, setAuthModalReason] = useState<string | null>(null);

  // Restore session on initial load
  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = localStorage.getItem('jankalyan_auth_token');
      if (!storedToken) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        const data = await res.json();
        if (data.success && data.user) {
          setUser(data.user);
          setToken(storedToken);
        } else {
          localStorage.removeItem('jankalyan_auth_token');
          setToken(null);
          setUser(null);
        }
      } catch (e) {
        console.error('Failed to restore session:', e);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const openAuthModal = (reason?: string) => {
    setAuthModalReason(reason || null);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthModalReason(null);
  };

  const loginWithGoogle = async (email?: string, name?: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (data.success && data.token && data.user) {
        localStorage.setItem('jankalyan_auth_token', data.token);
        setToken(data.token);
        setUser(data.user);
        closeAuthModal();
        return true;
      }
      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    try {
      const res = await fetch('/api/auth/email/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }),
      });
      const data = await res.json();
      if (data.success && data.token && data.user) {
        localStorage.setItem('jankalyan_auth_token', data.token);
        setToken(data.token);
        setUser(data.user);
        closeAuthModal();
        return { success: true };
      }
      return { success: false, error: data.message || 'Login failed' };
    } catch (e: any) {
      return { success: false, error: e.message || 'Network error' };
    }
  };

  const sendMobileOtp = async (phone: string) => {
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (data.success) {
        return { success: true, maskedPhone: data.maskedPhone, otp: data.otp };
      }
      return { success: false, error: data.message || 'Failed to send OTP' };
    } catch (e: any) {
      return { success: false, error: e.message || 'Network error' };
    }
  };

  const verifyMobileOtp = async (phone: string, otp: string, name?: string) => {
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp, name }),
      });
      const data = await res.json();
      if (data.success && data.token && data.user) {
        localStorage.setItem('jankalyan_auth_token', data.token);
        setToken(data.token);
        setUser(data.user);
        closeAuthModal();
        return { success: true };
      }
      return { success: false, error: data.message || 'Verification failed' };
    } catch (e: any) {
      return { success: false, error: e.message || 'Network error' };
    }
  };

  const logout = async () => {
    try {
      if (token) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.removeItem('jankalyan_auth_token');
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        isAuthModalOpen,
        authModalReason,
        openAuthModal,
        closeAuthModal,
        loginWithGoogle,
        loginWithEmail,
        sendMobileOtp,
        verifyMobileOtp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
