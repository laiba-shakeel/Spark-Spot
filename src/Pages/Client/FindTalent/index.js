import React from "react";
import ClientAccountLayout from "../../../Layouts/ClientAccountLayout";
import "./FindTalent.css"

import {
  DesignCategoriesOrder,
  MarketCategoriesOrder,
  MusicCategoriesOrder,
  ScienceCategoriesOrder,
  TechCategoriesOrder,
  bussinessCategoriesOrder,
} from "../../../Assets";
function ClientFindTalent() {
  return (
    <ClientAccountLayout title="Find Talent">
      <div className="row d-flex  align-items-center justify-content-evenly">
        <div className="col-3 my-1 mx-2 px-0 rounded d-flex justify-content-center align-items-center py-1 flex-column shadow"
          style={{
            backgroundImage: `url(${DesignCategoriesOrder})`,
            backgroundColor:"#ffce5f",
            textAlign:"center",
            borderRadius: "10px",
            height:"30vh",
            margin:"5",
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="buttonTalentHover shadow"><text className="buttonTalentText">Select</text></button>
        </div>
        <div className="col-3 my-1 mx-2  px-0 rounded d-flex justify-content-center align-items-center py-1 flex-column shadow"
          style={{
            backgroundImage: `url(${MusicCategoriesOrder})`,
            borderRadius: "10px",
            backgroundColor:"#f8abbd",
            textAlign:"center",
            height:"30vh", width:"35wv",
            margin:"5",
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="buttonTalentHover shadow"><text className="buttonTalentText">Select</text></button>
        </div>
        <div className="col-3 my-1 mx-2  px-0 rounded d-flex justify-content-center align-items-center py-1 flex-column shadow"
          style={{
            backgroundImage: `url(${bussinessCategoriesOrder})`,
            borderRadius: "10px",
            backgroundColor:"#96D1D7",
            textAlign:"center",
            height:"30vh", width:"35wv",
            margin:"5",
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="buttonTalentHover shadow"><text className="buttonTalentText">Select</text></button>
        </div>
        <div className="col-3 my-1 mx-2  px-0 rounded d-flex justify-content-center align-items-center py-1 flex-column shadow"
          style={{
            backgroundImage: `url(${ScienceCategoriesOrder})`,
            borderRadius: "10px",
            backgroundColor:"#98D19C",
            textAlign:"center",
            height:"30vh", width:"35wv",
            margin:"5",
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
          }}
        >
         <button className="buttonTalentHover shadow"><text className="buttonTalentText">Select</text></button>
        </div>
        <div className="col-3 my-1 mx-2  px-0 rounded d-flex justify-content-center align-items-center py-1 flex-column shadow"
          style={{
            backgroundImage: `url(${TechCategoriesOrder})`,
            borderRadius: "10px",
            backgroundColor:"#E0E8D1",
            textAlign:"center",
            height:"30vh", width:"35wv",
            margin:"5",
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="buttonTalentHover shadow"><text className="buttonTalentText">Select</text></button>
        </div>
        <div className="col-3 my-1 mx-2  px-0 rounded d-flex justify-content-center align-items-center py-1 flex-column shadow"
          style={{
            backgroundImage: `url(${MarketCategoriesOrder})`,
            borderRadius: "10px",
            backgroundColor:"#B8BDDD",
            textAlign:"center",
            height:"30vh", width:"35wv",
            margin:"5",
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
          }}
        >
         <button className="buttonTalentHover shadow"><text className="buttonTalentText">Select</text></button>
        </div>
      </div>

      {/* <TalentCard />  */}
    </ClientAccountLayout>
  );
}

export default ClientFindTalent;
