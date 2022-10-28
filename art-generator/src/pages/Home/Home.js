import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import PaintingCarousel from '../../components/Painting/Painting';
import AboutUs from '../../components/AboutUs/AboutUs';
import { useAuth } from '../../contexts/AuthContext'




function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PaintingCarousel />
      <AboutUs />
    </div>
  )
}
export default Home