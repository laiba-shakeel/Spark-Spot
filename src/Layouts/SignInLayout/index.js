import React from "react";
import baseColors from "../../Constant/color";
import SignInForm from "../../Components/form/SignInForm";
import MinorFooter from "../../Components/MinorFooter";
import { AppLogo } from "../../Assets";

function SignInLayout() {
  return (
    <div
      className="row m-0 d-flex justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row d-flex justify-content-start ps-2">
      <div className="col-4">
      <img width="100px" height="30px" src={AppLogo} />
      </div>
      </div>
      <div className="row">
        <SignInForm />
      </div>
      <div className="row p-0">
        <MinorFooter />
      </div>
    </div>
  );
}

export default SignInLayout;
