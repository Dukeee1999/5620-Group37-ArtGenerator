import React, { useState } from 'react';
import { Button, Modal, Image, Container, Row, Col } from "react-bootstrap";
import "./GenedArt.css"

function GenedArt(props) {
  const [show, setShow] = useState(props.show);
  const [art, setArt] = useState(props.art);
  const [description, setDescription] = useState(props.description);
//   const [status, setStatus] = useState(props.status)
  const handleClose = () => setShow(false);



//   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        ClassName="artModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Artwork!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
            <Row>
                <Image
                src={art}
                width={500}
                height={500}  
                />
            </Row>
        </Container>
        {description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          {/* <Button variant="secondary"> */}
            Save
          </Button>
          <Button variant="primary">Detail</Button>
          <Button variant="primary">Share</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default GenedArt