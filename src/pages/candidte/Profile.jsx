import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("candidateToken");
  const deToken = token && jwtDecode( token);
  console.log(deToken)

  const fetchProfileData = async () => {
    await axios.get(`http://localhost:5500/get-candidate/${deToken?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data);
      return setProfile(response.data.candidate);
    }).catch((error) => {
      return console.log(error);
    })
  };

  const handleClick = () => {
    navigate("/e-login");
  }

  useEffect(() => {
    fetchProfileData();
  },[])
  return (
    <div className="container py-3">
      <div className="row py-3 justify-content-center">
        {token ? <> <div className="col-md-5 ">
          <h5 className="ps-4 mt-4">Name:</h5>
          <p className="border-1 p-3 m-1">{profile?.name}</p>
        </div>
        <div className="col-md-5 ">
          <h5 className="ps-4 mt-4">User Name</h5>
          <p className="border-1 p-3 m-1">{profile?.userName}</p>
        </div>
        <div className="col-md-5 ">
          <h5 className="ps-4 mt-4">Email</h5>
          <p className="border-1 p-3 m-1">{profile?.email}</p>
        </div> </> : <>
        <p className="text-center text-danger">Your token has expired. Please login again</p>
        <div className="col-md-3 text-center">
        <button className="btn btn-primary" onClick={handleClick}>Login as employer</button>
        </div>
        </>}
      </div>
    </div>
  )
}

export default Profile;