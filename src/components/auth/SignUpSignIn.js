import React from 'react';
// import fire from './firebase';
import { connect } from 'react-redux';
import { signIn, signUp } from '../../store/actions/authActions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import SignedOutLinks from '../layout/SignedOutLinks';

class SignUpSignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: null,
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignup = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        this.handleClose(e);        
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        this.handleClose(e);
    }

    // BOOTSTRAP MODAL CONTROL
    handleShow = (id) => {
        this.setState({ show: id });
    }

    handleClose = (id) => {
        this.setState({ show: id });
    }

    render() {
        const { authError } = this.props;

        return (
            <div className="log-in-wrapper">
                <SignedOutLinks handleShow={this.handleShow} />
                { authError ? 
                    <Alert variant="danger" className="login-error" >{authError}</Alert>
                    :
                    null
                }

                {/* Login Modal */}
                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show === "login-modal"} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                            </Form.Group>

                            <Modal.Footer>
                                {/* <Button variant="primary" onClick={this.loginWithFacebook}>
                                    Login with Facebook
                                </Button> */}
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit" onClick={this.handleLogin}>
                                    Login
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* Signup Modal */}
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show === "signup-modal"} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit" onClick={this.handleSignup}>
                                    Signup
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
        );
    }    
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSignIn);
