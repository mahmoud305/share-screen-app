import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import tone from "./../../sounds/tone.mp3"
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
function MyNavbar() {

  const sendNotification = ()=>{
    console.log("in play");
    new Audio(tone).play();
    console.log("af play");
  }
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand className='fw-bold' href="#secartary">Electronic Warfare Institute</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className=" nav-link "  to={"office"} >Office</NavLink>
          <NavLink className=" nav-link"  to={"secartary"} >Secartary</NavLink>
        </Nav>
        <Nav>
        <button className="btn btn-warning"  onClick={sendNotification} >< NotificationsActiveRoundedIcon/> </button>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MyNavbar