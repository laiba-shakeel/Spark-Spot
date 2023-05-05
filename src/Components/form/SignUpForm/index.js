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
                height: "35px",
              }}
            >
              <div className=" d-flex justify-content-center align-items-center ">
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
            <div
              className="container row d-flex justify-content-between align-items-center px-3"
              style={{ border: "2px solid Blue" }}
            >
              <div className="col-12 col-sm-6 p-0">
                <InputField placeholder="First Name" />
              </div>
              <div className="col-12 col-sm-6 p-0 d-flex justify-content-center align-items-start align-items-sm-end flex-column">
                <InputField placeholder="Last Name" />
              </div>
            </div>

            <InputField placeholder="Work Email Address" />
            <InputField placeholder="Password" type="password" />

            <select
              className="form-select form-select fill "
              aria-label="Default select example"
              style={{
                height: 35,
                width: "90%",
                margin: 5,
                borderColor: baseColors.Grey,
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 50,
                paddingTop: 0,
                paddingBottom: 0,
                // paddingVertical: 10,
                // marginHorizontal: 2,
                // marginVertical: 5,
                fontSize: 15,
                color: baseColors.Dark,
              }}
            >
              <option selected> Pakistan </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div class="input-group ">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignUpForm;
