import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../actions/userActions';

export function Nav() {

    const userStatus = useSelector((state) => state.userLogin);
    const { userInfo } = userStatus;

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar">
            <Link to="/"><img src="/images/logo_color.svg" alt="logo" className="logo" /></Link>
            <ul className="nav-menu">
                <li><NavLink to="/breakfest" className="nav-links" activeClassName='is-active'>Breakfest </NavLink></li>
                <li><span className="dot"></span></li>
                <li><NavLink to="/brunch" className="nav-links" activeClassName='is-active'>Brunch</NavLink></li>
                <li><span className="dot"></span></li>
                <li><NavLink to="/lunch" className="nav-links" activeClassName='is-active'>Lunch</NavLink></li>
                <li><span className="dot"></span></li>
                <li><NavLink to="/dinner" className="nav-links" activeClassName='is-active'>Dinner</NavLink></li>
            </ul>
            {userInfo ? (
                <div>
                    <ul className="nav-menu-login">
                        <li>
                            <Link to="/recipes" className="nav-links-right link-1">My Recipes</Link>
                        </li>
                        <li><span className="dot black"></span></li>
                        <li><Link to="/profile" className="nav-links-right link-2" >My Profile</Link></li>
                        <li><span className="dot black"></span></li>
                        <li><Link to="#logout" className="nav-links-right" onClick={logoutHandler}>Log Out</Link></li>
                    </ul>
                </div>
            ) : (
                <div>
                    <Link to="/login"><button className="login-btn">LOG IN</button></Link>
                    <span style={{ marginRight: '17px' }}>or</span>
                    <Link to="/register"><button className="register-btn">CREATE ACCOUNT</button></Link>
                </div>
            )}
        </nav>
    )
}
