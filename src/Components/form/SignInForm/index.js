import React from "react";
import baseColors from "../../../Constant/color";
import { AppleFilled } from "@ant-design/icons";
import FormButton from "../../../Components/Button/FormButton";
import { GoogleIcon } from "../../../Assets";
import InputField from "../../InputField";
import { useNavigate } from "react-router-dom";

function SignInForm({children}) {
  const navigate = useNavigate();
  return (
    <div
      className="row d-flex justify-content-center align-items-center m-0 "
      style={{ height:"75vh"  }}
    >
      <div className="col-11 col-sm-9 col-md-6 col-lg-5  col-xl-4 ">
        <div
          className="container row d-flex justify-content-center py-3"
          style={{
            border: "1px solid ",
            borderColor: baseColors.Grey,
            borderRadius: 5,
          }}
        >
          
          <div className="col-11 py-1 d-flex align-items-center justify-content-center flex-column">
          <p style={{ fontSize:"16px", fontWeight:"bold"}}>Log in to sparkspot</p>
          <InputField placeholder="Username & Email" />
          </div>
          <div className="col-10 py-1 d-flex justify-content-center flex-column">
            <FormButton
              styles={{
                width: "100%",
                background: `linear-gradient(to right,${baseColors.primaryColorThree} ,  ${baseColors.secondaryColorTwo})`,
                border: "0",
                borderRadius: "20px",
                height: "35px",
              }}
            >
              <div className=" d-flex justify-content-center align-items-center ">
               
                  {children}
                 
              </div>
            </FormButton>
          </div>

          <div className="col-10  py-2  d-flex justify-content-center flex-column">
            <div className="row d-flex align-items-center justify-content-center m-0 ">
              <div
                className="col-5"
                style={{
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderColor: baseColors.Grey,
                }}
              ></div>
              <text
                className="col-1 text-center px-1 pb-1 m-0"
                style={{ fontSize: "15px" }}
              >
                or
              </text>
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

          <div className="col-10 py-1 d-flex justify-content-center flex-column">
            <FormButton
              styles={{
                width: "100%",
                backgroundColor: baseColors.GoogleBlue,
                border: "1px",
                borderColor: baseColors.GoogleBlue,
                borderRadius: "30px",
                padding: "0",
                height: "35px",
              }}
            >
              <div className="row d-flex justify-content-center align-items-center m-0 ">
                <div className="col-1 p-0 d-flex justify-content-center m-0 ">
                  <img
                    src={GoogleIcon}
                    style={{
                      width: "42px",
                      height: "32px",
                      borderRadius: "50%",
                      padding: 2,
                    }}
                  />
                </div>
                <div className="col-11 p-0 d-flex justify-content-center flex-column">
                  <text
                    style={{
                      fontSize: "15px",
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

          <div className="col-10 py-1 d-flex justify-content-center flex-column">
            <FormButton
              styles={{
                width: "100%",
                backgroundColor: baseColors.white,
                border: "1px solid",
                borderColor: baseColors.Dark,
                borderRadius: "20px",
                height: "35px",
              }}
            >
              <div className=" d-flex justify-content-center align-items-center ">
                <AppleFilled style={{ color: baseColors.Dark }} />
                <text
                  className="px-1"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  Continue with Apple
                </text>
              </div>
            </FormButton>
          </div>

          <div className="col-10 py-2 d-flex justify-content-center flex-column">
            <div className="row d-flex align-items-center justify-content-center m-0 ">
              <div
                className="col-2 "
                style={{
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderColor: baseColors.Grey,
                }}
              ></div>
              <text
                className="col-8 text-center  m-0"
                style={{ fontSize: "10px" }}
              >
                Don't have an sparkspot account?
              </text>
              <div
                className="col-2"
                style={{
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderColor: baseColors.Grey,
                }}
              ></div>
            </div>
            {/* <InputField /> */}
          </div>

          <div className="col-10 py-1 d-flex justify-content-center align-items-center flex-column">
            <FormButton
              styles={{
                width: "150px",
                backgroundColor: baseColors.white,
                border: "2px solid",
                borderColor: baseColors.primaryColorThree,
                borderRadius: "20px",
                height: "35px",
              }}
              onClick={() => navigate('/signup-as')}
            >
              <div className=" d-flex justify-content-center align-items-center " 
              >
                <text
                  className="px-1"
                  style={{ fontSize: "12px", fontWeight: "500" }}
                  
                >
                  Sign Up
                </text>
              </div>
            </FormButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
