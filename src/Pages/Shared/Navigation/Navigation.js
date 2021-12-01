import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IoMenu, IoClose } from "react-icons/io5";
import './Navigation.css';

const Navigation = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (

        <div className="navigation">
            <div className="navbarItems container mx-auto">
                <h1 className="navbar-logo">Mamun Ar Roshid</h1>
                {/* menu icon */}
                <div className="menu-icon" onClick={handleClick}>
                    {
                        clicked ? <IoClose style={{ color: 'white', width: '35px', fontWeight: '700', marginTop: '5px' }} /> : <IoMenu style={{ color: 'white', width: '35px', fontWeight: '700', marginTop: '5px' }} />
                    }
                </div>
                {/* nav bar */}
                <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/home">Home</NavLink>

                    <HashLink className="nav-links" style={{ textDecoration: 'none' }} to="/about">About</HashLink>
                    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/blog">Blog</NavLink>
                    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/projects">Explore Projects</NavLink>
                </div>
            </div>
        </div>

    );
};

export default Navigation;