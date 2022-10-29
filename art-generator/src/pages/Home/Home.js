import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import PaintingCarousel from '../../components/Painting/Painting';
import AboutUs from '../../components/AboutUs/AboutUs';
import ArtCard from '../../components/ArtCard/ArtCard';
import { useAuth } from '../../contexts/AuthContext'
import AllArts from '../../components/ArtCard/AllArts';




function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PaintingCarousel />
      <AllArts/>
      {/* <ArtCard/> */}
      <AboutUs />
    </div>
  )
}
export default Home