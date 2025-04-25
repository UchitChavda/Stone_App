import React, { useState } from 'react'
import {
    Form,
    Input,
    InputGroup,
    Button,
    Col,
    Row,
    toaster,
    Message,
    Text,
    Panel,
    PanelGroup,
    Modal
} from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import SearchIcon from '@rsuite/icons/Search';

function ViewCustomer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        setShow(false);
        alert("Vehicle Added Successfully")
    }

    return (
        <Panel
            bordered
            shaded
            style={{
                height: "auto",
                marginBottom: "2vh",
                minHeight: "100vh",
                marginTop: "2vh",
                overflow: 'hidden',
            }}>
            <Row>
                <Col sm={24} xs={24} lg={12} md={12}>
                    <Text style={{
                        fontSize: "150%",
                        fontWeight: '600',
                    }}>Customer Management</Text>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Col lg={16} md={16} sm={12} xs={24}>
                        <InputGroup inside>
                            <Input
                                placeholder="Search Customer..."
                                // value={searchQuery}
                                // onChange={setSearchQuery}
                            />
                            <InputGroup.Addon>
                                <SearchIcon />
                            </InputGroup.Addon>
                        </InputGroup>
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={24}>
                        <Button
                            startIcon={<PlusIcon />}
                            // onClick={handleOpen}
                            appearance='primary'
                            color='blue'
                            block
                        >
                            Add New Customer
                        </Button>
                    </Col>
                </Col>
            </Row>
        </Panel>
        // <div style={{ marginTop: "1.5rem" }}>
        //     <Card>
        //         <Card>
        //             <Container style={{ maxHeight: "500px", overflowY: 'scroll', overflowX: 'hidden' }}>
        //                 <Row>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                     <Col sm='6'>
        //                         <Card className='transCard'>
        //                             <h6>Transportet Name</h6>
        //                             <ul>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                                 <li>Vehicle No. </li>
        //                             </ul>
        //                         </Card>
        //                     </Col>
        //                 </Row>
        //             </Container>
        //         </Card>
        //         <Button
        //             id='addVehBut'
        //             variant="primary"
        //             style={{
        //                 width: "200px",
        //                 justifySelf: 'center',
        //                 alignSelf: 'center',
        //             }}
        //             onClick={handleShow}>
        //             Add Vehicle
        //         </Button>

        //         <Modal
        //             show={show}
        //             onHide={handleClose}
        //             backdrop="static"
        //             keyboard={false}
        //         >
        //             <Modal.Header closeButton>
        //                 <Modal.Title>Add Vehicle</Modal.Title>
        //             </Modal.Header>
        //             <Modal.Body>

        //                 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        //                     <Form.Label column sm="3">
        //                         Transporter
        //                     </Form.Label>
        //                     <Col sm="9">
        //                         <Form.Select aria-label="Default select example">
        //                             <option>Open this select menu</option>
        //                             <option value="1">One</option>
        //                             <option value="2">Two</option>
        //                             <option value="3">Three</option>
        //                         </Form.Select>
        //                     </Col>
        //                 </Form.Group>

        //                 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        //                     <Form.Label column sm="3">
        //                         Vehicle No.
        //                     </Form.Label>
        //                     <Col sm="9">
        //                         <Form.Control type="text" placeholder="Vehicle No." />
        //                     </Col>
        //                 </Form.Group>

        //             </Modal.Body>
        //             <Modal.Footer>
        //                 <Button variant="danger" onClick={handleClose}>
        //                     Cancel
        //                 </Button>
        //                 <Button variant="primary" onClick={handleAdd}>Add</Button>
        //             </Modal.Footer>
        //         </Modal>
        //     </Card>
        // </div>
    )
}

export default ViewCustomer;