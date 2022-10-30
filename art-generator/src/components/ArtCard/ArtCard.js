import { useEffect, useRef, useState } from 'react'
  import { Button,Card } from 'react-bootstrap'
  import { useNavigate,Link } from "react-router-dom";

  import './ArtCard.css'

  function ArtCard(promps){
    const [artSrc, setSrc] = useState(promps.artSrc);
    const [artDes, setDes] = useState(promps.artDes);
    const [artId, setId] = useState(promps.artId);
    const nav = useNavigate();


    function handleDetail() {
      console.log("below is id");
      console.log(artId);
      nav(`/${artId}/review`)
    }
       return (
        <Card id="artworkItem">
          <Card.Img variant="top" src={artSrc} />
          <Card.Body>
            <Card.Text>
              {artDes}
            </Card.Text>
            <Button variant="primary" onClick={handleDetail}>Detail</Button>
          </Card.Body>
        </Card>
      );
  }

export default ArtCard