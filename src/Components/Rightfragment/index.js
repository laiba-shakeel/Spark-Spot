import React from "react";
import { PersonImageOne, PersonImageTwo, PersonImageTwoHorizental } from "../../Assets";
import baseColors from "../../Constant/color";
import { FormOutlined , MonitorOutlined , StarOutlined} from '@ant-design/icons';
import "./style.css"
import HoverFlatButton from "../Button/HoverFlatButton";

function RightFragment(props) {
  return (
    <div
      className="row container  my-5 rounded-3 p-0"
      style={{
        background: `linear-gradient(to bottom right, ${baseColors.primaryColor} 0%, ${baseColors.primaryColorThree} 65%)`,
      }}
    >

      <div className="col-12 col-md-9 col-lg-8 py-4 ps-4"
        style={
          {
            // border:"2px solid blue"
          }
        }
      >
        <text className="mb7 text-white">Enterprise Suite</text>
        <h2 className="gradient-Heading py-2 text-white"
         >
        This is how<br/>
good companies<br/>
find good company.

        </h2>
        <p className="mb8 text-white">
        Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.
        </p>
        
        <HoverFlatButton title="Get Started"/>

      </div>

      <div className="col-md-3 col-lg-4 d-none d-md-block p-3"
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
        alt=""
        src={props.imagePath}
          // className='rounded-right border'
          style={{
            width: "100%",
            height:"100%",
            backgroundSize: "cover",
            borderRadius:"10px"
          }}
        />
      </div>
    </div>
  );
}

export default RightFragment;
