import React from 'react'
import SignInLayout from '../../../Layouts/SignInLayout'
import { useNavigate } from "react-router-dom";
import ClientAccountDetailModal from '../../../Components/Modal/ClientAccountDetailModal';
import GradientButton from '../../../Components/Button/GradientButton';
import baseColors from '../../../Constant/color';

function SignInClient() {
  const Navigate = useNavigate();
  return (
    <SignInLayout 
    // title="Continue with Email"
    // }
    >
      <ClientAccountDetailModal >
      <div onClick={() => Navigate('/client-account')}>
      <GradientButton variant="primary" 
            title="Save Changes"
            color={baseColors.white}
            backgroundColor1={baseColors.primaryColor}
            backgroundColor2={baseColors.secondaryColor}
          />
          </div>
      </ClientAccountDetailModal>
    </SignInLayout>
  )
}

export default SignInClient