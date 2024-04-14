import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Employer = () => {
  const [createNewJob, setNewCreateJob] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("employerToken");

  const createJob = async (data) => {
    console.log("JOB DATA", data);
    await axios
      .post("http://localhost:5500/create-job", data, {
        headers: {
          Authorization: `Baerer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return setNewCreateJob(!createNewJob);
      })
      .catch((error) => {
        return console.log(error);
      });
  };
  return (
    <div className="container py-3">
      <div className="row py-3">
        {createNewJob ? (
          <h3 className="text-center pb-3 text-success">job created successfully</h3>
        ) : (
          <form onSubmit={handleSubmit(createJob)}>
            <div className="row">
              <h3 className="text-center pb-3">Create a new job</h3>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  {...register("jobTitle", { required: true })}
                  className="form-control"
                  placeholder="Job Title"
                />
                {errors.jobTitle && (
                  <span className="text-danger">Job title is required</span>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  {...register("company", { required: true })}
                  className="form-control"
                  placeholder="Company Name"
                />
                {errors.company && (
                  <span className="text-danger">Company name is required</span>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  {...register("location", { required: true })}
                  className="form-control"
                  placeholder="Location"
                />
                {errors.location && (
                  <span className="text-danger">Location is required</span>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  {...register("jobType", { required: true })}
                  className="form-control"
                  placeholder="Job Type"
                />
                {errors.jobType && (
                  <span className="text-danger">Job type is required</span>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  {...register("industry", { required: true })}
                  className="form-control"
                  placeholder="Industry"
                />
                {errors.industry && (
                  <span className="text-danger">Industry is required</span>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  {...register("experienceRequired", { required: true })}
                  className="form-control"
                  placeholder="Experience Required"
                />
                {errors.experienceRequired && (
                  <span className="text-danger">Experience is required</span>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  {...register("educationRequired", { required: true })}
                  className="form-control"
                  placeholder="Education Required"
                />
                {errors.educationRequired && (
                  <span className="text-danger">Education is required</span>
                )}
              </div>
              <div className="col-md-12 mb-4">
                {/* <input
                      type="text"
                      {...register("companyDescription", { required: true })}
                      className="form-control"
                      placeholder="Company Description"
                    /> */}
                <textarea
                  {...register("companyDescription", { required: true })}
                  placeholder="Company Description"
                  cols="30"
                  rows="5"
                  className="form-control"
                ></textarea>
                {errors.companyDescription && (
                  <span className="text-danger">Company is required</span>
                )}
              </div>
              <div className="col-md-12 mb-4">
                {/* <input
                      type="text"
                      {...register("jobDescription", { required: true })}
                      className="form-control"
                      placeholder="Job Description"
                    /> */}
                <textarea
                  {...register("jobDescription", { required: true })}
                  placeholder="Job Description"
                  cols="30"
                  rows="5"
                  className="form-control"
                ></textarea>
                {errors.jobDescription && (
                  <span className="text-danger">
                    Job Description is required
                  </span>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 mb-4">
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block my-4"
                  >
                    Create Job
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Employer;
