import React from 'react';
import {NavLink} from 'react-router-dom';

const LoggedOutNavs=()=>{
    return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
    )
}

export default LoggedOutNavs;