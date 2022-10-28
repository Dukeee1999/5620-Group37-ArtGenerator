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
import Gallery from './components/Gallery/Gallery';
import Review from "./pages/Review/review";
import SubmitReview from './pages/SubmitReview/submitReview';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/:artCode/review" element={<Review/>}/>
          <Route path="/:artCode/submitreview" element={<SubmitReview/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;