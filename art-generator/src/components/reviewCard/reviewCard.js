import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import StaryNight from '../../assets/stary-night.jpeg'
import Artist from '../../assets/artist.png'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import NavbarLogin from "../../components/NavBar/NavBarLogin"
import NavbarReview from "../../components/NavBar/NavBarReview"
import './reviewCard.css'


console.log(localStorage.getItem("user"));
function ReviewCard() {
  return (
    <div className="reviewItem">
        <div id="innerContainer">
    <div className="riAvart">
        <div className="avatar">
        <img src={Artist}alt="Avatar" class="avatar"/>
            <div className="userName">Zihengwang</div>
        </div>
    </div>
    <div className='riContext'>
        <span className="riInfo">Wonderful work I love it 
        </span>
    </div>
    <div className="riDetail">
        <div className="riRating">
            <span> Rating</span>
            <button>100/100</button>
        </div>
        <div className="riRating">
            <span>Price</span>
            <button>$1000</button>
        </div>
        </div>
    </div>
</div>
    


    
    
//     <div className="reviewItem">
//         <div className='riAvart'>
//             <div className='avatar'>
            // <img src={StaryNight}alt="Avatar" class="avatar"/>
//             <div className="userName">Username</div>

//             </div>

//         </div>
// </div>



  )
}
export default ReviewCard