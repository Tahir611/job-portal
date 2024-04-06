import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
// import Settings from "../components/employee/Settings";
import Profile from "../pages/candidte/Profile";
import Login from "../components/Login";
import Employerr from "../components/employer/Employerr";
// import SearchBar from "../components/SearchBar";
import MyJobs from "../pages/candidte/MyJobs";
import JobDetails from "../pages/JobDetails";
import CandidateLogin from "../pages/CandidateLogin";
import CandidateSignUp from "../pages/CandidateSignUp";
import EmployerSignUp from "../pages/EmployerSignUp";
import EmployerLogin from "../pages/EmployerLogin";


const AppRoutes = () => {
  
  return <>
    <NavBar/>
    
    <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/job-details/:jobId" element = {<JobDetails/> } />
        <Route path="/about" element = {<About/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/my-jobs" element = {<MyJobs/>}/>
        {/* <Route path="/settings" element = {<Settings/>}/> */}
        {/* <Route path="/login" element = {<Login/>}/> */}
        <Route path="/c-login" element = {<CandidateLogin/>}/>
        <Route path="/c-signup" element = {<CandidateSignUp/>}/>
        <Route path="/e-signup" element = {<EmployerSignUp/>}/>
        <Route path="/e-login" element = {<EmployerLogin/>}/>
        <Route path="/employer" element = {<Employerr/>}/>
    </Routes>
  </>
}

export default AppRoutes;