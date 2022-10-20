// import axios from "axios";
import {React, useRef, useState, useEffect,useContext} from 'react';

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./signup.css";
import Navbar from "../../components/navbar/navbar";

// import useFetch from "../../components/hooks/useFetch";

// import Navbar from "../../components/navbar/registerNav";

const Signup = () => {
  const [credentials, setCredentials] = useState({
//     email: undefined,
//     userName: undefined,
    studentType: "student",
//     password: undefined,
//     courseCode: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
//   const { data, courseLoading, courseError } = useFetch(
    // "/course/all"
//   );

  const navigate = useNavigate()

  const handleChange = (e) => {
    // setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRoleChange = (e) => {
    // setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // if (e.target.value === "staff") {
    //   setCredentials((prev) => ({ ...prev, courseCode: data[0].courseCode }));
    // }
  };

  const handleClick = async (e) => {
    var emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordValid = /^[a-zA-Z0-9]+$/i;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userName = document.getElementById("userName").value;
    if (email.length === 0 || password.length === 0 || userName.length === 0) {
      alert("Empty Email, Password or Username");
      return;
    }
    else if (!email.match(emailValid)) {
      alert("Invalid email");
      return;
    }
    else if (password.length < 8 || password.length > 20) {
      alert("Password length should be between 8 and 20");
      return;
    } else if (!password.match(passwordValid)) {
      alert("Password should contain only alphanumeric characters and letters");
      return;
    } else if (!userName.match(passwordValid)) {
      alert("Username should contain only alphanumeric characters and letters");
      return;
    }
    e.preventDefault();

  };

  return (
    <div className="lContainer">
      <Navbar/>

      <div className="signup">
        <div className="lContainer">
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="userName"
            id="userName"
            onChange={handleChange}
            className="lInput"
          />
          <form>
            Select your type:
            <select id="usertype" onChange={handleRoleChange}>
              <option value="user" >Individual</option>
              <option value="artist">Artist</option>
            </select>
          </form>
          {/* {credentials.studentType === "staff" &&
            <select id="courseCode" onChange={handleChange}>
              {data.map((course) => {
                return <option value={course.courseCode}>{course.courseCode}</option>
              },)}
            </select>
          } */}
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Signup
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Signup;