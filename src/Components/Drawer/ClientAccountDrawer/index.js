import React, {useState} from "react";
import './style.css'
import baseColors from "../../../Constant/color";
import LogoutModal from "../../Modal/LogoutModal";

function ClientAccountDrawer() {
  return (
    <nav
      className="navbar navbar-light row m-0 d-flex align-items-start p-0"
      style={{background:baseColors.white}}
    >
      <ul className="navbar-nav px-2 row" style={{background:baseColors.white}}>
        <li className="d-flex align-item-center justify-content-start py-1" eventKey="link-1">
          <a
            className="nav-link  primary-Drawer-menu-item "
            
            href="/client-account"
            // onClick={() => setView('SelectOne')}
            // style={{ color: view === 'SelectOne' ? "#f9504d" : "#000"}}
          >
            My Account
          </a>

        </li>
        <li className="d-flex align-item-center justify-content-start py-1">
          <a
          className="nav-link  primary-Drawer-menu-item "
            href="/client-find-talent"
            // onClick={() => setView('SelectTwo')}
            // style={{ color: view === 'SelectTwo' ? "#f9504d" : "#000"}}
          >
            Find Talent
          </a>
        </li>
        <li className="d-flex align-item-center justify-content-start py-1">
          <a
            className="nav-link active primary-Drawer-menu-item"
            href="/client-orders"
          >
            Orders
          </a>
        </li>
        <li className="d-flex align-item-center justify-content-start py-1">
          <a
            className="nav-link active primary-Drawer-menu-item"
            href="/client-payment-method"
          >
            Payment Method
          </a>
        </li>
        
        <li className="d-flex align-item-center justify-content-start py-1">
          <a
            className="nav-link active primary-Drawer-menu-item"
            href="/client-support"
          >
            Support
          </a>
        </li>
        <li className="d-flex align-item-center justify-content-start py-1">
          
            <LogoutModal />
          
        </li>
      </ul>
    </nav>
  );
}

export default ClientAccountDrawer;
