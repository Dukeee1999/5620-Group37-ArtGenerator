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
import {db} from '../../firebase.config'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

 function SubmitReview() {
  const { currentUser, logout } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const code = location.pathname.split("/")[1];



async function handleSubmit(e) {
  var review = document.getElementById("review").value
  var rate = document.getElementById("rate").value
  var price = document.getElementById("price").value

  if (review.length==0 || rate.length==0 || price.length==0){
    window.alert("INVALID INPUT");
  }else if(rate > 100 || rate<0){
    window.alert("INVALID RATE INPUT");

  }else if (price<0){
    window.alert("INVALID PRICE INPUT");

  }else{
    try {
      console.log(currentUser);
     
      await addDoc(collection(db, 'review'), {
        uid: currentUser.uid,
        username: currentUser.email,
        review: review,
        rate:rate,
        price: price,
        artwork: code,
      }
      
      );

      nav(`/${code}/review`)
    } catch {
      window.alert("Failed to submit the review")
    }
  }

 

  }
function handleLogout() {
    // nav('/review')
    // window.prompt('请输入喜欢的内容')
  }
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
        <input id = "review" type="text" placeholder="Enter your review" onblur="getVal()"/>

        <h3 className='textcolumn' >Rate on artwork</h3>
        <input id="rate" name="rate" type="text" class="form-control" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" placeholder="Enter your rate out of 100" />
        <h3 className='textcolumn' >Price on artwork</h3>
        <input id="price" name="price" type="text" class="form-control" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" placeholder="Enter your price" />
        <div className='bottoncontainer'></div>
        <AwesomeButton id = "review" type="secondary" onPress={handleSubmit}>Submit</AwesomeButton>

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