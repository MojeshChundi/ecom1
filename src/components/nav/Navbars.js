import { Button } from "react-bootstrap";
import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Navbars = (props) => {
  return (
    <div>
      <Navbar bg="info">
        <Container>
          <Navbar.Brand>HOME</Navbar.Brand>
          <Navbar.Brand>ABOUT</Navbar.Brand>
          <Navbar.Brand>MUSIC</Navbar.Brand>
        </Container>
        <Button varient="success">cat</Button>
      </Navbar>
    </div>
  );
};

export default Navbars;
