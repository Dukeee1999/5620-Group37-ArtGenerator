import React from 'react'
import './HeroStyle.css'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Video from '../../assets/promo-video.mov'

function Hero() {
    return (
        <div className='hero'>
                        <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>You can become an artist</h1>
                <p>Free your mind and start creating</p>
                <form className="form">
                    <div>
                        <textarea type="textarea" placeholder='START DREAMING' />
                    </div>
                    <div>
                     <AwesomeButton type="primary">Generate</AwesomeButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero