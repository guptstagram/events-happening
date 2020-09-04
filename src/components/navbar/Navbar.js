import React from 'react';
import {Link} from 'react-router-dom';
import LoggedInNavs from './LoggedInNavs';
import LoggedOutNavs from './LoggedOutNavs';

const Navbar=()=>{
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">EVENTer</Link>
                <LoggedInNavs/>
                <LoggedOutNavs/>
            </div>
        </nav>
    )
}

export default Navbar;