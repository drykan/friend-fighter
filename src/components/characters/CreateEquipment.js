import React, { Component } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { createEquipment } from '../../store/actions/characterActions';

// BOOTSTRAP LAYOUT DESIGN
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CreateEquipment extends Component {
    constructor(props) {
        super(props);

    this.state = {
        show: null,
        title: "",
        image: "",
        imgURL: "",
        description: ""
    }
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
        this.props.createEquipment(this.state);
        this.handleClose(e);
    }

    handleUploadSuccess = (e) => {
        const image = e.target.files[0];
        const storageRef = firebase.storage().ref("equipment/" + image.name);

        this.setState({ image: image.name }, () => {
            storageRef.put(image).then(() => {
                storageRef.getDownloadURL().then(url => this.setState({ imgURL: url }));
            });
        });
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
                                <Form.Control type='file' value={this.state.img} onChange={this.handleUploadSuccess} />
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
        createEquipment: (equipment) => dispatch(createEquipment(equipment))
    }
}

export default connect(null, mapDispatchToProps)(CreateEquipment);
