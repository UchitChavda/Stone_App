import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar({ isHovered, setIsHovered }) {

    const handleclick1 = () => {
        setIsHovered(true)
    }

    const handleclick2 = () => {
        setIsHovered(false)
    }

    return (
        <div>
            <Card
                // onMouseEnter={handleclick1}
                // onMouseLeave={handleclick2}
                style={{
                    height: "98vh",
                    border: 'none'
                }}>
                <h3>sidebar</h3>
                <nav>
                    <ul>
                        <li>
                            {/* <div style={{position:'relative'}}> */}
                                <Link to="/" className='stretched-link' >Form</Link>
                            {/* </div> */}
                            {/* <NavLink to="/">Form</NavLink> */}
                            {/* <a href='/'> Form </a> */}
                        </li>
                        <li>
                            <Link to="/vtrns" className='stretched-link' >View transporter</Link>
                            {/* <a href='/vtrns'> View transporter </a> */}
                        </li>
                        <li>
                            <Link to="/addvhcl" className='stretched-link' >Add Vehicle</Link>
                            {/* <a href='/addvhcl'> Add Vehicle </a> */}
                        </li>
                    </ul>
                </nav>
            </Card>
        </div>
    )
}

export default Sidebar