import React, {useState} from "react";
import axios from "axios";

export const AuthContext = React.createContext();

// Probably won't use this (AuthContext and useContext instead)
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  //a null user is a user that is not logged in
  const [user, setUser] = useState(null);

  const handleRegister = async (user) => {
    //axios call to register users (interacting with DB)
    try {
    let res = await axios.post("api/auth", user);
    // console.log("res:", user);
    setUser(res.data.data);
    // navigate to a certain page

    } catch(err){
      console.log(err.response);
      alert("error occurred registering user")
    }
    //setUser
  };

  const handleLogin = async () => {
    //axios call to login users (interacting with DB)
    //setUser
    setUser ({ email: "some email"})
    console.log("handleLogin")
  };

  const handleLogout = async () => {
    //axios call to logout users (interacting with DB)
    setUser(null);
    console.log("handleLogout")
  };

  return (
    <AuthContext.Provider value = {{
      ...user, 
      handleRegister,
      handleLogin,
      handleLogout,
      setUser,
      authenticated: user !== null,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;