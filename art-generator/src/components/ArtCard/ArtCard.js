import { useEffect, useRef, useState } from 'react'
  import { Button,Card } from 'react-bootstrap'

  function ArtCard(prompt){

       return (
        <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src="https://replicate.delivery/pbxt/CKOBe5uFuI1AdqzjRfDBh3CTgSqCERfQTrvhHILyQVkhEs0fA/out-0.png" />
          <Card.Body>
            <Card.Text>
              description
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      );
  }

export default ArtCard