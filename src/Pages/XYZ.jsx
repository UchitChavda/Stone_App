import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Main() {
    return (
        <div style={{ marginTop: "1.875rem" }}>
            <Form>

                <Row>

                    <Col sm="6">

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Form No.
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Form No." />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Date
                            </Form.Label>
                            <Col sm="10">
                                {/* <Form.Control type="text" placeholder="Date" /> */}
                                <DatePicker />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Address" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Description" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Quantity
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Number of" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Time
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Time" />
                            </Col>
                        </Form.Group>

                    </Col>

                    <Col sm="6">

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Gross Weight
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Gross Weight" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Tare Weight
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Tare Weight" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Net Weight
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Net Weight" />
                            </Col>
                        </Form.Group>



                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Transport
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Transport" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Vehicle No.
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Vehicle No." />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Km. reading
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Km. reading" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Remark
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Remark" />
                            </Col>
                        </Form.Group>

                    </Col>

                </Row>

            </Form>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Main