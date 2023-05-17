import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import GradientButton from "../../Button/GradientButton/index";
import { SearchOutlined } from "@ant-design/icons";
import { AppLogo } from "../../../Assets";
import baseColors from "../../../Constant/color";
import { useNavigate } from 'react-router'
import DropdownMenu from "../../Dropdown";

import "./headerStyles.css";

function GuestHeader() {
  const navigate = useNavigate()
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand}  expand={expand} className="px-2 p-0 " >
          <Container fluid  
          style={{height: "70px", minHeight:"60px"}} 
          // className="h-auto h"
          >
            <Navbar.Brand href="#" className="d-flex align-items-center">
              <img width="150px" height="40px" src={AppLogo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img width="150px" height="40px" src={AppLogo} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 ">
                  <Nav.Link href="/find-talent" className="nav-link active primary-header-menu-item ">Find Talent</Nav.Link>
                  <Nav.Link href="/find-work" className="nav-link active primary-header-menu-item ">Find Work</Nav.Link>
                  <Nav.Link href="/why-us" className="nav-link active primary-header-menu-item ">Why Spark Spot</Nav.Link>
                  <Nav.Link href="#action4" className="nav-link active primary-header-menu-item ">Enterprise</Nav.Link>
                </Nav>
                <Nav className="justify-content-end align-items-center flex-grow-2 pe-3">
                <Form className="d-flex justify-content-center d-none d-xl-block">
                <div className="input-group m-0 Search-main row d-flex align-items-center ">
                <input
                  type="text"
                  className="form-control fill col-8 Search-div"
                  placeholder="Search"
                />
                <div className="d-flex justify-content-center align-items-center col-4 Search-dropdown ">
                <DropdownMenu 
                  title="more"
                  />
                </div>
              </div>
                </Form>
                <Nav.Link href="/signin-user" className="nav-link active primary-header-menu-item ">Login</Nav.Link>
                <Nav.Link href="/signup-as">
              <GradientButton
                title="Sign Up"
                color={baseColors.white}
                backgroundColor1={baseColors.primaryColorTwo}
                backgroundColor2={baseColors.secondaryColor}
                height={"35px"}
                width={"125px"}
                onClick={() => navigate('/signup-as')}
              />
            </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default GuestHeader;
