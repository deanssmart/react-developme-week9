import React from "react";

import { Link } from "react-router-dom";

    const Footer = () => (
        <footer className="fixed-bottom bg-dark">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/number-stuff" className="nav-link">Number Stuff</Link>
                </li>
                <li className="nav-item">
                    <Link to="/wordy-stuff" className="nav-link">Wordy Stuff</Link>
                </li>
                <li className="nav-item">
                    <Link to="/image-stuff" className="nav-link">Image Stuff</Link>
                </li>                
                <li className="nav-item">
                    <Link to="/my-app" className="nav-link">My App</Link>
                </li>
            </ul>
        </footer>    
    );

    export default Footer;