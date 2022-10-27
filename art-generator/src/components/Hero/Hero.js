import { useState } from "react";
import { Image } from "react-bootstrap";
import './HeroStyle.css'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Video from '../../assets/promo-video.mov'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function Hero() {
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: e.target.prompt.value,
        }),
      });
      let prediction = await response.json();
      if (response.status !== 201 && response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
      let id = prediction.prediction_id;
      while (
        prediction.status !== "succeeded" &&
        prediction.status !== "failed"
      ) {
        await sleep(1000);
        const getResponse = await fetch(`/api/predict/${id}`);
        prediction = await getResponse.json();
        if (getResponse.status !== 201 && getResponse.status !== 200) {
          setError(prediction.detail);
          return;
        }
        setPrediction(prediction);
        }
    };
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>You can become an artist</h1>
                <p>Free your mind and start creating</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <textarea type="textarea" placeholder='START DREAMING' name="prompt"/>
                    </div>
                    <div>
                     <AwesomeButton type="primary">Generate</AwesomeButton>
                    </div>
                </form>
                {error && <div>{error}</div>}
                {prediction && (
                    <div>
                        <p>{prediction.status}</p>
                        {prediction.output && (
                        <Image
                            src={prediction.output[prediction.output.length - 1]}
                            alt="output"
                            width={500}
                            height={500}
                        />
                        )}
                    </div>
                    )}
            </div>
        </div>
    )
}

export default Hero