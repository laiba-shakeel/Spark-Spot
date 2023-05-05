import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import baseColors from "../../../Constant/color";
import './style.css'

function SignAsCard({ children, img }) {
  return (
    <div
      className="row d-flex justify-content-center p-2 card"
      style={{
        border: "3px solid ",
        borderColor: baseColors.secondaryColor,
        borderRadius: "5px",
        width: "240px",
        height: "180px",
      }}
    >
      <div className="row d-flex justify-content-between p-0">
        <div className="col-8">
          <img src={img} style={{ height: 60, width: 80 }} />
        </div>
        <div className="col-4">
          <ArrowRightOutlined style={{color:baseColors.secondaryColor, fontSize:"25px"}}/>
        </div>
      </div>
      <div className="row p-0 py-2 d-flex align-items-end">
        {children}
      </div>
    </div>
  );
}

export default SignAsCard;
