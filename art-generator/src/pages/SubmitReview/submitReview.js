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
import { useEffect, useRef, useState } from 'react'

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

 function SubmitReview() {
  const { currentUser } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const code = location.pathname.split("/")[1];
  const [Pic, setPic]  = useState([]);
  const [User, setUser] = useState([]);

  useEffect(() => {
    const getImg = async () => {
      const imgUrl = query(collection(db, 'artworks'), where ('id', '==', `${code}`));

      const artworkSnapshot = await getDocs(imgUrl);
      setPic (artworkSnapshot.docs.map(doc => doc.data())[0].image[0])


      const User = query(collection(db, 'users'), where ('uid', '==', `${currentUser.uid}`));
      const userSnapshot = await getDocs(User);
      console.log("below is checker")
      
      console.log(userSnapshot.docs.map(doc=>doc.data())[0].role === "artist")
      if (userSnapshot.docs.map(doc=>doc.data())[0].role === "artist") {
        setUser(false);
      } else {
        setUser(true);

      }
      // setUser(userSnapshot.docs.map(doc=>doc.data())[0].role)

    }

    getImg();


  })

function isNumber(str) {
  return /^[0-9]+$/.test(str);
}

async function handleSubmit(e) {
  var review = document.getElementById("review").value
  var rate = document.getElementById("rate").value
  var price = document.getElementById("price").value
  
  if (!review) {
    window.alert("INVALID REVIEW");
  } else if (!isNumber(rate) || rate > 100 || rate < 0) {
    window.alert("INVALID RATE INPUT: RATE MUST BE IN THE RANGE OF 0-100");

  } else if (!User && (!isNumber(price) || price < 0)) {
    window.alert("INVALID PRICE INPUT");
  } else {
    if (!User) {
      try {
        await addDoc(collection(db, 'review'), {
          uid: currentUser.uid,
          username: currentUser.email,
          review: review,
          rate: parseInt(rate),
          price: parseInt(price),
          artwork: code,
        }
        
        );
  
        nav(`/${code}/review`)
      } catch {
        window.alert("Failed to submit the review")
      }
    } else {
      try {
        await addDoc(collection(db, 'review'), {
          uid: currentUser.uid,
          username: currentUser.email,
          review: review,
          rate: parseInt(rate),
          artwork: code,
          price: "NaN"
        }
        
        );
  
        nav(`/${code}/review`)
      } catch {
        window.alert("Failed to submit the review")
      }
    }
    
  }

 

  }

    return(

<div class ="columm">


    <div class = "row">
    <NavbarSubmitReview />
    </div>
    <div class = "row2">
    <div class="column">
    <img 
                src={Pic}
                alt=""
                className="img"
            />
        </div>
    <div class="columnReview">
    <div class = "reviewPanel">
    <div class = "row">
        <div id="panel" class = "row">
        <h2>How do you feel?</h2>

        <h3 className='textcolumn' >Comments on artwork</h3>
        <textarea id="review" rows="6" placeholder="Enter your review" onblur="getVal()" />

        <h3 className='textcolumn' >Rate on artwork (out of 100)</h3>
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
// <input id = "review" type="text" placeholder="Enter your review" onblur="getVal()"/>
//     <div >
//               <NavbarSubmitReview />
    );

}
export default SubmitReview