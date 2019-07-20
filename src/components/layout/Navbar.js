import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignedInLinks from './SignedInLinks';


const MainNavbar = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">Friend Fighter</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    {props.auth ? <SignedInLinks playBtnClick={props.playBtnClick} /> : null }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar;