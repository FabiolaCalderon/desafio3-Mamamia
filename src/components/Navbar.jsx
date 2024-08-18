import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button } from 'react-bootstrap';

const formatTotal = (total) => {
    return total.toLocaleString();
 }

const MyNavbar = () => {
    const total = 25000;
    const token = false;

    return (

        <>
         <Navbar  bg="dark" data-bs-theme="dark" className="px-5" >

        <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#Home" className="text-white"><Button variant="secondary">🍕Home</Button></Nav.Link>
            {token ? (
                <>
                 <Nav.Link href="#Home" className="text-white"><Button variant="secondary">🔓Profile</Button></Nav.Link>
                 <Nav.Link href="#Home" className="text-white"><Button variant="secondary">🔒Logout</Button></Nav.Link>
                </>
                 ) : (
                <>
                <Nav.Link href="#Home" className="text-white"><Button variant="secondary">🔐Login</Button></Nav.Link>
                <Nav.Link href="#Home" className="text-white"><Button variant="secondary">🔐Register</Button></Nav.Link>
                </>
              )}
        </Nav>

        <Nav className="ms-auto">
            <Button variant="outline-primary"> 🛒  Total ${formatTotal(total)}  </Button>
        </Nav>
        
        </Navbar>

    
    </>
  );
}

export default MyNavbar;
