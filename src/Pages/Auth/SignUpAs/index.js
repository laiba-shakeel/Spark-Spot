import React from "react";
import AuthLayout from "../../../Layouts/authLayout";
import SignAsCard from "../../../Components/Cards/SignAsCard/index";
import baseColors from "../../../Constant/color";
import { PurpleIcon1, PurpleIcon2 } from "../../../Assets/index";
import { useNavigate } from "react-router-dom";

function SignUpAs() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="row d-flex justify-content-center align-items-center ps-2">
        <h3
          className="col-md-12 col-xl-11"
          style={{
            fontSize: "30px",
            fontWeight: "bolder",
            color: baseColors.Dark,
          }}
        >
          Join as a client or freelancer
        </h3>

        <div
          className="col-12 col-md-6 col-lg-12 col-xl-6 d-flex justify-content-center align-items-center py-2"
          onClick={() => navigate('/signup-client')}
        >
          <SignAsCard img={PurpleIcon1}>
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: baseColors.primaryColorThree,
              }}
            >
              I’m a client, hiring for a project
            </h3>
          </SignAsCard>
        </div>

        <div
          className="col-12 col-md-6 col-lg-12 col-xl-6 d-flex justify-content-center align-items-center py-2"
          onClick={() => navigate('/signup-user')}
        >
          <SignAsCard img={PurpleIcon2}>
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: baseColors.primaryColorThree,
              }}
            >
              I’m a freelancer, looking for work
            </h3>
          </SignAsCard>
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignUpAs;
