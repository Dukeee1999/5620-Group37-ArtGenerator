import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import StaryNight from '../../assets/stary-night.jpeg'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import NavbarLogin from "../../components/NavBar/NavBarLogin"
import NavbarSubmitReview from "../../components/NavBar/NavBarSubmitReview"
import ReviewCard from '../../components/reviewCard/reviewCard';
import './submitReview.css'
import { Stack, Row, Form, Button, Card, Alert, InputGroup } from "react-bootstrap"
import { AwesomeButton } from 'react-awesome-button';




 function handleSubmit(e) {

  }
function handleLogout() {
    // nav('/review')
    // window.prompt('请输入喜欢的内容')
  }
function SubmitReview() {
  return (


<div class ="columm">

    <div class = "row">
    <NavbarSubmitReview />
    </div>
    <div class = "row2">
    <div class="column">
    <img 
                src={StaryNight}
                alt=""
                className="img"
            />
        </div>
    <div class="columnReview">
    <div class = "reviewPanel">
    <div class = "row">
        <div class = "row">
        <h2>How you feel?</h2>

        <h3 className='textcolumn' >Comments on artwork</h3>
        <input type="text" placeholder="Enter your review" onblur="getVal()"/>

        <h3 className='textcolumn' >Rate on artwork</h3>
        <input id="rate" name="rate" type="text" class="form-control" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" placeholder="Enter your rate out of 100" />
        <h3 className='textcolumn' >Price on artwork</h3>
        <input id="Price" name="Price" type="text" class="form-control" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" placeholder="Enter your price" />
        <div className='bottoncontainer'></div>
        <AwesomeButton id = "review" type="secondary" onPress={SubmitReview}>Submit</AwesomeButton>

                <div className='bottoncontainer'></div>

        </div>

            </div>

    </div>        
        
        </div>

        </div>



              {/* <div class="row">
  <div class="column">xxxx</div>
  <div class="column">yyyyyy</div>
</div> */}

</div>
//     <div >
//               <NavbarSubmitReview />


//       <div className="container">
//     <img 
//                 src={StaryNight}
//                 alt=""
//                 className="img"
//             />
// </div>

//     </div>
  )
}
export default SubmitReview