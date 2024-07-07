import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem('authToken');
  });

  const [user, setUser] = useState(() => {
    return localStorage.getItem('user')
  });

  useEffect(() => {
    if (authToken && user) {
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('user', user);
    } 
    // else {
    //   localStorage.removeItem('authToken');
    //   localStorage.removeItem('currentUserRole');
    // }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user, authToken, setAuthToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
};
