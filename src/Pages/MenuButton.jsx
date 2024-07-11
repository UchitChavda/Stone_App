import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from 'react-bootstrap';

function MenuButton({ isHovered, setIsHovered }) {
    return (
        <>
            <div style={{
                position:'absolute',
                top: 5,
                left: 5,
                zIndex: 1000
            }}>
                <Button 
                onClick={() => setIsHovered(!isHovered)}
                style={{
                    backgroundColor: "white",
                    // border: "none",
                    padding: "5px"
                }}
                >
                    <i class="bi bi-list" style={{color: "black"}}></i>
                </Button>
            </div>
        </>
    )
}

export default MenuButton