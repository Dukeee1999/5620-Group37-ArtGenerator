import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/NavBar/NavBar';
import StaryNight from '../../assets/stary-night.jpeg'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import NavbarLogin from "../../components/NavBar/NavBarLogin"
import NavbarReview from "../../components/NavBar/NavBarReview"
import ReviewCard from '../../components/reviewCard/reviewCard';
import './review.css'
import { getFirestore, collection, getDocs ,query,where} from 'firebase/firestore';
import {db,storage} from '../../firebase.config'
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'

 function Review() {
  const reviewCollection = [];
    const location = useLocation();
    const [review, setReview] = useState([]);


  const code = location.pathname.split("/")[1];
  useEffect(() => {
    console.log("start effect");

    const refresh = async () => {

      const userCol = query(collection(db, 'review'), where ('artwork', '==', `${code}`));

      const userSnapshot = await getDocs(userCol);
      const reviewList = userSnapshot.docs.map(doc => doc.data());
      setReview(reviewList);
      console.log(review);
      
      console.log("end of effect!")



      // const querySnapshot = await getDocs(collection(db, "review"));
      // // const userCol = query(collection(db, 'users'),where('uid', '==', auth.currentUser.uid));
      // const userSnapshot = await getDocs(querySnapshot);
      // querySnapshot.forEach((doc) => {
      //         var Review = new Object();
      //         if (doc.data()["artwork"] == code){
      //           Review.userName = doc.data()["username"];
      //           Review.review = doc.data()["review"];
      //           Review.rate = doc.data()["rate"];
      //           Review.price = doc.data()["price"];
      //         }
      //          reviewCollection.push(Review);
      //         //  console.log(reviewCollection.length);

      //       }
      // )
    }

  // const location = useLocation();
  //   async function refresh(e) {
  //     const querySnapshot = await getDocs(collection(db, "review"));
  //     await querySnapshot.forEach((doc) => {
  //       var Review = new Object();
  //       if (doc.data()["artwork"] == code){
  //         Review.userName = doc.data()["username"];
  //         Review.review = doc.data()["review"];
  //         Review.rate = doc.data()["rate"];
  //         Review.price = doc.data()["price"];
  //       }
  //        reviewCollection.push(Review);
  //     //   doc.data() is never undefined for query doc snapshots
  //       // console.log(doc.data()["price"]);
  //     //   // console.log(doc.id, " => ", doc.data());
  //     console.log("run the use effect");
  //     });
  //     await   refresh();

  // }

  refresh()
  .catch(console.error);
              //  console.log(reviewCollection.length);


   }, []);

  return (
    <div id="artwork-review">

  <NavbarReview />


  <div className="container">
  <img 
            src={StaryNight}
            alt=""
            className="img"
        />

  </div>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(#606FEF, #709dff)',
    flexDirection:'column',
    padding: '30px',
    maxWidth:'100%',
}}>

{
    review.length === 0 ? "No reviews found"
        : review.map((item) => (
      <ReviewCard username={item["username"]} comments={item["review"]} rating={item["rate"]} price={item["price"]}/>
    ))
                        }

{/* 
   
    <ReviewCard username="wzg"/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/> */}


</div>      

{/* <div className='reviewBoard' >

    
</div> */}
    </div>
  )
}
export default Review