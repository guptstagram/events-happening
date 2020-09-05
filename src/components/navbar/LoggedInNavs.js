import React from 'react';
import {NavLink} from 'react-router-dom';

const LoggedInNavs=()=>{
    return(
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/addEvent">Add Event</NavLink></li>
            <li><NavLink to="/Logout">Log Out</NavLink></li>
            <li><NavLink to="/">Sourabh</NavLink></li>
        </ul>
    )
}

export default LoggedInNavs;