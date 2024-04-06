import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CandidateSignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data); // You can replace this with your API call to submit the form data
        await axios.post("http://localhost:5500/c-signup", data).then((response) => {
            console.log("SIGNUP RESPONSE",response);
        }).catch((e) => {
            return console.log("ERROR",e);
        })
      };

      const hanldeNavigate = () => {
        navigate("/c-login");
      }
  return (
    <>
      {/* Section: Design Block */}
      <section className="">
        {/* Jumbotron */}
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h4 className="text-center pb-4">Signup Here</h4>
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit(onSubmit)}> 
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              {...register("name", { required: true })}
                              className='form-control'
                              placeholder='Enter Name'
                            />
                            {errors.name && <span className='text-danger'>Name is required</span>}
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example1"
                            >
                              Name
                            </label> */}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              {...register("userName", { required: true })}
                              className='form-control'
                              placeholder='Enter User Name'
                            />
                            {errors.userName && (
                              <span className='text-danger'>Username is required</span>
                            )}
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              User Name
                            </label> */}
                          </div>
                        </div>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          {...register("email", { required: true })}
                          className='form-control'
                          placeholder='Enter Email'
                        />
                        {errors.email && <span className='text-danger'>Email is required</span>}
                        {/* <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label> */}
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          {...register("password", { required: true })}
                          className='form-control'
                          placeholder='Enter Password'
                        />
                        {errors.password && <span className='text-danger'>Password is required</span>}
                        {/* <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label> */}
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
                    </form>
                    <div className='d-flex justify-content-center gap-4'>
                        <h6 className='mt-2'>Already signed up </h6> 
                        <button onClick={hanldeNavigate} className='btn px-5 btn-primary'>Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  );
};

export default CandidateSignUp;
