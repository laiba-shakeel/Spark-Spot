import React from "react";
import baseColors from "../../Constant/color";
import SignInForm from "../../Components/form/SignInForm";
import MinorFooter from "../../Components/Footer/MinorFooter";
import { AppLogo } from "../../Assets";

function SignInLayout({ children }) {

  return (
    <div
      className="row m-0 d-flex justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row d-flex justify-content-start ps-2">
        <div className="col-4">
          <img alt="" width="100px" height="30px" src={AppLogo} />
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
      <div className="row p-0">
        <MinorFooter />
      </div>
    </div>
  );
}

export default SignInLayout;
