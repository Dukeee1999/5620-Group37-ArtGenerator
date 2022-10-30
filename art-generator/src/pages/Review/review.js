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
    const [Pic, setPic]  = useState([]);



  const code = location.pathname.split("/")[1];

  useEffect(() => {
    console.log("start effect");

    const refresh = async () => {

      const userCol = query(collection(db, 'review'), where ('artwork', '==', `${code}`));
      const imgUrl = query(collection(db, 'artworks'), where ('id', '==', `${code}`));
      
      const userSnapshot = await getDocs(userCol);
      const artworkSnapshot = await getDocs(imgUrl);

      const reviewList = userSnapshot.docs.map(doc => doc.data());
      // const url = artworkSnapshot.docs.map(doc => doc.data());

      setReview(reviewList);
      // setUrl(url);

      setPic (artworkSnapshot.docs.map(doc => doc.data())[0].image[0])
      // setPic(Url[0].image[0])


      console.log(Pic)

      console.log("end of effect!")
    }

  refresh()
  .catch(console.error);

   }, []);

  return (
    <div >
              <NavbarReview />


      <div className="container">
    <img 
                src={Pic}
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


</body>


    </div>
  )
}
export default Review