import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { AuthProvider } from './contexts/AuthContext';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;