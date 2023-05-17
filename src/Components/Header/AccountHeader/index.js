import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AppLogo , DummyPerson } from "../../../Assets";
import { useNavigate } from 'react-router'
import { BsBell } from "react-icons/bs";
import './style.css'

function AccountHeader() {
  const navigate = useNavigate()
  return (
    <>
        <Navbar  className="px-2 p-0 m-0" style={{height: "50px", minHeight:"40px"}} >
          <Container fluid  
          >
            <Navbar.Brand href="/" className="d-flex align-items-center col-10 m-0 p-0">
              <img alt="" width="150px" height="40px" src={AppLogo}  />
            </Navbar.Brand>

            <Navbar.Brand href="#" className="d-flex align-items-center justify-content-evenly col-2 m-0">
              <BsBell style={{fontSize:"20px"}}/>
              <img alt="" width="35px" height="35px" 
              src={DummyPerson} 
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
   
    </>
  );
}

export default AccountHeader