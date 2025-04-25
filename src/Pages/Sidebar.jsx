import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Panel } from 'rsuite';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
    const [active, setActive] = useState("1");

    return (
        <Panel bordered shaded bodyFill style={{ borderRadius: "0px", height: "100vh" }}>
            <Nav appearance="pills" vertical active={active} onSelect={setActive} style={{ borderRadius: "0px", width: "100%" }}>
                <Nav.Item as={Link} to="/" eventKey="1">
                    <i className="bi bi-house-door"></i>
                </Nav.Item>
                <Nav.Item as={Link} to="/Customers" eventKey="2">
                    <i class="bi bi-cart4"></i>
                </Nav.Item>
                <Nav.Item as={Link} to="/Vechiles" eventKey="3">
                    <i class="bi bi-truck"></i>
                </Nav.Item>
            </Nav>
        </Panel>
    )
}

export default Sidebar