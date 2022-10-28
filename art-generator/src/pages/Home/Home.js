import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import PaintingCarousel from '../../components/Painting/Painting';
import { useAuth } from '../../contexts/AuthContext'




var data = JSON.parse(localStorage.getItem("user"))
console.log("here");
console.log(data);
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PaintingCarousel />
    </div>
  )
}
export default Home