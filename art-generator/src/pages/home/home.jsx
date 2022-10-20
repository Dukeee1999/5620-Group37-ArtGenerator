import "./home.css";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";

const Home = () => {
  return (

    <div>
      <Navbar/>
      <Header/>

      <h1 className="popularTitle">
        Popular Artwork
      </h1>
      <div className="homeContainer">
      </div>
    </div>
  );
};

export default Home;