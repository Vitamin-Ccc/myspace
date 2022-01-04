import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(auth)}
      <p onClick = {auth.handleLogin}>Login</p>
      <p onClick = {auth.handleLogout}>Logout</p>
    </div>
  )
}

export default Home;