import Metaverse from '../../assets/icons8-metaverse-256.png'
import './AboutUs.css';

function AboutUs() {
  return (
    <div name="aboutus" id="about">
      <div class="container">
        <div class="left">
          <div class="leftup">
            Make the artworks alive.
          </div>
          <div class="leftdown">
            Get the instant and customised artwork generator, and our artwork price estimation and trade platform.
            <br></br>
            <br></br>
            Artnifcial is focusing on a better and better platform for electronic arts, and make it a better place for artists and electronic artwork lovers.

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