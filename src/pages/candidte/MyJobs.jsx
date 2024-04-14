import { jwtDecode } from 'jwt-decode';

const MyJobs = () => {
    const token = localStorage.getItem("candidateToken");
    const deToken = jwtDecode(token);
    console.log(deToken);
  return (
    <div>MyJobs</div>
  )
}

export default MyJobs;