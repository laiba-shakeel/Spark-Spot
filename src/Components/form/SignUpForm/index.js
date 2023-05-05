import React from "react";
import AuthLayout from "../../../Layouts/authLayout";
import FormButton from "../../Button/FormButton";
import baseColors from "../../../Constant/color";
import { AppleFilled } from "@ant-design/icons";
import { GoogleIcon } from "../../../Assets";
import InputField from "../../InputField";

function SignUpForm() {
  return (
    <AuthLayout>
      <div
        className="col-12 d-flex justify-content-center align-items-center py-3 py-md-2"
        style={{ border: "2px solid black" }}
      >
        <div
          className=" container row d-flex justify-content-center "
          style={{ border: "2px solid green" }}
        >
          <div
            className="col-10 py-1 d-flex justify-content-center flex-column"
            style={{ border: "2px solid red" }}
          >
            <FormButton
              styles={{
                width: "100%",
                backgroundColor: baseColors.white,
                border: "2px solid",
                borderColor: baseColors.Dark,
                borderRadius: "20px",
              }}
            >
              <div className=" d-flex justify-content-center align-items-center py-1">
                <AppleFilled style={{ color: baseColors.Dark }} />
                <text
                  className="px-1"
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  {" "}
                  Continue with Apple
                </text>
              </div>
            </FormButton>
          </div>

          <div
            className="col-10 py-1 d-flex justify-content-center flex-column"
            style={{ border: "2px solid red" }}
          >
            <FormButton
              styles={{
                width: "100%",
                backgroundColor: baseColors.GoogleBlue,
                border: "1px",
                borderColor: baseColors.GoogleBlue,
                borderRadius: "30px",
                padding: "0",
                height: "40px",
              }}
            >
              <div className="row d-flex justify-content-center align-items-center m-0 ">
                <div className="col-1 p-0 d-flex justify-content-center m-0 ">
                  <img
                    src={GoogleIcon}
                    style={{
                      width: "47px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="col-11 p-0 d-flex justify-content-center flex-column">
                  <text
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: baseColors.white,
                    }}
                  >
                    {" "}
                    Continue with Google
                  </text>
                </div>
              </div>
            </FormButton>
          </div>
          <div
            className="col-10 d-flex justify-content-center flex-column"
            style={{ border: "2px solid red" }}
          >
            <div className="row d-flex align-items-center justify-content-center m-0 ">
              <div
                className="col-5"
                style={{
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderColor: baseColors.Grey,
                }}
              ></div>
              <text className="col-1 text-center px-1 pb-1 m-0">or</text>
              <div
                className="col-5"
                style={{
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderColor: baseColors.Grey,
                }}
              ></div>
            </div>
            {/* <InputField /> */}
          </div>
          <div
            className="col-11 d-flex justify-content-center align-items-center flex-column"
            style={{ border: "2px solid red" }}
          >
            
            <InputField
              placeholder="Work Email Address"
              
              // styles={{
              //   color:baseColors.Dark,
              //   border:"1px solid",
              //   borderRadius:"7px",
              //   padding:"7px"
              // }}
            />
            </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignUpForm;
