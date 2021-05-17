import React from 'react';

export function Footer() {

    return (
        <div className="footer">
            <img src="/images/logo_white.svg" alt="logo" className="logo-white" />
            <ul className="footer-menu">
                <li className="footer-list">Breakfest</li>
                <li><span className="dot white"></span></li>
                <li className="footer-list">Brunch</li>
                <li><span className="dot white"></span></li>
                <li className="footer-list">Lunch</li>
                <li><span className="dot white"></span></li>
                <li className="footer-list">Dinner</li>
            </ul>
            <div className="copyright">
                <p>Baby's Food Place <br />
                 copyright © 2021</p>
            </div>
        </div>
    )
}