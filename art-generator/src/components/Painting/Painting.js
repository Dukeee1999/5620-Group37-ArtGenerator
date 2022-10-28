import React,{useState, useEffect} from 'react'
import './PaintingStyle.css'

import { Carousel } from 'react-carousel-minimal';

import StaryNight from '../../assets/stary-night.jpeg'
import Japan from '../../assets/japan.jpeg'
import CountrySide from '../../assets/country-side.jpeg'

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  const data = [
    {
      image: StaryNight,
      caption: "Sary Night (1890)",
    },
    {
      image: Japan,
      caption: "Thirty-Six Views of Mount Fuji (1831)"
    },
    {
      image: CountrySide,
      caption: "A Landscape with a Farm by a Stream (1661)"
    },
  ];

function PaintingCarousel() {
    return (
    <div name='carousel' className='container'>
        <h2>Famous Arts</h2>
                   <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
            />
        </div>
    )
}

export default PaintingCarousel