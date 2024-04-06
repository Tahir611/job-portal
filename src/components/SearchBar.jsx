// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// const SearchBar = ({ searchedJobs, setSearchedJobs }) => {
//   const { register, handleSubmit } = useForm();

//   const fetchJobs = async () => {
//     try {
//       const response = await axios.get("http://localhost:5500/get-all-jobs");
//       setSearchedJobs(response.data.jobs);
//     } catch (error) {
//       console.log("ERROR", error);
//     }
//   };

//   const onSubmit = (data) => {
//     const inputValue = data.search.toLowerCase();
//     const filteredJobs = searchedJobs.filter((job) => {
//       const jobTitle = job.jobTitle.toLowerCase();
//       const company = job.company.toLowerCase();
//       const industry = job.industry.toLowerCase();
//       const location = job.location.toLowerCase();

//       return (
//         jobTitle.includes(inputValue) ||
//         company.includes(inputValue) ||
//         industry.includes(inputValue) ||
//         location.includes(inputValue)
//       );
//     });
//     setSearchedJobs(filteredJobs);
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row justify-content-center py-4">
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 className="form-control py-3"
//                 placeholder="Job title, keywords or company"
//                 aria-label="Job title, keywords or company"
//                 aria-describedby="button-addon2"
//                 {...register("search")}
//               />
//               <button
//                 className="btn btn-primary"
//                 type="submit"
//                 id="button-addon2"
//               >
//                 Find Jobs
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SearchBar = ({ searchedJobs, setSearchedJobs }) => {
  const { register, handleSubmit, reset } = useForm();

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5500/get-all-jobs");
      setSearchedJobs(response.data.jobs);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const onSubmit = (data) => {
    const inputValue = data.search.toLowerCase();
    if (inputValue.trim() !== "") {
      // Search input is not empty, filter jobs based on search criteria
      const filteredJobs = searchedJobs.filter((job) => {
        const jobTitle = job.jobTitle.toLowerCase();
        const company = job.company.toLowerCase();
        const industry = job.industry.toLowerCase();
        const location = job.location.toLowerCase();

        return (
          jobTitle.includes(inputValue) ||
          company.includes(inputValue) ||
          industry.includes(inputValue) ||
          location.includes(inputValue)
        );
      });
      setSearchedJobs(filteredJobs);
    } else {
      // Search input is empty, fetch all jobs again
      fetchJobs();
      // reset(); // Reset the form to clear the input field
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center py-4">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control py-3"
                placeholder="Job title, keywords or company"
                aria-label="Job title, keywords or company"
                aria-describedby="button-addon2"
                {...register("search")}
              />
              <button
                className="btn btn-primary"
                type="submit"
                id="button-addon2"
              >
                Find Jobs
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
