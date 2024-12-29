import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthKeys } from '../libs/constants';

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    email: string;
    given_name: string;
    family_name: string;
    access_token: string;
  } | null;
  login: (tokens: {
    access_token: string;
    refresh_token: string;
    expiry: number;
    email: string;
    given_name: string;
    family_name: string;
  }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthContextType['user']>(null);

  useEffect(() => {
    // Check authentication on initial load
    const checkAuth = () => {
      const accessToken = localStorage.getItem(AuthKeys.ACCESS_TOKEN);
      const email = localStorage.getItem(AuthKeys.USER_EMAIL);
      const givenName = localStorage.getItem(AuthKeys.GIVEN_NAME);
      const familyName = localStorage.getItem(AuthKeys.FAMILY_NAME);
      const expiry = localStorage.getItem(AuthKeys.EXPIRY);

      if (accessToken && email && expiry) {
        const expiryTime = parseInt(expiry);
        if (expiryTime > Date.now()) {
          setIsAuthenticated(true);
          setUser({
            email,
            given_name: givenName!,
            family_name: familyName!,
            access_token: accessToken!,
          });
        } else {
          logout();
        }
      }
    };

    checkAuth();
  }, []);

  const login = ({
    access_token,
    refresh_token,
    expiry,
    email,
    given_name,
    family_name,
  }: {
    access_token: string;
    refresh_token: string;
    expiry: number;
    email: string;
    given_name: string;
    family_name: string;
  }) => {
    // Store tokens and user info in local storage
    localStorage.setItem(AuthKeys.ACCESS_TOKEN, access_token);
    localStorage.setItem(AuthKeys.REFRESH_TOKEN, refresh_token);
    localStorage.setItem(AuthKeys.EXPIRY, expiry.toString());
    localStorage.setItem(AuthKeys.USER_EMAIL, email);
    localStorage.setItem(AuthKeys.GIVEN_NAME, given_name);
    localStorage.setItem(AuthKeys.FAMILY_NAME, family_name);

    // Update authentication state
    setIsAuthenticated(true);
    setUser({ email, given_name, family_name, access_token });
  };

  const logout = () => {
    // Clear local storage
    localStorage.removeItem(AuthKeys.ACCESS_TOKEN);
    localStorage.removeItem(AuthKeys.REFRESH_TOKEN);
    localStorage.removeItem(AuthKeys.EXPIRY);
    localStorage.removeItem(AuthKeys.USER_EMAIL);
    localStorage.removeItem(AuthKeys.GIVEN_NAME);
    localStorage.removeItem(AuthKeys.FAMILY_NAME);

    // Reset authentication state
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
