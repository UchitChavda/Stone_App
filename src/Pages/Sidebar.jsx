import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from "react-router-dom";

function Sidebar({ isHovered, setIsHovered }) {

    const listItems = document.querySelectorAll('.hover-list li');

    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            listItems.forEach(i => {
                if (i !== item) {
                    i.style.opacity = '0.5';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            listItems.forEach(i => {
                i.style.opacity = '1';
            });
        });
    });

    return (
        <div>
            <Card
                style={{
                    height: "98vh",
                    border: 'none'
                }}>
                <h3>sidebar</h3>
                <nav>
                    <ul className='hover-list'>
                        <li>
                            <i class="bi bi-receipt" style={{ marginRight: "10px", marginLeft: "10px" }}></i>
                            <Link to="/" className='stretched-link' >Form</Link>
                        </li>
                        <li>
                            <i class="bi bi-truck" style={{ marginRight: "10px", marginLeft: "10px" }}></i>
                            <Link to="/vtrns" className='stretched-link' >Transporter</Link>
                        </li>
                        <li>
                            <i class="bi bi-person-vcard" style={{ marginRight: "10px", marginLeft: "10px" }}></i>
                            <Link to="/addvhcl" className='stretched-link' >Add Vehicle</Link>
                        </li>
                    </ul>
                </nav>
            </Card>
        </div>
    )
}

export default Sidebar