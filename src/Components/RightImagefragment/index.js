import React from "react";
import { PersonImageOne, PersonImageTwo, PersonImageTwoHorizental } from "../../Assets";
import baseColors from "../../Constant/color";

function RightImageFragment() {
  return (
    <div
      className="row container  my-4 rounded-3"
      style={{
        background: baseColors.primaryColor,
      }}
    >
      <div
        className="col-12 d-block d-sm-none"
        style={
          {
            // border:"2px solid blue"
            // display:"flex",
            // justifyContent:"right",
            // alignItems:'end'
          }
        }
      >
        <img
          src={PersonImageTwoHorizental}
          // className='rounded-right border'
          style={{
            width: "94vw",
            height: "30vh",
            backgroundSize: "cover",

            
          }}
        />
      </div>

      <div
        className="col-12 col-sm-7"
        style={
          {
            // border:"2px solid blue"
          }
        }
      >
        abc
      </div>

      <div
        className="col-sm-5 d-none d-sm-block"
        style={
          {
            // border:"2px solid blue"
            // display:"flex",
            // justifyContent:"right",
            // alignItems:'end'
          }
        }
      >
        <img
          src={PersonImageTwo}
          // className='rounded-right border'
          style={{
            width: "37vw",
            height: "65vh",
            backgroundSize: "contain",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        />
      </div>
    </div>
  );
}

export default RightImageFragment;
