import React from "react";
import { JoinUs, PurpleIcon1, PurpleIcon2, PurpleIcon3 } from "../../Assets";
import { FormOutlined , MonitorOutlined , StarOutlined} from '@ant-design/icons';
import './style.css'

function SectionTwoHome() {
  return (
    <div className="row container py-2 " >
      <div className="col-12 col-lg-6  py-5 " >
        <img src={JoinUs} className="img-fluid" />
      </div>
      <div className="col-12 col-lg-6 py-3 " >
        <h2 className="mb20 py-2">
        up your work game, it’s free.
        </h2>

        <div className="row">
          <div className="media_object col-12 ">
            <div className="row">
              <div className="icon_img col-1 text-left">
              <FormOutlined style={{fontSize:'25px' , color:"#000486"}}/>
              </div>
              <div className=" col-11">
                <h5 className="mb10">No cost to join.</h5>
                <p className="mb5">
                Register and browse professionals, explore projects, or even book a consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="media_object col-12 ">
            <div className="row">
              <div className="icon_img col-1  text-left">
              <MonitorOutlined style={{fontSize:'25px' , color:"#000486"}}/>
              </div>
              <div className="media_body col-11">
                <h5 className="mb10">Post a job and hire top talent.</h5>
                <p className="mb5">
                Finding talent doesn’t have to be a chore. Post a job or we can search for you!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="media_object col-12 ">
            <div className="row">
              <div className=" col-1  " >
              <StarOutlined style={{fontSize:'25px' , color:"#000486"}} />
              </div>
              <div className="media_body col-11">
                <h5 className="mb10">Work with the best—without breaking the bank.</h5>
                <p className="mb5">
                Upwork makes it affordable to up your work and take advantage of low transaction rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwoHome;
