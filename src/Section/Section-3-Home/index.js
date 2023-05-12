import React from "react";
import baseColors from "../../Constant/color";
import TalentCategoryCard from "../../Components/Cards/TalentCategoryCard";
import { TalentCategoryCardData } from "../../Config";
import FlatButton from "../../Components/Button/FlatButton";



function SectionThreeHome() {
  return (
    <div
      className="row m-0 p-0"
      style={{
        background: `linear-gradient(to right,${baseColors.primaryColorThree} ,  ${baseColors.secondaryColorTwo})`,
      }}
    >
      <div className="col-12 py-md-4 py-2 p-0">
        <div className="row d-flex justify-content-center align-items-center m-0" >
          <FlatButton
            title="Vehicle Options"
            color={baseColors.primaryColor}
            backgroundColor={baseColors.white}
            width={"17.5vw"}
            height={"50px"}
            fontWeight={600}
            opacity={0.5}
          />
          <h6 className=" text-center py-3 text-white">
            We've got options to get you where you're going.
          </h6>
        </div>
        
          <div className="row d-flex justify-content-center align-items-center m-0 py-2">
            {TalentCategoryCardData.map((card_items) => {
              return <TalentCategoryCard data={card_items} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default SectionThreeHome;
