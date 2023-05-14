import React from 'react'
import SignInLayout from '../../../Layouts/SignInLayout'
import { useNavigate } from "react-router-dom";

function SignInUser() {
  const Navigate = useNavigate()
  return (
    <SignInLayout
    title="Continue with Email"
    onClick={() => Navigate('/user-Home')}
    />
  )
}

export default SignInUser