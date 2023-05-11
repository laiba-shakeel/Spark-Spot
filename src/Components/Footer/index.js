import React from "react";
// import { useNavigate } from "react-router";
import baseColors from "../../Constant/color";
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined ,
    YoutubeOutlined,
    LinkedinOutlined
} from "@ant-design/icons";
const style = {
  footer: {
    height: "auto",
    minHeight: "300px",
  },
  mainContainer: {
    border: "2px",
    height: "100%",
    color: "#ffff",
    background: `linear-gradient(to bottom right,${baseColors.primaryColorThree} 38%,  ${baseColors.primaryColorTwo} 100%)`,
    // background: `linear-gradient(to bottom right,${baseColors.primaryColorThree} ,  ${baseColors.secondaryColorTwo} )`,
    borderRadius: '10px'
  },
  cursor:{
    cursor: "pointer"
  },
//   footerBottom:{
//     borderColor: "#256D85",
//     borderBottomWidth: "10px",
//   }
};
function AppFooter() {
  // const navigate = useNavigate()

  return ( 
  
    <div style={style.footer} className="row d-flex justify-content-center pt-2 m-0 mb-2">
      <div
        style={style.mainContainer}
        className="col-11  p-0  justify-content-center py-4"
      >
        <div className="row d-flex justify-content-around py-3 m-0">
          <div className="col col-lg-3 col-6 col-md-3  ps-5">
            <p className="pb-2 fw-bold" style={style.cursor}>For Clients</p>
            <p style={style.cursor}>How to Hire</p>
            <p style={style.cursor}>Talent Marketplace</p>
            <p style={style.cursor}>Project Catalog</p>
            <p style={style.cursor}>Talent Scout</p>
            <p style={style.cursor}>Hire an Agency</p>
            <p style={style.cursor}>Enterprises</p>
            <p style={style.cursor}>Any Hire</p>
            <p style={style.cursor}>Contract-to-Hire</p>
            <p style={style.cursor}>Direct Contracts</p>
            <p style={style.cursor}>Hire Worldwide</p>
            <p style={style.cursor}>Hire in the USA</p>
          </div>
          <div className="col col-6 col-lg-3 col-md-3 ps-5">
            <p className="pb-2 fw-bold" style={style.cursor}>For Talents</p>
            <p style={style.cursor}>How to Find Work</p>
            <p style={style.cursor}>Direct Contracts</p>
            <p style={style.cursor}>
              Find Freelance Jobs <br /> Worldwide
            </p>
            <p style={style.cursor}>
              Find Freelance Jobs in <br /> the USA
            </p>
          </div>
          <div className="col col-6 col-lg-3 col-md-3 ps-5 ">
            <p className="pb-2 fw-bold" style={style.cursor}>Resources</p>
            <p style={style.cursor}>Help & Support</p>
            <p style={style.cursor}>Success Stories</p>
            <p style={style.cursor}>Fulcsion Reviews</p>
            <p style={style.cursor}>Resources</p>
            <p style={style.cursor}>Blog</p>
            <p style={style.cursor}>Community</p>
            <p style={style.cursor}>Afifiliate Program</p>
            <p style={style.cursor}>Free Business tolls</p>
          </div>
          <div className="col col-6 col-lg-3 col-md-3 ps-5">
            <p className="pb-2 fw-bold" style={style.cursor}>Company</p>
            <p style={style.cursor}>About Us</p>
            <p style={style.cursor}>Leadership</p>
            <p style={style.cursor}>Investor Relations</p>
            <p style={style.cursor}>Careers</p>
            <p style={style.cursor}>Our Impact</p>
            <p style={style.cursor}>Press</p>
            <p style={style.cursor}>Contact Us</p>
            <p style={style.cursor}>Trust, Safety & Security</p>
            <p style={style.cursor}>Modern Slavery Statement</p>
          </div>
        </div>
<div className="col-12 text-start ">
    <span className="text-center">
        <strong className="ps-5">Follow Us</strong>
       <span className="justify-content-evenly ps-2">
        <FacebookOutlined style={{ fontSize: '25px', border:'1px',}}/>
        <InstagramOutlined className="ps-2" style={{ fontSize: '25px', border:'1px',}}/>
        <TwitterOutlined className="ps-2" style={{ fontSize: '25px', border:'1px',}}/>
        <YoutubeOutlined className="ps-2" style={{ fontSize: '25px', border:'1px',}}/>
        <LinkedinOutlined className="ps-2" style={{ fontSize: '25px', border:'1px',}}/>
        </span>
    </span>

</div>
<hr />
        <div className="col-12 text-end " style={style.footerBottom}>
          <span className="pe-2">
            <strong style={style.cursor}>Free Classifieds in Pakistan</strong>
          </span>
          <span className="pe-2" style={style.cursor}>. © 2023 - Onwords Fulcsion</span>
        </div>
      </div>
    </div>
  );
}
export default AppFooter;
