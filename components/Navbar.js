import React from 'react'

function Navbar() {
    return (
        <header className="container">
            <div className="logo">
                <h1 className="logo_text">
                    HDD
                </h1>

            </div>
            <nav>
                <ul className="nav-links">
                    <li className="links">About</li>
                    <li className="links">Work</li>
                    <li className="links"><button>Hire me</button></li>
                </ul>
            </nav>

            <div className="mobile__hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    )
}

export default Navbar
