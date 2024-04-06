import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const JobDetails = () => {
  const [jobDetail, setJobDetail] = useState({});
  const { register, handleSubmit } = useForm();
  const [isApplied, setIsApplied] = useState(false);
  const token = localStorage.getItem("candidateToken");
  console.log(token);
  const { state } = useLocation();
  console.log(state?.id);

  const getJobDetail = async () => {
    await axios
      .get(`http://localhost:5500/get-job/${state?.id}`)
      .then((response) => {
        console.log(response.data);
        setJobDetail(response.data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear();

    // Pad single-digit day and month with leading zeros if necessary
    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = String(month).padStart(2, "0");

    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const onSubmit = async (data) => {
    // Handle file submission here
    console.log(data.file[0].name); // Access uploaded file data
    // const formData = {resume :data.file[0].name};
    const formData = new FormData();
    formData.append("resume", data.file[0]);
    console.log(formData)
    await axios
      .post(
        `http://localhost:5500/apply-job/${jobDetail.job.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        }
      )
      .then((response) => {
        // setIsApplied(response.data)
        return console.log("JOB APPLIED RESPONSE", response);
      })
      .catch((e) => {
        return console.log("ERROR", e);
      });
  };

  useEffect(() => {
    getJobDetail();
  }, []);

  return (
    <>
      <h4 className="text-center pt-4">Job Details</h4>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 pt-5">
            {jobDetail?.messageType === "Success" && (
              <>
                <div className="d-flex justify-content-between">
                  <h5>Job Title: {jobDetail.job.jobTitle}</h5>
                  <p>Posted at: {formatDate(jobDetail.job.createdAt)}</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="pt-2 ps-2">{jobDetail.job.company} |</p>
                  <p className="pt-2 ps-2 text-muted">
                    {jobDetail.job.location}
                  </p>
                </div>
                <h5 className="pt-3">Company Description:</h5>
                <p className="pt-2 ps-5 text-muted">
                  {jobDetail.job.companyDescription}
                </p>
                <h5>JOb Description:</h5>
                <p className="pt-2 ps-5 text-muted">
                  {jobDetail.job.jobDescription}
                </p>
              </>
            )}
          </div>
          <div className="col-md-6 pt-5 h-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 border-1 p-3">
                <label htmlFor="fileInput" className="form-label fw-bold">
                  Upload your resume
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="fileInput"
                  {...register("file", { required: true })}
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
