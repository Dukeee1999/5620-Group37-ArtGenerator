import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/home";
import Signup from './pages/signup/signup';
import Login from './pages/login/login';

import React, { Component }  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
