import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(auth)}
      <Link to ="/protected">Protected</Link>
      <Link to ="/public">Public</Link>
      <p onClick = {()=>navigate('/public')}>navigate to public</p>
    </div>
  )
}

export default Home;