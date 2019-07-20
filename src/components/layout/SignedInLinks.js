import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { MDBIcon } from 'mdbreact';

const SignedInLinks = (props) => {
    return (
        <>
            <Nav.Link onClick={props.playBtnClick}>Play</Nav.Link>
            <Nav.Link><MDBIcon icon="sign-out-alt" /></Nav.Link>
        </>
    )
}

export default SignedInLinks;