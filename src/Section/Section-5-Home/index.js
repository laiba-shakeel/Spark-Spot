import React from "react";
import "./style.css";
/* // import { img1 } from '../../Assets/index'*/
// import { Button } from 'bootstrap'

const SectionFiveHome = () => {
  return (
    
    <div className="row d-flex justify-content-center m-0 p-0">
      <div className="row slider_img d-flex justify-content-center container align-items-evenly ">
        <div className="row justify-content-center mt-3 m-0">
          <div className=" col-12 col-md-8 text-center justify-content-center align-items-center pt-5">
            <h1 className="text-white fw-bolder" style={{textShadow: "1px 1px gray"}}>Find Talent Your Way </h1>
            <h6 className="text-white fs-5" style={{textShadow: "1px 1px gray"}}>
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations. <br />{" "}
              network of independent professionals and get things{" "}
            </h6>
          </div>
        </div>
        <div className="row container  mt-0 mt-xl-3">
          <div className="row d-flex justify-content-center align-item-center ">
            <div className="col-12 col-md-4 ">
              <div className="blogItem py-0">
                {/* <img src={img1} alt="" class="w-100" /> */}
                <h6 className="spanTitle text-dark pt-4">
                  Marvelous Designer: Revolutionizing the 3D Clothing{" "}
                </h6>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block  align-items-center justify-content-center">
              <div className="blogItem py-0">
                
                <h6 className="spanTitle text-dark pt-4">
                  Marvelous Designer: Revolutionizing the 3D Clothing{" "}
                </h6>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="blogItem py-0">
                {/* <img src={img1}  alt="" class="w-100" /> */}
                <h6 className="spanTitle text-dark pt-4">
                  Marvelous Designer: Revolutionizing the 3D Clothing{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SectionFiveHome;
