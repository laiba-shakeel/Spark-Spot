import React from 'react'
import SignInLayout from '../../../Layouts/SignInLayout'
import { useNavigate } from "react-router-dom";


function SignInClient() {
  const Navigate = useNavigate()
  return (
    <SignInLayout 
    title="Continue with Email"
    onClick={() => Navigate('/client-account')}
    />
  )
}

export default SignInClient