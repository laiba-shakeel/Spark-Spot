import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../../Components/form/SignUpForm";


function SignUpUser() {
  const Navigate = useNavigate()
  return (
    <SignUpForm
    onClick={() => Navigate('/signin-user')}
    />
  )
}

export default SignUpUser