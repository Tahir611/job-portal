import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../components/employee/Home";
import About from "../components/employee/About";
import Profile from "../components/employee/Profile";
import Settings from "../components/employee/Settings";
import Myjobs from "../components/employee/Myjobs";
import Login from "../components/Login";
import Employerr from "../components/employer/Employerr";

const AppRoutes = () => {
  return <>
    <NavBar/>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/my-jobs" element = {<Myjobs/>}/>
        <Route path="/settings" element = {<Settings/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/employer" element = {<Employerr/>}/>
    </Routes>
  </>
}

export default AppRoutes;