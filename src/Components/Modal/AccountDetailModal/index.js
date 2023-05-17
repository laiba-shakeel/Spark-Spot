import React, { Children, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseColors from '../../../Constant/color';
import AccountDetailForm from '../../form/AccountDetailForm';
import GradientButton from "../../Button/GradientButton"
import { useNavigate } from "react-router-dom";

function AccountDetailModal({children}) {

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
      size="xl"
      style={{border:"2px solid red"}}
      >

        <Modal.Header className='py-0' closeButton style={{border:"2px solid red"}} >
          <Modal.Title className='p-0'>Account Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <AccountDetailForm />
        </Modal.Body>
        <Modal.Footer className='py-0'>
          <div onClick={handleClose}>
        <GradientButton 
            variant="primary"
            title=" Close"
            color={baseColors.white}
            backgroundColor1={baseColors.Grey}
            backgroundColor2={baseColors.Grey}
            
          />  
          </div>
          {children}
          
        </Modal.Footer>
      </Modal>


    </>
  );
}

export default AccountDetailModal;

