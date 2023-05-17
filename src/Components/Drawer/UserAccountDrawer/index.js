import React from "react";
import './style.css'
import baseColors from "../../../Constant/color";
import LogoutModal from "../../Modal/LogoutModal";

function UserAccountDrawer() {
  return (
    <nav
    className="navbar navbar-light row m-0 d-flex align-items-start p-0"
    style={{background:baseColors.white}}
  >
    <ul className="navbar-nav px-2 row" style={{background:baseColors.white}}>
      <li className="d-flex align-item-center justify-content-start py-1" eventKey="link-1">
        <a
          className="nav-link active primary-Drawer-menu-item"
          href="/user-account"
        >
          My Account
        </a>
      </li>
      <li className="d-flex align-item-center justify-content-start py-1">
        <a
          className="nav-link active primary-Drawer-menu-item"
          href="/user-find-work"
        >
          Find Work
        </a>
      </li>
      <li className="d-flex align-item-center justify-content-start py-1">
        <a
          className="nav-link active primary-Drawer-menu-item"
          href="/user-task"
        >
          Task
        </a>
      </li>
      <li className="d-flex align-item-center justify-content-start py-1">
        <a
          className="nav-link active primary-Drawer-menu-item"
          href="/user-payment-method"
        >
          Payment Method
        </a>
      </li>
      
      <li className="d-flex align-item-center justify-content-start py-1">
        <a
          className="nav-link active primary-Drawer-menu-item"
          href="/user-support"
        >
          Support
        </a>
      </li>
      <li className="d-flex align-item-center justify-content-start py-1">
        
          <LogoutModal />
        
      </li>
    </ul>
  </nav>
  )
}

export default UserAccountDrawer