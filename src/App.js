import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Routes from "./Routes/index"
import {  BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './App/store'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Routes />
      </Provider>
      </BrowserRouter>
    </div> 
  );
}

export default App;
