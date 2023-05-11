import React from "react";
import baseColors from "../../Constant/color";
import { LiveImage1 } from "../../Assets";
import GradientButton from "../../Components/Button/GradientButton";
import FlatButton from "../../Components/Button/FlatButton";

function SectionFourHome() {
  return (
    <div className="my-2 py-2">
      <div className="row d-flex justify-content-center align-items-center m-0 py-4 " >
          <FlatButton
            title="Vehicle Options"
            color={baseColors.primaryColor}
            backgroundColor={baseColors.white}
            width={"17.5vw"}
            height={"50px"}
            fontWeight={600}
            opacity={0.5}
          />
          <h4 className="mb10 text-center py-3">
            We've got options to get you where you're going.
          </h4>
        </div>
    <div
      className=" row b my-5  justify-content-between mx-3"
      style={{
        // background-image: linear-gradient(to top left, #423ac8 0%, #b605a8 100%) ;
        backgroundColor: baseColors.Grey,
        borderRadius: "5px",
        width: "auto",
        height: "auto",
      }}
    >
      <div className="col-12 col-md-6 col-lg-7 col-xl-7 ps-5 py-4 d-flex justify-content-center flex-column">
      
        <h2 style={{ fontSize: "35px", fontWeight: "bolder", color: baseColors.white, }}>
          Exceptional customer service creates happy customers
        </h2>
        <h5
          style={{
            fontWeight: "400",
            fontSize: "23px",
            color: baseColors.white,
          }}
        >
          Work with sparkspot to manage your organization’s customer service needs
          big or small
        </h5>
        <div>
        <GradientButton
          title="Sign in"
          color={baseColors.white}
          backgroundColor1={baseColors.primaryColor}
          backgroundColor2={baseColors.secondaryColor}
        />
        </div>
        
      </div>
      <div className="col-12 col-md-6 col-lg-5 col-xl-5 d-none d-md-block text-end">
        <img src={LiveImage1} style={{ height: "100%", maxWidth: "95%" }} />
      </div>
    </div>
    </div>
  );
}

export default SectionFourHome;
