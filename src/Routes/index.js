import React from 'react'
import {  Routes, Route } from "react-router-dom";
import AppHome from "../Pages/Auth/Home";

const index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AppHome />} />
    </Routes>
  )
}

export default index