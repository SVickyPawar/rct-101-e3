import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from '../pages/login.module.css'

const Login = () => {
    const [authLogin,setAuthLogin]=useState(false);

    const handleEnter=()=>{
      if(!authLogin){

        setAuthLogin(true);
      }else{
        setAuthLogin(false)
      }
    }
    console.log(authLogin);
  return (
    <div className={styles.login}>
      Login
      <input data-cy="login-email" placeholder="mail" />
      <input data-cy="login-password" placeholder="password" />
      <button onClick={handleEnter} data-cy="login-submit">Submit</button>
    </div>
  );
};

export default Login;
