import React, { Children, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import baseColors from "../../../Constant/color";
import GradientButton from "../../Button/GradientButton";
import { useNavigate } from "react-router-dom";
import "./PaymentModal.css"

function PaymentModal() {
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
        Add Payment
      </text>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
      >
        <div className="container p-3">
          <div className="">
            <h4>Confirm order and pay</h4>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="card py-3 px-2" >
                <h6 className="text-uppercase ">Payment details</h6>
                <div className="inputbox ">
                  {" "}
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required="required"
                  />{" "}
                  <span>Name on card</span>{" "}
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="inputbox ">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <i className="fa fa-credit-card" /> <span>Card Number</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-row">
                      <div className="inputbox ">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>Expiry</span>{" "}
                      </div>

                      <div className="inputbox ">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>CVV</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-1">
                  <h6 className="text-uppercase">Billing Address</h6>

                  <div className="row ">
                    <div className="col-md-6">
                      <div className="inputbox ">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>Street Address</span>{" "}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="inputbox ">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>City</span>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-6">
                      <div className="inputbox ">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>State/Province</span>{" "}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="inputbox ">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>Zip code</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" d-flex justify-content-between p-2">
                <span>Previous step</span>

                <button className="btn btn-success px-1"  onClick={handleClose}>Pay $840</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-blue p-3 text-white mb-3">
                <span>You have to pay</span>
                <div className="d-flex flex-row align-items-end mb-3">
                  <h1 className="mb-0 yellow">$549</h1> <span>.99</span>
                </div>

                <span>
                  Enjoy all the features and perk after you complete the payment
                </span>
                <a href="#" className="yellow decoration">
                  Know all the features
                </a>

                <div className="hightlight">
                  <span>
                    100% Guaranteed support and update for the next 5 years.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PaymentModal;
