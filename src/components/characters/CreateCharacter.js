import React, { Component } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { createCharacter } from '../../store/actions/characterActions';
import FileUploader from "react-firebase-file-uploader";

// BOOTSTRAP LAYOUT DESIGN
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CreateCharacter extends Component {
    state = {
        show: null,
        title: "",
        image: "",
        imgURL: "",
        description: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleShow = (id) => {
        this.setState({ show: id });
    }

    handleClose = (id) => {
        this.setState({ show: id });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createCharacter(this.state);
        this.handleClose(e);
    }

    handleUploadSuccess = (filename) => {
        this.setState({ image: filename, });
        firebase
            .storage()
            .ref("characters")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ imgURL: url }));
    }

    render() {
        return (
            <div className="log-in-wrapper">
                <button className="btn-create-character" onClick={() => this.handleShow("create-new-char")}><span>Create New Character</span></button>

                {/* Create New Character Modal */}
                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show === "create-new-char"} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create New Character</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Name Your Character" required/>
                            </Form.Group>

                            <Form.Group controlId="formCharImg">
                                <Form.Label>Character Image Upload</Form.Label>
                                <FileUploader 
                                    accept= "image/*"
                                    maxHeight="290px"
                                    maxWidth="290px"
                                    storageRef={firebase.storage().ref("characters")}
                                    onUploadSuccess={this.handleUploadSuccess}
                                />
                                <Form.Text className="img-upload-requirements">
                                    <ul className="img-upload-requirements-list">
                                        <li><strong>Max Files Size:</strong> 150kb</li>
                                        <li><strong>Image Size:</strong> Height 290px | Width 290px </li>
                                    </ul>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Character Description" required/>
                            </Form.Group>


                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                    Create
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCharacter: (character) => dispatch(createCharacter(character))
    }
}

export default connect(null, mapDispatchToProps)(CreateCharacter);
