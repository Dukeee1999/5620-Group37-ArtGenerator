import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import React, { Component } from 'react';
import Navbar from "../../components/navbar/navbar";

const Login = () => {
//   const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()
  
  const handleChange = (e) => {
  };

  const handleClick = async (e) => {

    // var emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // var passwordValid = /^[a-zA-Z0-9]+$/i;
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    // if (email.length === 0 || password.length === 0) {
    //   alert("Empty Email or Password");
    //   return;
    // }
    // else if (!email.match(emailValid)) {
    //   alert("Invalid email");
    //   return;
    // }
    // else if (password.length < 8 || password.length > 20) {
    //   alert("Password length should be between 8 and 20");
    //   return;
    // } else if (!password.match(passwordValid)) {
    //   alert("Password should contain only alphanumeric characters and letters");
    //   return;

    // }
    // e.preventDefault();
    // console.log(email)

  };

  return (
    <div className="lContainer">
        <Navbar/>
      <div className="login">

        <div className="lContainer">
    
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button  onClick={handleClick} className="lButton">
            Login
          </button>
          {/* {error && <span>{error.message}</span>} */}
        </div>
      </div>
    </div>

  );
};

export default Login;