import Metaverse from '../../assets/icons8-metaverse-256.png'

import './AboutUs.css';

function AboutUs() {
  return (
    <div id="about">
      <div class="container">
        <div class="left">
          <div class="leftup">
            Make the artworks alive.
          </div>
          <div class="leftdown">
            Get the instant and customised artwork generator.
          </div>
        </div>
        <div class="right">
          <img src={Metaverse} alt="metaverse" class="metaverseImg"/>
        </div>
      </div>
    </div>
  )
}
export default AboutUs