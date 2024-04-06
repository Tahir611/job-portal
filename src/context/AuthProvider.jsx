import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [candidateLoggedIn, setCandidateLoggedIn] = useState(false);
  const [employerLoggedIn, setEmployerLoggedIn] = useState(false);

  const candidateLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5500/c-login', credentials);
      const token = response.data.response;
      localStorage.setItem('candidateToken', token);
      setCandidateLoggedIn(true);
    } catch (error) {
      console.error('Candidate login error:', error);
    }
  };

  const employerLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5500/e-login', credentials);
      console.log("RESPONSE",response)
      const token = response.data.response;
      console.log("TOKEN",token)
      localStorage.setItem('employerToken', token);
      setEmployerLoggedIn(true);
    } catch (error) {
      console.error('Employer login error:', error);
    }
  };

  const candidateLogout = () => {
    localStorage.removeItem('candidateToken');
    setCandidateLoggedIn(false);
  };

  const employerLogout = () => {
    localStorage.removeItem('employerToken');
    setEmployerLoggedIn(false);
  };

  // Check local storage for existing tokens on component mount
  useEffect(() => {
    const candidateToken = localStorage.getItem('candidateToken');
    const employerToken = localStorage.getItem('employerToken');
    if (candidateToken) {
      setCandidateLoggedIn(true);
    }
    if (employerToken) {
      setEmployerLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        candidateLoggedIn,
        employerLoggedIn,
        candidateLogin,
        employerLogin,
        candidateLogout,
        employerLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
