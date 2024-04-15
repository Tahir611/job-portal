import { jwtDecode } from 'jwt-decode';

const MyJobs = () => {
    const token = localStorage.getItem("candidateToken");
    if(token) {
      const deToken = jwtDecode(token && token);
    }
    // console.log(deToken);
  return (
    <div>MyJobs</div>
  )
}

export default MyJobs;