import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="logo">
                <h4>과제좀<span>해</span></h4>
            </div>
            <ul className="navlinks">
                <li>
                    <a href="#">미래의</a>
                </li>
                <li>
                    <a href="#">메뉴</a>
                </li>
            </ul>
            
        </nav>
        </>
    )
}

export default Navbar;