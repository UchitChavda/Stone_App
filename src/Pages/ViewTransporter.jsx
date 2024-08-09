import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

function ViewTransporter() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        setShow(false);
        alert("Vehicle Added Successfully")
    }


    return (
        <div style={{ marginTop: "1.5rem" }}>
            <Card>
                <Col sm='6'>
                    <Card>
                        <h6>Transportet Name</h6>
                        <ul>
                            <li>Vehicle No. </li>
                            <li>Vehicle No. </li>
                            <li>Vehicle No. </li>
                        </ul>
                    </Card>
                </Col>

                <Button variant="primary" style={{ width: "200px" }} onClick={handleShow}>
                    Add Vehicle
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Vehicle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Transporter
                            </Form.Label>
                            <Col sm="9">
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Vehicle No.
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Vehicle No." />
                            </Col>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </Card>
        </div>
    )
}

export default ViewTransporter