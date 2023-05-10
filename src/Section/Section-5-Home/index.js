import React from "react";
import "./style.css";
/* // import { img1 } from '../../Assets/index'*/
// import { Button } from 'bootstrap'

const SectionFiveHome = () => {
  return (
    
    <div className="row d-flex justify-content-center m-0 p-0">
      <div className="row slider_img d-flex justify-content-center container align-items-evenly py-2 ">
        <div className="row justify-content-center mt-3 m-0 py-2">
          <div className=" col-12 col-md-10 text-center justify-content-center align-items-center ">
            <h1 className="text-white fs-3 fw-bolder" style={{textShadow: "1px 1px gray"}}>Find Talent Your Way </h1>
            <text className="text-white " style={{textShadow: "1px 1px gray", fontSize:"calc(14px + 6 * ((100vw - 320px) / 680))"}}>
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations. <br />{" "}
              network of independent professionals and get things{" "}
            </text>
          </div>
        </div>
        <div className="row container  mt-0 mt-xl-3">
          <div className="row d-flex justify-content-center align-item-center m-0 p-0">
            <div className="col-12 col-md-4 ">
              <div className="blogItem">
                {/* <img src={img1} alt="" class="w-100" /> */}
                <text className="spanTitle text-dark text-center ">
                  Marvelous Designer: Revolutionizing the 3D Clothing{" "}
                </text>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block  align-items-center justify-content-center">
              <div className="blogItem ">
                
                <text className="spanTitle text-dark text-center">
                  Marvelous Designer: Revolutionizing the 3D Clothing{" "}
                </text>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="blogItem  ">
                {/* <img src={img1}  alt="" class="w-100" /> */}
                <text className="spanTitle text-dark text-center">
                  Marvelous Designer: Revolutionizing the 3D Clothing{" "}
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SectionFiveHome;
