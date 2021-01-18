import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1 className="logo_text">
                    HDD
                </h1>

            </div>
            <ul className="nav-links">
                <li className="links">Home</li>
                <li className="links">About</li>
                <li className="links">Work</li>
                <li className="links"><button>Hire me</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
