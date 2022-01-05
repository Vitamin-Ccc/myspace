import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const {handleRegister} = useContext(AuthContext);
  const [email, setEmail] = useState("testing@test.com")
  const [password, setPassword] = useState("123456")
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456")
  const handleSubmit = (e) => {
    // not using semantic, need to have this to prevent default
    e.preventDefault();
    if(password !== passwordConfirmation){
      //let user know these don't match
      alert("passwords do not match");
      // quit this function here
      return;
    }
    // console.log({ email, password });
    handleRegister({ email, password });
  }
  return (
    <div>
      <h1>Register</h1>
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
        <p>password confirmation</p>
        <input
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value)
          }} />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;