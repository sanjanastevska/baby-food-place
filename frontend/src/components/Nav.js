import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {

    return (
        <nav className="navbar">
            <Link to="/"><img src="/images/logo_color.svg" alt="logo" className="logo" /></Link>
            <ul className="nav-menu">
                <li><Link to="/breakfest" className="nav-links">Breakfest </Link></li>
                <li><span className="dot"></span></li>
                <li><Link to="/brunch" className="nav-links">Brunch</Link></li>
                <li><span className="dot"></span></li>
                <li><Link to="/lunch" className="nav-links">Lunch</Link></li>
                <li><span className="dot"></span></li>
                <li><Link to="/dinner" className="nav-links">Dinner</Link></li>
            </ul>
            <div>
                <Link to="/login"><button className="login-btn">LOG IN</button></Link>
                <span style={{marginRight: '17px'}}>or</span>
                <Link to="/register"><button className="register-btn">CREATE ACCOUNT</button></Link>
            </div>
        </nav>
    )
}