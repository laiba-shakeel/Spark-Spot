import React from 'react'
import {  Routes, Route } from "react-router-dom";
import AppHome from "../Pages/Auth/Home";
import SignUpAs from '../Pages/Auth/SignUpAs/index';
import SignUpUser from '../Pages/User/Signup';
import SignUpClient from '../Pages/Client/SignUp';
import SignInClient from '../Pages/Client/SigIn';
import SignInUser from '../Pages/User/SigIn';
import DevelopmentAndIt from '../Pages/Auth/DevelopmentAndIT';
import UserHome from '../Pages/User/Home';
import ClientHome from '../Pages/Client/Home';

const index = () => {
  return (
    
    <Routes>
      <Route exact path="/" element={<AppHome />} />
      <Route exact path="signup-as" element={<SignUpAs />} />
      <Route exact path="signup-user" element={<SignUpUser/>}/>
      <Route exact path="signup-client" element={<SignUpClient/>}/>
      <Route exact path="signin-user" element={<SignInUser/>}/>
      <Route exact path="signin-client" element={<SignInClient/>}/>
      <Route exact path='user-Home' element={<UserHome />} />
      <Route exact path='client-Home' element={<ClientHome />} />
      {/* <Route exact path="" element={</>}/> */}
    </Routes>
    
  )
}

export default index