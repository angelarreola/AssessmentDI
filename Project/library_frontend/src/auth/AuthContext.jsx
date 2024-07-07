import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem('authToken');
  });

  const [user, setUser] = useState(() => {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null; // Parsear JSON string
  });

  useEffect(() => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    } 
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [authToken, user]);

  return (
    <AuthContext.Provider value={{ user, authToken, setAuthToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
};
