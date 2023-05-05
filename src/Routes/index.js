import React from 'react'
import {  Routes, Route } from "react-router-dom";
import AppHome from "../Pages/Auth/Home";
import SignUpAs from '../Pages/Auth/SignUpAs/index';
import SignUpUser from '../Pages/User/Signup';
import SignUpClient from '../Pages/Client/SignUp';

const index = () => {
  return (
    
    <Routes>
      <Route exact path="/" element={<AppHome />} />
      <Route exact path="signup-as" element={<SignUpAs />} />
      <Route exact path="signup-user" element={<SignUpUser/>}/>
      <Route exact path="signup-client" element={<SignUpClient/>}/>
      {/* <Route exact path="" element={</>}/> */}
    </Routes>
    
  )
}

export default index