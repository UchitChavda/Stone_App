import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Main() {

    const [formNo, setFormNo] = useState('');
    const [date, setDate] = useState(null);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [time, setTime] = useState('');
    const [grossWeight, setGrossWeight] = useState('');
    const [tareWeight, setTareWeight] = useState('');
    const [netWeight, setNetWeight] = useState('');
    const [transport, setTransport] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [kmReading, setKmReading] = useState('');
    const [remark, setRemark] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            formNo,
            date,
            name,
            address,
            description,
            quantity,
            time,
            grossWeight,
            tareWeight,
            netWeight,
            transport,
            vehicleNo,
            kmReading,
            remark,
        };
        console.log("Form Data Submitted: ", formData);
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
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Form No."
                                        value={formNo}
                                        onChange={(e) => setFormNo(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Date
                                </Form.Label>
                                <Col sm="10">
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => setDate(date)}
                                        placeholderText="Select Date"
                                    />
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
                                    Quantity
                                </Form.Label>
                                <Col sm="10">
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
                                    Time
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                        </Col>

                        <Col sm="6">

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Gross Weight
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Gross Weight"
                                        value={grossWeight}
                                        onChange={(e) => setGrossWeight(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Tare Weight
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Tare Weight"
                                        value={tareWeight}
                                        onChange={(e) => setTareWeight(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Net Weight
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Net Weight"
                                        value={netWeight}
                                        onChange={(e) => setNetWeight(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Transport
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Transport"
                                        value={transport}
                                        onChange={(e) => setTransport(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Vehicle No.
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Vehicle No."
                                        value={vehicleNo}
                                        onChange={(e) => setVehicleNo(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Km. reading
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Km. reading"
                                        value={kmReading}
                                        onChange={(e) => setKmReading(e.target.value)}
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