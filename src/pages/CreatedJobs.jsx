import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const CreatedJobs = () => {

  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("employerToken");

  useEffect(() => {
    const fetchJobsOfEmployer = async () => {
      try {
        const response = await axios.get(`/get-job-of-employer`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data)
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    if (token) {
      fetchJobsOfEmployer();
    }
  }, [token]);
  return <div>CreatedJobs</div>;
};

export default CreatedJobs;
