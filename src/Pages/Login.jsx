import React, { useState } from 'react';
import { Form, Input, InputGroup, Button, Col, Divider, toaster, Message, Text, Panel } from 'rsuite';
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import VisibleIcon from '@rsuite/icons/Visible';
import instance from '../middleware';
import Stone from "../Assets/stone.jpg"

const Login = ({ setIsAuthenticated }) => {
    const [formusername, setFormName] = useState('');
    const [formPass, setFormPass] = useState('');
    const [visible, setVisible] = useState(false);

    const handleChange = () => {
        setVisible(!visible);
    };

    const handleSubmit = async () => {
        try {
            if (!formusername || !formPass) {
                toaster.push(
                    <Message showIcon type="error" closable >
                        UserID or Password Missing.
                    </Message>,
                    { placement: 'topEnd', duration: 8000 }
                );
                return;
            }
            const formData = new FormData();
            formData.append("phone", formusername);
            formData.append("password", formPass);
            const response = await instance.post(`/login`, formData);
            console.log(response.data)
            if (response.status === 200) {
                setIsAuthenticated(true);
                localStorage.setItem("token", "yes");
            }
        } catch (error) {
            setIsAuthenticated(false);
            toaster.push(
                <Message showIcon type="error" closable >
                    Incorrect Username or Password. Please try again.
                </Message>,
                { placement: 'topEnd', duration: 8000 }
            );
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f1f1f1',
        }}>
            <Panel bordered shaded style={{ width: '70%', padding: "1.5%", backgroundColor: 'white' }}>
                <Col lg={9} md={9} sm={24} xs={24} style={{ height: "40vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={Stone}
                        alt="IMG"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Col>


                <Col lg={1} md={1} smHidden xsHidden>
                    <Divider vertical style={{ width: "0.1px", backgroundColor: 'black', height: '45vh' }} />
                </Col>

                <Col lg={14} md={14} sm={24} xs={24}>
                    <h2
                        style={{
                            fontSize: '150%',
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        Welcome
                    </h2>
                    <Form fluid>
                        <Form.Group>
                            <Form.ControlLabel>User ID</Form.ControlLabel>
                            <Input type="text" onChange={(value) => setFormName(value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <InputGroup>
                                <Input type={visible ? 'text' : 'password'} onChange={setFormPass} />
                                <InputGroup.Button onClick={handleChange}>
                                    {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                                </InputGroup.Button>
                            </InputGroup>
                        </Form.Group>
                        <Button
                            appearance="primary"
                            color='blue'
                            onClick={handleSubmit}
                            block
                        >
                            Login
                        </Button>
                    </Form>
                </Col>
            </Panel>
        </div>
    );
};

export default Login;