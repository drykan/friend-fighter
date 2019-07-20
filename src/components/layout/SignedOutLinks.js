import React from 'react';

const SignedOutLinks = (props) => {
    return (
        <div className="log-in">
            <button className="btn-login" onClick={() => props.handleShow("login-modal")}><span>LOGIN</span></button>
            <button className="btn-signup" onClick={() => props.handleShow("signup-modal")}><span>SIGNUP</span></button>
        </div>
    )
}

export default SignedOutLinks;