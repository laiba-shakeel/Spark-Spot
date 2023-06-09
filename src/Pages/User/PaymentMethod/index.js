import React from "react";
import UserAccountLayout from "../../../Layouts/UserAccountLayout";
import baseColors from "../../../Constant/color";
import { PaymentMethod } from "../../../Assets";
import GradientButton from "../../../Components/Button/GradientButton";
import PaymentModal from "../../../Components/Modal/PaymentModal";
// import { HiArrowRight } from "react-icons/hi";
function UserPaymentMethod() {
  return (
    <UserAccountLayout title="Payment Method">
      <div className="row  m-0 d-flex justify-content-center align-items-start ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img alt="" src={PaymentMethod} style={{ height: "50vh", width: "30vw" }} />
        </div>
        <div className="col-12 py-2 d-flex justify-content-start align-items-center  flex-column">
          <GradientButton
            color={baseColors.white}
            backgroundColor1={baseColors.primaryColor}
            backgroundColor2={baseColors.secondaryColor}
          >
            <PaymentModal />
          </GradientButton>
        </div>
      </div>
    </UserAccountLayout>
  );
}

export default UserPaymentMethod;
