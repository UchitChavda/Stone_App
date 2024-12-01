import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
import {  Form, Row, Col, Input, SelectPicker, Button, Panel, DatePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";
import Dropdown from 'react-bootstrap/Dropdown';
import instance from '../middleware';
import FormControlContext from '@mui/material/FormControl/FormControlContext';

function Main() {

    const [formNo, setFormNo] = useState(null);
    const [date, setDate] = useState('123');
    const [name, setName] = useState('');
    const [addressOptions, setAddressOptions] = useState([]);
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('123');
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

    const handleNameChange = (value) => {
        const selectedValue = value;
        setName(selectedValue);
        setAddressOptions(nameOptions[selectedValue] || []);
        setAddress('');
    };

    const handleAddressChange = (value) => {
        setAddress(value);
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

    const handleTransportChange = (value) => {
        const selectedValue = value;
        setTransport(selectedValue);
        setVehicleOptions(transportOptions[selectedValue] || []);
        setVehicle('');
    };

    const handleVehicleChange = (value) => {
        setVehicle(value);
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
            <Panel bordered style={{ padding: "10px", backgroundColor: 'whitesmoke' }}>
                <Form fluid>
                    <Row>
                        <Col sm="12" md="6">
                            <Form.Group>
                                <Form.ControlLabel>Form No.</Form.ControlLabel>
                                <Input
                                    type="number"
                                    value={formNo}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Date</Form.ControlLabel>
                                <DatePicker format="MM/dd/yyyy" />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Name</Form.ControlLabel>
                                <SelectPicker
                                    data={Object.keys(nameOptions).map(name => ({ label: name, value: name }))}
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Address</Form.ControlLabel>
                                <SelectPicker
                                    data={addressOptions.map(address => ({ label: address, value: address }))}
                                    value={address}
                                    onChange={handleAddressChange}
                                    disabled={!addressOptions.length}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Description</Form.ControlLabel>
                                <SelectPicker
                                    data={[
                                        { label: "1mm", value: "1mm" },
                                        { label: "2mm", value: "2mm" },
                                        { label: "3mm", value: "3mm" }
                                    ]}
                                    value={description}
                                    onChange={(value) => setDescription(value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Remark</Form.ControlLabel>
                                <Input
                                    type="text"
                                    value={remark}
                                    onChange={(value) => setRemark(value)}
                                />
                            </Form.Group>
                        </Col>

                        <Col sm="12" md="6">
                            <Form.Group>
                                <Form.ControlLabel>Gross Weight</Form.ControlLabel>
                                <Input
                                    type="number"
                                    value={grossWeight}
                                    min="0"
                                    onChange={(value) => setGrossWeight(value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Tare Weight</Form.ControlLabel>
                                <Input
                                    type="number"
                                    value={tareWeight}
                                    min="0"
                                    onChange={(value) => setTareWeight(value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Net Weight</Form.ControlLabel>
                                <Input
                                    type="number"
                                    value={calculateNetWeight()}
                                    min="0"
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Quantity</Form.ControlLabel>
                                <Input
                                    type="number"
                                    value={quantity}
                                    min="0"
                                    onChange={(value) => setQuantity(value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Transport</Form.ControlLabel>
                                <SelectPicker
                                    data={Object.keys(transportOptions).map(transport => ({ label: transport, value: transport }))}
                                    value={transport}
                                    onChange={handleTransportChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Vehicle No.</Form.ControlLabel>
                                <SelectPicker
                                    data={vehicleOptions.map(vehicle => ({ label: vehicle, value: vehicle }))}
                                    value={vehicle}
                                    onChange={handleVehicleChange}
                                    disabled={!vehicleOptions.length}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Km. reading</Form.ControlLabel>
                                <Input
                                    type="number"
                                    value={kmReading}
                                    min="0"
                                    onChange={(value) => setKmReading(value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.ControlLabel>Time</Form.ControlLabel>
                                <Input
                                    type="text"
                                    value={time}
                                    onChange={(value) => setTime(value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div style={{ textAlign: 'center' }}>
                        <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                    </div>
                </Form>
            </Panel>
        </div>
    );
}

export default Main