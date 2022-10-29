import { useEffect, useRef, useState } from 'react'
  import { Button,Card } from 'react-bootstrap'

  function ArtCard(promps){
    const [artSrc, setSrc] = useState(promps.artSrc);
    const [artDes, setDes] = useState(promps.artDes);

       return (
        <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src={artSrc} />
          <Card.Body>
            <Card.Text>
              {artDes}
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      );
  }

export default ArtCard