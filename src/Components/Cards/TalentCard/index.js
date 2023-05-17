import React from 'react'
import './style.css'
import { ContentWriter , DesignerUI } from '../../../Assets'
import { useNavigate } from "react-router-dom";
const TalentCard = () => {
  const navigate = useNavigate();
  return (

  <div className='row w-75'>

        <div className="row card shadow-0 border rounded-3 my-1 ">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="hover-zoom ripple rounded ripple-surface">
                  <img alt="" src={ContentWriter}
                    className="w-100" />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div className="mask" style={{
                        backgroundColor: "rgba(253, 253, 253, 0.15)"
                      }} ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>Content Writer At your Service</h5>
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span className='fw-bold'>310 Live Projects Records</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                  <span>100% Good Work</span>
                  <span className="text-primary"> • </span>
                  <span>Delivery on time</span>
                  <span className="text-primary"> • </span>
                  <span>Best finish<br /></span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>Unique writing (peraphase work)</span>
                  <span className="text-primary"> • </span>
                  <span className='fw-bold'>Writing reviews [***1000 Stars]</span>
                 
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">$13.99</h4>
                  <span className="text-danger"><s>$20.99</s></span>
                </div>
                <h6 className="text-success">Free Hosting Domain</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-sm" type="button"onClick={() => navigate('/payment-method')}>Payment here</button>
                  <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                   Hire em 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
 

        <div className="row card shadow-0 border rounded-3 my-1">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="hover-zoom ripple rounded ripple-surface">
                  <img alt='' src={DesignerUI} 
                    className="w-100" />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)"}} ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>UI/UIX Designer at your Service</h5>
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span className='fw-bold'>289 Live Projects Records</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                  <span>100% Good Work</span>
                  <span className="text-primary"> • </span>
                  <span>Delivery on time</span>
                  <span className="text-primary"> • </span>
                  <span>Best finish<br /></span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>Unique UI Design (peraphase work)</span>
                  <span className="text-primary"> • </span>
                  <span className='fw-bold'>Writing reviews [***1000 Stars]</span>
                 
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">$14.99</h4>
                  <span className="text-danger"><s>$21.99</s></span>
                </div>
                <h6 className="text-success">Free Hosting Domain</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-sm" type="button">Profile Details</button>
                  <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

  )
}

export default TalentCard
