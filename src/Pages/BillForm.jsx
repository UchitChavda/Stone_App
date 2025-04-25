import React, { useState } from 'react'
import { Form, Row, Col, Input, SelectPicker, Button, Panel, DatePicker } from 'rsuite';
import "rsuite/dist/rsuite-no-reset.min.css";
import instance from '../middleware';
import './styles.css'

function Main() {
    const [formNo, setFormNo] = useState(null);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [royalty, setRoyalty] = useState(null);
    const [name, setName] = useState('');
    const [addressOptions, setAddressOptions] = useState([]);
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
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
        const gross = parseFloat(grossWeight);
        const tare = parseFloat(tareWeight);
        if (!isNaN(gross) && !isNaN(tare)) {
            if (gross < tare) {
                return 0;
            }
            return parseFloat((gross - tare).toFixed(2));
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
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Panel style={{ padding: "0px" }}>
            <Form>
                <Row style={{ marginBottom: '1rem' }}>
                    <Col sm="18" md="6">
                        <Form.Group>
                            <Form.ControlLabel>Bill No.</Form.ControlLabel>
                            <Input
                                type="number"
                                plaintext
                                value={formNo}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="18" md="6">
                        <Form.Group>
                            <Form.ControlLabel>Date</Form.ControlLabel>
                            <DatePicker
                                format="dd/MM/yyyy"
                                block
                                appearance='subtle'
                                placeholder='Select Date'
                                onChange={handleDateChange}
                                value={date}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="18" md="6">
                        <Form.Group>
                            <Form.ControlLabel>Time</Form.ControlLabel>
                            <DatePicker
                                block
                                format="hh:mm aa"
                                showMeridiem
                                appearance='subtle'
                                placeholder='Select Time'
                                onChange={handleTimeChange}
                                value={time}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="18" md="6">
                        <Form.Group>
                            <Form.ControlLabel>Royalty Number</Form.ControlLabel>
                            <Input
                                type="number"
                                value={royalty}
                                min="0"
                                onChange={(value) => setRoyalty(value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '1rem' }}>
                    <Col sm="36" md="12">
                        <Form.Group>
                            <Form.ControlLabel>Name</Form.ControlLabel>
                            <SelectPicker
                                data={Object.keys(nameOptions).map(name => ({ label: name, value: name }))}
                                value={name}
                                onChange={handleNameChange}
                                block
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="36" md="12">
                        <Form.Group>
                            <Form.ControlLabel>Address</Form.ControlLabel>
                            <SelectPicker
                                data={addressOptions.map(address => ({ label: address, value: address }))}
                                value={address}
                                onChange={handleAddressChange}
                                disabled={!addressOptions.length}
                                block
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '1rem' }}>
                    <Col sm="36" md="24">
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
                                block
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '1rem' }}>
                    <Col sm="24" md="8">
                        <Form.Group>
                            <Form.ControlLabel>Gross Weight</Form.ControlLabel>
                            <Input
                                type="number"
                                value={grossWeight}
                                min="0"
                                onChange={(value) => setGrossWeight(value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="24" md="8">
                        <Form.Group>
                            <Form.ControlLabel>Tare Weight</Form.ControlLabel>
                            <Input
                                type="number"
                                value={tareWeight}
                                min="0"
                                onChange={(value) => setTareWeight(value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="24" md="8">
                        <Form.Group>
                            <Form.ControlLabel>Net Weight</Form.ControlLabel>
                            <Input
                                type="number"
                                value={calculateNetWeight()}
                                min="0"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '1rem' }}>
                    <Col sm="36" md="12">
                        <Form.Group>
                            <Form.ControlLabel>Transport</Form.ControlLabel>
                            <SelectPicker
                                data={Object.keys(transportOptions).map(transport => ({ label: transport, value: transport }))}
                                value={transport}
                                onChange={handleTransportChange}
                                block
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="36" md="12">
                        <Form.Group>
                            <Form.ControlLabel>Vehicle No.</Form.ControlLabel>
                            <SelectPicker
                                data={vehicleOptions.map(vehicle => ({ label: vehicle, value: vehicle }))}
                                value={vehicle}
                                onChange={handleVehicleChange}
                                disabled={!vehicleOptions.length}
                                block
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '1rem' }}>
                    <Col sm="36" md="12">
                        <Form.Group>
                            <Form.ControlLabel>Quantity</Form.ControlLabel>
                            <Input
                                type="number"
                                value={quantity}
                                min="0"
                                onChange={(value) => setQuantity(value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="36" md="12">
                        <Form.Group>
                            <Form.ControlLabel>Km. reading</Form.ControlLabel>
                            <Input
                                type="number"
                                value={kmReading}
                                min="0"
                                onChange={(value) => setKmReading(value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '1rem' }}>
                    <Col sm="24">
                        <Form.Group>
                            <Form.ControlLabel>Remark</Form.ControlLabel>
                            <Input
                                type="text"
                                value={remark}
                                onChange={(value) => setRemark(value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div style={{ textAlign: 'center' }}>
                    <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </Form>
        </Panel>
    );
}

export default Main