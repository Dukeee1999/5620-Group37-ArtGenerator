import { useEffect, useRef, useState } from 'react'
import {
    getFirestore,
    query,
    getDoc,
    getDocs,
    collection,
    where,
    addDoc,
    updateDoc,
  } from "firebase/firestore";
  import { db,auth } from '../../firebase.config'
  import { Button,Card, Container, Row, Col } from 'react-bootstrap'
import { async } from '@firebase/util';
import ArtCard from './ArtCard';

  function AllArts(){
    const [artworks, setArtworks] = useState([]);
    useEffect(() => {
            
        const getAllArtworks = async () => {
           
          // const userCol = query(collection(db, 'users'),where('uid', '==', auth.currentUser.uid));
          // const userSnapshot = await getDocs(userCol);
          // const userList = userSnapshot.docs.map(doc => doc.data());
          // userList[0].artworkCollection.map((artwork) => {
          //   const artCol = query(collection(db, 'artworks'),where('id', '==', artwork));
          //   const artSnapshot = getDocs(artCol);
          //   artSnapshot.then((snapshot) => {
          //     const artList = snapshot.docs[0].data();
          //     setArtworks(artworks => [...artworks, artList]);
          //   })
          // })
          const artCol = collection(db, 'artworks');
          const artSnapshot = getDocs(artCol);
          const artList = artSnapshot.then((snapshot) => {
            const artList = snapshot.docs.map(doc => doc.data());
            return artList
          });
          artList.then((artList) => {
            console.log(artList);
            setArtworks(artList);

            console.log(artworks)
          })
        }
        // Call the async function.
        getAllArtworks()
          .catch(console.error);
  
       }, []);

       function handleClick(){
        console.log(artworks);
       }

       return (
       <Container>
        <h2>All Artworks</h2>
        <Row className="justify-content-md-center">
        {artworks && artworks.map((artwork) => <ArtCard artDes={artwork.prompt} artSrc={artwork.image[0]} artId = {artwork.id}/>)}
        </Row>
       </Container>
      );
  }

export default AllArts 
