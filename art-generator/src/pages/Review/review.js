import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import StaryNight from '../../assets/stary-night.jpeg'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import NavbarLogin from "../../components/NavBar/NavBarLogin"
import NavbarReview from "../../components/NavBar/NavBarReview"
import ReviewCard from '../../components/reviewCard/reviewCard';
import './review.css'


function Review() {
  return (
    <div >
              <NavbarReview />


      <div className="container">
    <img 
                src={StaryNight}
                alt=""
                className="img"
            />

</div>
<body >
    
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(#606FEF, #709dff)',
    flexDirection:'column',
    padding: '30px',
    maxWidth:'100%',
}}>

    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>


</div>      

{/* <div className='reviewBoard' >

    
</div> */}


</body>


    </div>
  )
}
export default Review