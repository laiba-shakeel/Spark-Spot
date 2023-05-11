import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../../Components/form/SignUpForm";

function SignUpClient() {
  const Navigate = useNavigate()
  return (
    <SignUpForm
    onClick={() => Navigate('/signin-client')}
    />
  )
}

export default SignUpClient