
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/candidte/Profile";
import MyJobs from "../pages/candidte/MyJobs";
import JobDetails from "../pages/JobDetails";
import CandidateLogin from "../pages/CandidateLogin";
import CandidateSignUp from "../pages/CandidateSignUp";
import EmployerSignUp from "../pages/EmployerSignUp";
import EmployerLogin from "../pages/EmployerLogin";
import CreatedJobs from "../pages/CreatedJobs";
import Employer from "../pages/Employer";

const AppRoutes = () => {
  
  return <>
    <NavBar/>
    
    <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/job-details/:jobId" element = {<JobDetails/> } />
        <Route path="/about" element = {<About/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/my-jobs" element = {<MyJobs/>}/>
        <Route path="/created-jobs" element = {<CreatedJobs/>}/>
        <Route path="/c-login" element = {<CandidateLogin/>}/>
        <Route path="/c-signup" element = {<CandidateSignUp/>}/>
        <Route path="/e-signup" element = {<EmployerSignUp/>}/>
        <Route path="/e-login" element = {<EmployerLogin/>}/>
        <Route path="/employer" element = {<Employer/>} />
    </Routes>
  </>
}

export default AppRoutes;