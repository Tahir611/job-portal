import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchedJobs, setSearchedJobs] = useState([]);
  const [jobDetail, setJobDetail] = useState({});
  const [isJob, setIsjob] = useState(false);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5500/get-all-jobs");
      setJobs(response.data.jobs);
      setSearchedJobs(response.data.jobs);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const showJobDetail = (id) => {
    setJobDetail(searchedJobs[id]);
    setIsjob(true);
  };

  const handleApply = async (jobId) => {
    navigate(`/job-details/${jobId}`, { state: { id: jobId } });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <SearchBar searchedJobs={searchedJobs} setSearchedJobs={setSearchedJobs} />
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-md-4">
            {searchedJobs ? (
              searchedJobs.length !== 0 ? (
                searchedJobs.map((job, i) => {
                  return (
                    <div
                      onClick={() => showJobDetail(i)}
                      key={i}
                      className="border-1 py-3 px-3 my-3 cursor"
                    >
                      <h3>{job.jobTitle}</h3>
                      <p className="pt-2 ps-2 text-muted">{job.company}</p>
                      <p className="line-h pb-2 ps-2 text-muted">
                        {job.location}
                      </p>
                      <h6>Requirements:</h6>
                      <ul>
                        <li>{job.educationRequired}</li>
                        <li>{job.experienceRequired}</li>
                      </ul>
                      <h6>Responsibilities:</h6>
                      <ul>
                        <li>{job.jobDescription}</li>
                      </ul>
                    </div>
                  );
                })
              ) : (
                <h5 className="text-center">
                  No jobs found for the given search criteria.
                </h5>
              )
            ) : (
              <h3>Loading...</h3>
            )}
          </div>
          <div className="col-md-5">
            <div className={`${!isJob && "border-top"}`}>
              <div className={`${isJob && "border-1 vh p-3"}`}>
                <h3>{jobDetail?.jobTitle}</h3>
                <p className="pt-2 ps-2 text-muted">{jobDetail?.company}</p>
                <p className="line-h pb-2 ps-2 text-muted">
                  {jobDetail?.location}
                </p>
                {isJob && (
                  <button className="btn btn-primary" onClick={() => handleApply(jobDetail?.id)}>Apply Now</button>
                )}

                <div className="job-detail-box mt-4 py-3 border-top">
                  <h6>Requirements:</h6>
                  <ul>
                    <li>{jobDetail?.educationRequired}</li>
                    <li>{jobDetail?.experienceRequired}</li>
                  </ul>
                  <h6>Responsibilities:</h6>
                  <ul>
                    <li>{jobDetail?.jobDescription}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
