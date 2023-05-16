import React, { Children, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseColors from '../../../Constant/color';
import ClientAccountDetailForm from '../../form/ClientAccountDetailForm';
import GradientButton from "../../Button/GradientButton"
import { useNavigate } from "react-router-dom";

function ClientAccountDetailModal({children}) {

  const Navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // () => Navigate('/client-account')
  };

  return (
    <>

      <text
        variant="primary" 
        onClick={handleShow}
        className="px-1"
        style={{
          fontSize: "15px",
          fontWeight: "500",
          color: baseColors.white,
        }}
      >
        Continue with Email
      </text>


      <Modal show={show} 
      onHide={handleClose} 
      size="lg">

        <Modal.Header closeButton>
          <Modal.Title>Account Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ClientAccountDetailForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={handleClose}
          >
            Close
          </Button>
          {children}
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClientAccountDetailModal;

