import React from "react";
import baseColors from "../../Constant/color";
import SignInForm from "../../Components/form/SignInForm";
import MinorFooter from "../../Components/Footer/MinorFooter";
import { ArrowRightOutlined } from "@ant-design/icons";
import { AppLogo } from "../../Assets";

function SignInLayout({ children, onClick, title }) {
  return (
    <div
      className="row m-0 d-flex justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row d-flex justify-content-start ps-2">
        <div className="col-4" >
          <a href="/"><img alt="" width="100px" height="30px" src={AppLogo}  /></a>
        </div>
      </div>
      <div className="row">
        <SignInForm>
          {children}
          {/* <text
            className="px-1"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: baseColors.white,
            }}
            onClick={onClick}
          >
            {title}
          </text> */}
        </SignInForm>
      </div>
      <text className="pe-4 pb-1" style={{ fontSize: "15px", fontWeight: "bold", textAlign:"end" , color:baseColors.primaryColor }} onClick={onClick}>
        Login as {title} <span><ArrowRightOutlined style={{color:baseColors.secondaryColor, fontSize:"15px"}}/></span>
      </text>
      <div className="row p-0">
        <MinorFooter />
      </div>
    </div>
  );
}

export default SignInLayout;
