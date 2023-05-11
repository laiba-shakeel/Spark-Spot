import React from "react";
import { PersonImageOne, PersonImageTwo, PersonImageTwoHorizental } from "../../Assets";
import baseColors from "../../Constant/color";
import { FormOutlined , MonitorOutlined , StarOutlined} from '@ant-design/icons';
import "./style.css"

function RightImageFragment() {
  return (
    <div
      className="row container  my-5 rounded-3 p-0"
      style={{
        background: baseColors.primaryColor,
      }}
    >
      <div
        className="col-12 d-block d-md-none p-0"
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
            width: "100%",
            height: "30vh",
            backgroundSize: "cover",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",

            
          }}
        />
      </div>

      <div className="col-12 col-md-9 col-lg-8 p-3"
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
        
        
            <div className="row">
              <div className="icon_img col-1 text-left">
              <FormOutlined style={{fontSize:'20px' , color:baseColors.white}}/>
              </div>
              <div className=" col-11">
                <p className="mb8 text-white">
                Register and browse professionals, explore projects, or even book a consultation.
                </p>
              </div>
            </div>

        
            <div className="row">
              <div className="icon_img col-1  text-left">
              <MonitorOutlined style={{fontSize:'20px' , color:baseColors.white}}/>
              </div>
              <div className="media_body col-11">
                <p className="mb8 text-white">
                Finding talent doesn’t have to be a chore. Post a job or we can search for you!
                </p>
              </div>
            </div>

       
            <div className="row">
              <div className=" col-1  " >
              <StarOutlined style={{fontSize:'20px' , color:baseColors.white}} />
              </div>
              <div className="media_body col-11">
                <p className="mb8 text-white">
                sparkspot makes it affordable to up your work and take advantage of low transaction rates.
                </p>
              </div>
            </div>
      </div>

      <div className="col-md-3 col-lg-4 d-none d-md-block p-0"
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
            width: "100%",
            height:"65vh",
            backgroundSize: "cover",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        />
      </div>
    </div>
  );
}

export default RightImageFragment;
