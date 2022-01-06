import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const {handleLogin} = useContext(AuthContext);
  const [email, setEmail] = useState("hello@gmail.com")
  const [password, setPassword] = useState("857392")
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }, navigate);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <p>password</p>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;