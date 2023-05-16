import React from "react";
import ClientAccountLayout from "../../../Layouts/ClientAccountLayout";
import baseColors from "../../../Constant/color";
import {  AnalyizeDashboard, CircleOverviewDashboard, DummyPerson } from "../../../Assets";
import { HiArrowRight } from "react-icons/hi";

function ClientAccount() {
  return (
    <ClientAccountLayout title="My Account">
      <div className="col-4 d-flex justify-content-center align-items-center flex-column">
      <div
        className="shadow Accountcard row p-0 p-1 "
        style={{
          height: "180px",
          width: "350px",
          borderRadius: "5px",
          background: `linear-gradient(to right, ${baseColors.primaryColor} , ${baseColors.secondaryColor} )`,
        }}
      >
        <div className="col-3 p-0 d-flex justify-content-center align-items-center  flex-column pb-4">
          <img width="60px" height="60px" src={DummyPerson} />
        </div>
        <div className="col-9 d-flex justify-content-center flex-column ">
          <h6 style={{ fontWeight: "bold", color: baseColors.white }}>
            Account Detail
          </h6>
          <div className="row d-flex align-items-center justify-content-center">
            <div
              className="col-9 "
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: baseColors.white,
              }}
            >
              <text>Edit Your Profile</text>
            </div>
            <div className="col-3 pt-1">
              <HiArrowRight
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: baseColors.white,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-end flex-column">
       <img src={AnalyizeDashboard} style={{borderRadius:"20px",  height:"30vh" }} className="shadow"/>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center flex-column">
       <img src={CircleOverviewDashboard} style={{borderRadius:"20px", }} className="shadow"/>
      </div>
      
    </ClientAccountLayout>
  );
}

export default ClientAccount;
