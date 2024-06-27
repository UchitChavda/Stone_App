import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'

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
                onMouseEnter={handleclick1}
                onMouseLeave={handleclick2}
                style={{
                    height: "98vh"
                }}>
                <h3>sidebar</h3>
            </Card>
        </div>
    )
}

export default Sidebar