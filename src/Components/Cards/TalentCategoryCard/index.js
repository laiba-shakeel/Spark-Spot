import React from "react";
import { StarOutlined } from "@ant-design/icons";
import baseColors from "../../../Constant/color";

function TalentCategoryCard({ data }) {
  return (
    <div
      className="col-12 col-sm-6 col-lg-4 col-xl-3 my-2 p-0 m-1 d-flex justify-content-evenly  flex-column"
      style={{
        width: "300px",
        height: "120px",
        backgroundColor: baseColors.white,
        borderRadius:"5px",
        opacity:0.7
      }}
    >
      <h6 className="ps-3" style={{color:baseColors.Dark}}>
        {data.title}
      </h6>
      <div className="row d-flex justify-content-center align-items-center m-0">
        <div className="col-5 p-0">
          <div className="row d-flex justify-content-center align-items-center m-0">
            <div className="col-4 p-0">
              <StarOutlined style={{ fontSize: "25px", color: "#000486" }} />
            </div>
            <div className="col-4 p-0">{data.rate}</div>
          </div>
        </div>
        <div className="col-7 p-0  m-0">{data.skills}skills</div>
      </div>
    </div>
  );
}

export default TalentCategoryCard;
