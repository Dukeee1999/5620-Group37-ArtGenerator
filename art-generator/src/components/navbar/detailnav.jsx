import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import React from "react";
import { useLocation } from "react-router-dom";
const DetailsNav = () => {
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">CREATOR</span>
        </Link>
        {user ? (
          <div className="navItems">
            {user.email}
            <button className="navButton" onClick={handleClick} >Logout</button>
            {user.userType === "admin" ? (
                <Link to="/admin" style={{ color: "inherit", textDecoration: "none" }}>
                  <button className="navButton">Admin</button>
                </Link>) : null
              }
          </div>
        )
          : (
            <div className="navItems">
            <button className="navButton" onClick={handleClick} >Share</button>
            <button className="navButton" onClick={handleClick} >Upload</button>
            <button className="navButton" onClick={handleClick} >3D View</button>


              {/* <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
                <button className="navButton">Share</button>
              </Link>
              <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                <button className="navButton">Login</button>
              </Link> */}

      
              
            </div>
          )}
      </div>
    </div >
  );
};

export default DetailsNav;