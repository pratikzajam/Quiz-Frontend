import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);

      localStorage.setItem('user', JSON.stringify(decoded)); 
      localStorage.setItem('token', token);

      return true;
    } catch (error) {
      console.error('JWT decode failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

 
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        setUser(decoded);
      } catch (error) {
        console.error('Token invalid or expired:', error);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
