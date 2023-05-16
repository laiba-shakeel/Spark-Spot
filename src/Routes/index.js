import React from 'react'
import {  Routes, Route } from "react-router-dom";
import AppHome from "../Pages/Auth/Home";
import SignUpAs from '../Pages/Auth/SignUpAs/index';
import SignUpUser from '../Pages/User/Signup';
import SignUpClient from '../Pages/Client/SignUp';
import SignInClient from '../Pages/Client/SigIn';
import SignInUser from '../Pages/User/SigIn';
import DevelopmentAndIt from '../Pages/Auth/DevelopmentAndIT';
import UserAccount from '../Pages/User/Account';
import ClientAccount from '../Pages/Client/Account';
import ClientFindTalent from '../Pages/Client/FindTalent';
import ClientOrders from '../Pages/Client/Orders';
import ClientPaymentMethod from '../Pages/Client/PaymentMethod';
import ClientSupport from '../Pages/Client/Support';
import TalentCard from '../Components/Cards/TalentCard';
import PaymentMethodCard from "../Components/Cards/PaymentCard"
const index = () => {
  return (
    
    <Routes>
      <Route exact path="/" element={<AppHome />} />
      <Route exact path="signup-as" element={<SignUpAs />} />
      <Route exact path="signup-user" element={<SignUpUser/>}/>
      <Route exact path="signup-client" element={<SignUpClient/>}/>
      <Route exact path="signin-user" element={<SignInUser/>}/>
      <Route exact path="signin-client" element={<SignInClient/>}/>
      <Route exact path="development-IT" element={<DevelopmentAndIt/>}/>
      <Route exact path="user-account" element={<UserAccount />} />
      <Route exact path="client-account" element={<ClientAccount />} />
      <Route exact path="client-find-talent" element={<ClientFindTalent/>}/>
      <Route exact path="client-orders" element={<ClientOrders/>}/>
      <Route exact path="client-payment-method" element={<ClientPaymentMethod/>}/>
      <Route exact path="client-support" element={<ClientSupport/>}/>
      <Route exact path="talent-card" element={<TalentCard/>}/>
      <Route exact path="payment-method" element={<PaymentMethodCard/>}/>
      {/* <Route exact path="" element={</>}/> */}
    </Routes>
    
  )
}

export default index