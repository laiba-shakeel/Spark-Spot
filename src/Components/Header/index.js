import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import GradientButton from "../Button/GradientButton/index";
import { SearchOutlined } from "@ant-design/icons";
import { AppLogo } from "../../Assets";
import baseColors from "../../Constant/color";
import DropdownMenu from "../Dropdown";

import "./headerStyles.css";

function AppHeader() {
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
                  <Nav.Link href="#action1" className="nav-link active primary-header-menu-item ">Find Talent</Nav.Link>
                  <Nav.Link href="#action2" className="nav-link active primary-header-menu-item ">Find Work</Nav.Link>
                  <Nav.Link href="#action3" className="nav-link active primary-header-menu-item ">Why Spark Spot</Nav.Link>
                  <Nav.Link href="#action4" className="nav-link active primary-header-menu-item ">Enterprise</Nav.Link>
                </Nav>
                <Nav className="justify-content-end align-items-center flex-grow-2 pe-3">
                <Form className="d-flex justify-content-center d-none d-xl-block">
                <div className="input-group m-0 Search-main row">
                <input
                  type="text"
                  className="form-control fill col-8 Search-div"
                  placeholder="Search"
                />
                <div className="d-flex justify-content-center align-items-center col-4 Search-dropdown">
                <NavDropdown
                    title="Talent"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action5" >Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
                </Form>
                <Nav.Link href="#action8" className="nav-link active primary-header-menu-item ">Link</Nav.Link>
                <Nav.Link href="#action9">
              <GradientButton
                title="Sign Up"
                color={baseColors.white}
                backgroundColor1={baseColors.primaryColorTwo}
                backgroundColor2={baseColors.secondaryColor}
                height={"35px"}
                width={"125px"}
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

export default AppHeader;
