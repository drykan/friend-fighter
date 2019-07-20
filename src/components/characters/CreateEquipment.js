import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEquipment } from '../../store/actions/characterActions';

// BOOTSTRAP LAYOUT DESIGN
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CreateEquipment extends Component {
    state = {
        show: null,
        title: "",
        imgLink: "",
        imgFile: null,
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
        console.log(this.state)
        this.props.createCharacter(this.state);
        this.handleClose(e);
    }

    handFileSelect = e => {
        console.log(e.target.files[0]);
    }

    render() {
        return (
            <div className="log-in-wrapper">
                <button className="btn-create-character" onClick={() => this.handleShow("create-new-equip")}><span>Create New Equipment</span></button>

                {/* Create New Character Modal */}
                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show === "create-new-equip"} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create New Equipment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Name Your Equipmentr" />
                            </Form.Group>

                            <Form.Group controlId="formImg">
                                <Form.Label>Equipment Image Upload</Form.Label>
                                <Form.Control type="file" name="imgFile" onChange={this.handFileSelect} value={this.state.img} placeholder="Upload File" />
                                <Form.Text className="img-upload-requirements">
                                    <ul className="img-upload-requirements-list">
                                        <li><strong>Max Files Size:</strong> 75kb</li>
                                        <li><strong>Image Size:</strong> Height 128px | Width 128px </li>
                                        <li><strong>Background:</strong> White </li>
                                    </ul>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formImg">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Character Description" />
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
