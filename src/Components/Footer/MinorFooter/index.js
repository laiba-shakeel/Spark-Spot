import React from "react";
// import { useNavigate } from "react-router";
import baseColors from "../../../Constant/color";

const style = {
  footer: {
    // height: "auto",
    // height: "150px",
  },
  mainContainer: {
    border: "2px",
    height: "80px",
    color: "#ffff",
    background: `linear-gradient(to bottom right,${baseColors.primaryColorThree} 38%,  ${baseColors.primaryColorTwo} 100%)`,
    // background: `linear-gradient(to bottom right,${baseColors.primaryColorThree} ,  ${baseColors.secondaryColorTwo} )`,
    borderRadius: "10px",
  },
  cursor: {
    cursor: "pointer",
    fontSize:"13px",
  },
};

function MinorFooter() {
  // const navigate = useNavigate()

  return (
    <div
      style={style.footer}
      className="row d-flex justify-content-center align-items-end m-0 mb-2"
    >
      <div
        style={style.mainContainer}
        className="col-12  p-0 d-flex align-items-center justify-content-md-end  justify-content-center "
      >
        <div className=" text-end p-2" style={style.footerBottom}>
          <span className="pe-2">
            <strong style={style.cursor}>Free Classifieds in Pakistan</strong>
          </span>
          <span className="pe-2" style={style.cursor}>
            . © 2023 - Onwords Fulcsion
          </span>
        </div>
      </div>
    </div>
  );
}
export default MinorFooter;
