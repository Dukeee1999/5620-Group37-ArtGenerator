import {
    faBook,
    faSchool,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import { useContext, useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";

//   import axios from "axios";
  import React from "react";
  
  
  const Header = ({ type }) => {
  
    const [courses, setCourses] = useState({
      university: undefined,
      course: '',
    });
  
    const navigate = useNavigate();
    // const { user } = useContext(AuthContext);
    // const { loading, error, dispatch } = useContext(SearchContext);
  
    const handleChange = (e) => {
      setCourses((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleSigninClick = (e) => {
  
      navigate(`/`)
    };
    const handleSearch = async (e) => {
    //   var universityName = document.getElementById("university").value;
    //   if(universityName.length ==0||universityName.includes("@") || universityName.includes("/") ||universityName.length <=2 || universityName.includes(".")){
    //     alert("Please enter a valid university name");
    //   }
  
  
  
  
    //   e.preventDefault();
    //   dispatch({ type: "SEARCH_START" });
    //   try {
    //     const res = await axios.post("/course/search", null, { params: { uniName: courses.university, courseCode: courses.course } });
    //     dispatch({ type: "SEARCH_SUCCESS", payload: res.data });
    //     navigate("/courses", { state: res.data });
    //   } catch (err) {
    //     dispatch({ type: "SEARCH_FAILURE", payload: err.response.data });
    //   }
    };
  
    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                You can become an artist 
              </h1>
              <p className="headerDesc">
                Free your mind and start creating
              </p>
              {/* {!user && <button className="headerBtn" onClick={handleSigninClick}>Sign in / Register</button>  } */}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faSchool} className="headerIcon" />
                  <input
                    id="university"
                    type="text"
                    placeholder="Entering your discriptions"
                    className="headerSearchInput"
                    onChange={handleChange}
                    style={{width: "900px"}}
                  />
                </div>

                <div className="headerSearchItem">
                  <button  className="headerBtn" onClick={handleSearch}>
                    Generate
                  </button>
                  {/* {error && <span>{error.message}</span>} */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;