import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { DatePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";
import Dropdown from 'react-bootstrap/Dropdown';
import instance from '../middleware';
import FormControlContext from '@mui/material/FormControl/FormControlContext';

function Main() {

    const [formNo, setFormNo] = useState(null);
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [addressOptions, setAddressOptions] = useState([]);
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(new Date());
    const [grossWeight, setGrossWeight] = useState(null);
    const [tareWeight, setTareWeight] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [transport, setTransport] = useState('');
    const [vehicleOptions, setVehicleOptions] = useState([]);
    const [vehicle, setVehicle] = useState('');
    const [kmReading, setKmReading] = useState(null);
    const [remark, setRemark] = useState('');

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

    const handleDateChange = (value) => {
        setDate(value);
    };

    const handleTimeChange = (value) => {
        setTime(value);
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

    const calculateNetWeight = () => {
        if (grossWeight && tareWeight) {
            if (grossWeight < tareWeight) {
                return 0;
            }
            return grossWeight - tareWeight;
        }
        return "";
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
                                        type="number"
                                        placeholder="Form No."
                                        value={formNo}
                                        readOnly
                                    />
                                </Col>
                                <Form.Label column sm="2">
                                    Date
                                </Form.Label>
                                <Col sm='4'>
                                    <DatePicker oneTap appearance="subtle" placeholder="Select Date" onChange={handleDateChange} format="dd/MM/yyyy" />
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
                                    <Form.Select
                                        aria-label="Thickness select"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    >
                                        <option value="1mm">1mm</option>
                                        <option value="2mm">2mm</option>
                                        <option value="3mm">3mm</option>
                                    </Form.Select>
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
                                        type="number"
                                        placeholder="Gross Weight"
                                        value={grossWeight}
                                        min="0"
                                        onChange={(e) => setGrossWeight(e.target.value)}
                                    />
                                </Col>
                                <Form.Label column sm='auto' >
                                    Tare Weight
                                </Form.Label>
                                <Col >
                                    <Form.Control
                                        type="number"
                                        placeholder="Tare Weight"
                                        value={tareWeight}
                                        min="0"
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
                                        type="number"
                                        placeholder="Net Weight"
                                        value={calculateNetWeight()}
                                        min="0"
                                        readOnly
                                    />
                                </Col>
                                <Form.Label column sm='2'>
                                    Quantity
                                </Form.Label>
                                <Col >
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        value={quantity}
                                        min="0"
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
                                        type="number"
                                        placeholder="Km. reading"
                                        value={kmReading}
                                        min="0"
                                        onChange={(e) => setKmReading(e.target.value)}
                                    />
                                </Col>
                                <Form.Label column sm="2">
                                    Time
                                </Form.Label>
                                <Col s>
                                    <DatePicker appearance="subtle" showMeridiem placeholder="Select Time" onChange={handleTimeChange} format="hh:mm aa" />
                                </Col>
                            </Form.Group>

                        </Col>
                    </Row>
                    <center>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </center>
                </Form>
            </Card >
        </div >
    )
}

export default Main