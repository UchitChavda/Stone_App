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
    const [addressOptions, setAddressOptions] = useState([]);
    const [address, setAddress] = useState('123');
    const [description, setDescription] = useState('123');
    const [quantity, setQuantity] = useState('123');
    const [time, setTime] = useState('123');
    const [grossWeight, setGrossWeight] = useState('123');
    const [tareWeight, setTareWeight] = useState('123');
    const [netWeight, setNetWeight] = useState('123');
    const [transport, setTransport] = useState('');
    const [vehicleOptions, setVehicleOptions] = useState([]);
    const [vehicle, setVehicle] = useState('');
    const [kmReading, setKmReading] = useState('123');
    const [remark, setRemark] = useState('123');

    const nameOptions = {
        Bus: ['Bus-101', 'Bus-102', 'Bus-103'],
        Train: ['Train-A1', 'Train-B2', 'Train-C3'],
        Flight: ['Flight-X', 'Flight-Y', 'Flight-Z'],
    };

    const transportOptions = {
        Bus: ['Bus-101', 'Bus-102', 'Bus-103'],
        Train: ['Train-A1', 'Train-B2', 'Train-C3'],
        Flight: ['Flight-X', 'Flight-Y', 'Flight-Z'],
    };

    const handleNameChange = (event) => {
        const selectedValue = event.target.value;
        setName(selectedValue);
        setAddressOptions(nameOptions[selectedValue] || []);
        setAddress('');
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleTransportChange = (event) => {
        const selectedValue = event.target.value;
        setTransport(selectedValue);
        setVehicleOptions(transportOptions[selectedValue] || []);
        setVehicle('');
    };

    const handleVehicleChange = (event) => {
        setVehicle(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            // const response = await instance.post('/NewBill', `billnumber=${formNo}&date=${date}&name=${name}&address=${address}&description=${description}&quantity=${quantity}&time=${time}&grossWeight=${grossWeight}&tareWeight=${tareWeight}&netWeight=${netWeight}&transport=${transport}&vehicleNo=${vehicleNo}&kmReading=${kmReading}&remark=${remark}`);
            console.log('Response:');
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
                                    <Form.Select
                                        aria-label="Name select"
                                        value={name}
                                        onChange={handleNameChange}
                                    >
                                        {Object.keys(nameOptions).map((name) => (
                                            <option key={name} value={name}>
                                                {name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Address
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Select
                                        aria-label="Address select"
                                        value={address}
                                        onChange={handleAddressChange}
                                        disabled={!addressOptions.length}
                                    >
                                        {addressOptions.map((address) => (
                                            <option key={address} value={address}>
                                                {address}
                                            </option>
                                        ))}
                                    </Form.Select>
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
                                    <Form.Select
                                        aria-label="Transport select"
                                        value={transport}
                                        onChange={handleTransportChange}
                                    >
                                        {Object.keys(transportOptions).map((transport) => (
                                            <option key={transport} value={transport}>
                                                {transport}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Form.Label column sm="2">
                                    Vehicle No.
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Select
                                        aria-label="Vehicle select"
                                        value={vehicle}
                                        onChange={handleVehicleChange}
                                        disabled={!vehicleOptions.length}
                                    >
                                        {vehicleOptions.map((vehicle) => (
                                            <option key={vehicle} value={vehicle}>
                                                {vehicle}
                                            </option>
                                        ))}
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