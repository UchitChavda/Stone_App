import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Panel } from 'rsuite';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
    const [active, setActive] = useState("1");

    return (
        <Panel bodyFill style={{ borderRadius: "0px", height: "100vh", background: 'linear-gradient(45deg, #dfe9f3, #ffffff)' }}>
            <Nav appearance="subtle" vertical active={active} onSelect={setActive} >
                <Nav.Item as={Link} to="/" eventKey="1">
                    <i className="bi bi-house-door"></i>
                </Nav.Item>
                <Nav.Item as={Link} to="/Customer" eventKey="2">
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