import React from 'react'
import baseColors from "../../Constant/color";
import TalentCategoryCard from "../../Components/Cards/TalentCategoryCard";
import { TalentCategoryCardData } from "../../Config";
import { StarFilled } from "@ant-design/icons";

function SectionThreeCategories() {
  return (
        <div
          className="row m-0 p-0 my-5"
          style={{
            background: `linear-gradient(to right,${baseColors.primaryColorThree} ,  ${baseColors.secondaryColorTwo})`,
          }}
        >
          <div className="col-12 py-md-4 py-2 p-0">
            <div className="row d-flex justify-content-center align-items-center m-0 p-2" >
              
              <h6 className=" text-left py-3 text-white fs-2">
              Trusted remote development and IT experts
              </h6>
              <div className='row'>
                <div className='col-3'>
                    <div className='row'>
                        <h2 style={{color:baseColors.white}}>
                        <StarFilled style={{ fontSize: "25px", color:baseColors.white }} /> 4.91/5
                        </h2>
                        <text style={{color:baseColors.white, fontSize:"15px"}}>
                        Average rating for work with tech talent.
                        </text>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row'>
                        <h2 style={{color:baseColors.white}}>
                        211K+ contracts
                        </h2>
                        <text style={{color:baseColors.white, fontSize:"15px"}}>
                        Involving development and IT work in the past year.
                        </text>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row'>
                        <h2 style={{color:baseColors.white}}>
                        1,665 skills
                        </h2>
                        <text style={{color:baseColors.white, fontSize:"15px"}}>
                        Represented by talent on Upwork
                        </text>
                    </div>
                </div>
              </div>
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

export default SectionThreeCategories