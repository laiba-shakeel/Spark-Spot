import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import baseColors from "../../../Constant/color";
import GradientButton from "../../Button/GradientButton";
import { useNavigate } from "react-router-dom";

function LogoutModal() {
  const Navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="nav-link active primary-Drawer-menu-item"
            onClick={handleShow}
          > 
        Logout
      </a>

      <Modal show={show} onHide={handleClose} animation={false}>
        
        <Modal.Body>
        <div className="row py-1">
          <h5>Logout from Status?</h5>
          
        <div className="row pt-4">
        <div onClick={handleClose} className="col-5">
          <GradientButton
            variant="primary"
            title=" Close"
            color={baseColors.white}
            backgroundColor1={baseColors.Grey}
            backgroundColor2={baseColors.Grey}
          />
        </div>
        <div onClick={() => Navigate("/")} className="col-5">
          <GradientButton
            variant="primary"
            title="Logout"
            color={baseColors.white}
            backgroundColor1={baseColors.primaryColor}
            backgroundColor2={baseColors.secondaryColor}
          />
        </div>
        </div>

        </div>
        </Modal.Body>
        
          
      </Modal>
    </>
    // <>
      // <a className="nav-link active primary-Drawer-menu-item"
      //       onClick={handleShow}
      //     > 
      //   Logout
      // </a>

    //   <Modal show={show} onHide={handleClose} >
        // <div className="row ">
        //   <h4>Logout from Status</h4>
        // <div onClick={handleClose}>
        //   <GradientButton
        //     variant="primary"
        //     title=" Close"
        //     color={baseColors.white}
        //     backgroundColor1={baseColors.Grey}
        //     backgroundColor2={baseColors.Grey}
        //   />
        // </div>
        // <div onClick={() => Navigate("/")}>
        //   <GradientButton
        //     variant="primary"
        //     title="Save Changes"
        //     color={baseColors.white}
        //     backgroundColor1={baseColors.primaryColor}
        //     backgroundColor2={baseColors.secondaryColor}
        //   />
        // </div>
        // </div>
    //   </Modal>
    // </>
  );
}

export default LogoutModal;
