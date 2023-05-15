import React from 'react'
import ClientAccountLayout from '../../../Layouts/ClientAccountLayout'
import baseColors from "../../../Constant/color"
import { PaymentMethod } from "../../../Assets";
import GradientButton from '../../../Components/Button/GradientButton';
// import { HiArrowRight } from "react-icons/hi";

function ClientPaymentMethod() {
  return (
    <ClientAccountLayout title="Payment Method">
      <div className='row  m-0 d-flex justify-content-center align-items-start ' >
      <div className='col-12 d-flex justify-content-center align-items-center' >
      <img src={PaymentMethod} style={{ height:"50vh", width:"30vw"}}/>
      </div>
      <div className='col-12 py-2 d-flex justify-content-start align-items-center  flex-column' style={{border:"2px solid black"}}>
      <GradientButton 
      title="Add Payment"
      color={baseColors.white}
      backgroundColor1={baseColors.primaryColor}
      backgroundColor2={baseColors.secondaryColor}
      />
      </div>
      </div>
      </ClientAccountLayout>
  )
}

export default ClientPaymentMethod