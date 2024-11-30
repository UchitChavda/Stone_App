import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import Dropdown from 'react-bootstrap/Dropdown';
import "react-datepicker/dist/react-datepicker.css";
import instance from '../middleware';
import FormControlContext from '@mui/material/FormControl/FormControlContext';

function Main() {

    const [formNo, setFormNo] = useState('123');
    const [date, setDate] = useState('123');
    const [name, setName] = useState('123');
    const [address, setAddress] = useState('123');
    const [description, setDescription] = useState('123');
    const [quantity, setQuantity] = useState('123');
    const [time, setTime] = useState('123');
    const [grossWeight, setGrossWeight] = useState('123');
    const [tareWeight, setTareWeight] = useState('123');
    const [netWeight, setNetWeight] = useState('123');
    const [transport, setTransport] = useState('123');
    const [vehicleNo, setVehicleNo] = useState('123');
    const [kmReading, setKmReading] = useState('123');
    const [remark, setRemark] = useState('123');

    const handleSubmit = async () => {
        try {
            const response = await instance.post('/NewBill',`billnumber=${formNo}&date=${date}&name=${name}&address=${address}&description=${description}&quantity=${quantity}&time=${time}&grossWeight=${grossWeight}&tareWeight=${tareWeight}&netWeight=${netWeight}&transport=${transport}&vehicleNo=${vehicleNo}&kmReading=${kmReading}&remark=${remark}`);              
            console.log('Response:', response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ marginTop: "1.5rem" }}>
            <Card style={{ padding: "10px", backgroundColor: 'whitesmoke' }}>
                <Form>
                    <Row>
                        <Col sm="6">
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Form No.
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control
                                        type="text"
                                        placeholder="Form No."
                                        value={formNo}
                                        onChange={(e) => setFormNo((e.target.value))}
                                    />
                                </Col>
                                <Form.Label column sm="2">
                                    Date
                                </Form.Label>
                                <Col sm='4'>
                                    <input type='date' placeholder='Select Date'></input>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Address
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Description
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Remark
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Remark"
                                        value={remark}
                                        onChange={(e) => setRemark(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                        </Col>
                        <Col sm="6">
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm='auto' >
                                    Gross Weight
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Gross Weight"
                                        value={grossWeight}
                                        onChange={(e) => setGrossWeight(e.target.value)}
                                    />
                                </Col>
                                <Form.Label column sm='auto' >
                                    Tare Weight
                                </Form.Label>
                                <Col >
                                    <Form.Control
                                        type="text"
                                        placeholder="Tare Weight"
                                        value={tareWeight}
                                        onChange={(e) => setTareWeight(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm='2' >
                                    Net Weight
                                </Form.Label>
                                <Col >
                                    <Form.Control
                                        type="text"
                                        placeholder="Net Weight"
                                        value={netWeight}
                                        onChange={(e) => setNetWeight(e.target.value)}
                                    />
                                </Col>
                                <Form.Label column sm='2'>
                                    Quantity
                                </Form.Label>
                                <Col >
                                    <Form.Control
                                        type="text"
                                        placeholder="Number of"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Transport
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Form.Label column sm="2">
                                    Vehicle No.
                                </Form.Label>
                                <Col sm="4">
                                    {/* <Form.Control
                                        type="text"
                                        placeholder="Vehicle No."
                                        value={vehicleNo}
                                        onChange={(e) => setVehicleNo(e.target.value)}
                                    /> */}
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Km. reading
                                </Form.Label>
                                <Col >
                                    <Form.Control
                                        type="text"
                                        placeholder="Km. reading"
                                        value={kmReading}
                                        onChange={(e) => setKmReading(e.target.value)}
                                    />
                                </Col>
                                <Form.Label column sm="2">
                                    Time
                                </Form.Label>
                                <Col s>
                                    <Form.Control
                                        type="text"
                                        placeholder="Time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                        </Col>
                    </Row>
                    <center>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </center>
                </Form>
            </Card>
        </div>
    )
}

export default Main