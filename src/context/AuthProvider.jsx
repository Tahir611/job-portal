import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [candidateLoggedIn, setCandidateLoggedIn] = useState(false);
  const [employerLoggedIn, setEmployerLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const candidateLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5500/c-login', credentials);
      const token = response.data.response;
      localStorage.setItem('candidateToken', token);
      setCandidateLoggedIn(true);
      if(response.data.messageType === "Success") {
        return navigate("/")
      }
    } catch (error) {
      console.error('Candidate login error:', error);
    }
  };

  const employerLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5500/e-login', credentials);
      console.log("RESPONSE",response)
      const token = response.data.response;
      setRole(response.data.role);
      // console.log("TOKEN",token)
      localStorage.setItem('employerToken', token);
      setEmployerLoggedIn(true);
      if(response.data.messageType === "Success") {
        return navigate("/created-jobs")
      }
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

  setTimeout(() => {
    localStorage.removeItem("candidateToken");
    localStorage.removeItem("employerToken");
  }, 2700000);

  return (
    <AuthContext.Provider
      value={{
        candidateLoggedIn,
        employerLoggedIn,
        candidateLogin,
        employerLogin,
        candidateLogout,
        employerLogout,
        role
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
