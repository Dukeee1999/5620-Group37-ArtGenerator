import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import PaintingCarousel from '../../components/Painting/Painting';

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