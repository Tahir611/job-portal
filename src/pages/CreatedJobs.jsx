import axios from "axios";
import { useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const CreatedJobs = () => {
  const token = localStorage.getItem("employerToken");
  const deToken = jwtDecode(token);
    console.log(deToken);
    const fetchJobsOfEmployer = async () => {
        try {
          const response = await axios.get(`/get-job-of-employer`, {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the Authorization header
            },
          });
    
          console.log("Employer jobs", response.data); // Assuming the data is in response.data
        } catch (error) {
          console.log("ERROR", error);
        }
      };

  useEffect(() => {
    fetchJobsOfEmployer();
  }, [])
  return <div>CreatedJobs</div>;
};

export default CreatedJobs;
