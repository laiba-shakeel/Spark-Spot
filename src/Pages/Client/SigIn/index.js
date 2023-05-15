import React from 'react'
import SignInLayout from '../../../Layouts/SignInLayout'
import { useNavigate } from "react-router-dom";
import ClientAccountDetailModal from '../../../Components/Modal/ClientAccountDetailModal';


function SignInClient() {
  const Navigate = useNavigate();
  return (
    <SignInLayout 
    // title="Continue with Email"
    // onClick={() => Navigate('/client-account')}
    >
      <ClientAccountDetailModal onClick={() => Navigate('/client-account')} />
    </SignInLayout>
  )
}

export default SignInClient