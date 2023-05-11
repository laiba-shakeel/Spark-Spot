import React from "react";
import baseColors from "../../Constant/color";
import "./style.css";

function AuthLayout({children}) {
  return (
    <div className="row m-0 " >
      <div className="d-none d-lg-block col-lg-6 bg-image m-0">
        <div
          className="row d-flex align-items-start justify-content-center pt-3"
          style={{ height: "100vh",  
           background: `linear-gradient(to bottom right, ${baseColors.primaryColorThree} 6%, ${baseColors.secondaryColorTwo} 100%)`, opacity:0.7 
        }}
        >
          <div className=" row py-lg-0 py-2" >
          <h2 style={{ fontSize: "35px", fontWeight: "bolder", color: baseColors.white, }}>
          Spark spot
        </h2>
        <h5
          style={{
            fontWeight: "400",
            fontSize: "23px",
            color: baseColors.white,
          }}
        >
          Work with sparkspot to manage your organization’s customer service needs
          big or small
        </h5>
            </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center" >
      {children}
      </div>
    </div>
  );
}

export default AuthLayout;
