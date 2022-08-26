import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { FaSistrix } from 'react-icons/fa';
function Header() {
    return (
        <div>
            <Navbar expand="lg" className='navbar'>
                <Container >
                    <Navbar.Brand href="#"><img src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/logo.png" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='p-lg-3'>Home</Nav.Link>
                            <Nav.Link href="#action2" className='p-lg-3'>Services</Nav.Link>
                            <Nav.Link href="#action3" className='p-lg-3'>Portolio</Nav.Link>
                            <Nav.Link href="#action4" className='p-lg-3'>About</Nav.Link>
                            <Nav.Link href="#" className='p-lg-3'>Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex align-items-center me-3 mb-2">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-1"
                                aria-label="Search"
                            />
                            <FaSistrix className='search' />
                        </Form>
                        <a className='btn  rounded-pill button-main' href="#">login</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
