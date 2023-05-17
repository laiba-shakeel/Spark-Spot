import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Layout, Menu } from "antd";
import GradientButton from "../Button/GradientButton/index";
import { SearchOutlined } from "@ant-design/icons";
import { AppLogo } from "../../Assets";
import baseColors from "../../Constant/color";
import Dropdown from "../Dropdown";

import "./headerStyles.css";
import DropdownMenu from "../Dropdown";

function HeaderMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light row m-0 p-0 d-none d-lg-block">
      <div className="container col-12">
          <ul
            className="navbar-nav d-flex justify-content-start"
          >
            <li className="nav-item">
              <a
                className="nav-link active primary-header-menu-item"
                href="/development-IT"
              >
                Development & IT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active primary-header-menu-item"
                href="/design-creative"
              >
                Design & Creative
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active primary-header-menu-item"
                href="/sales-marketing"
              >
                Sales & Marketing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active primary-header-menu-item"
                href="/writing-translation"
              >
                Writing & Translation
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active primary-header-menu-item"
                href="/admin-support"
              >
                Admin & Customer Support
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active primary-header-menu-item py-0 mt-2"
                href="#contact-us"
              >
                <div
                  
                  className="d-flex justify-content-center align-items-center"
                >
                  <DropdownMenu 
                  title="more"
                  />
                  </div>
              </a>
            </li>
            
          </ul>
        
      </div>
    </nav>
  );
}

export default HeaderMenu;

