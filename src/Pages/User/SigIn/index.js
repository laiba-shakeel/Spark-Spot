import React from 'react'
import SignInLayout from '../../../Layouts/SignInLayout'
import { useNavigate } from "react-router-dom";
import AccountDetailModal from "../../../Components/Modal/AccountDetailModal"
import GradientButton from '../../../Components/Button/GradientButton';
import baseColors from '../../../Constant/color';

function SignInUser() {
  const Navigate = useNavigate()
  return (
    <SignInLayout
    title="Client"
    onClick={() => Navigate('/signin-client')}
    >
      <AccountDetailModal >
      <div onClick={() => Navigate('/user-account')}>
      <GradientButton variant="primary" 
            title="Save Changes"
            color={baseColors.white}
            backgroundColor1={baseColors.primaryColor}
            backgroundColor2={baseColors.secondaryColor}
          />
          </div>
      </AccountDetailModal>
    </SignInLayout>
  )
}

export default SignInUser