import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

import Nav from 'react-bootstrap/Nav';
import { MDBIcon } from 'mdbreact';

const SignedInLinks = (props) => {
    return (
        <>
            <Nav.Link onClick={props.signOut}><MDBIcon icon="sign-out-alt"/></Nav.Link>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);