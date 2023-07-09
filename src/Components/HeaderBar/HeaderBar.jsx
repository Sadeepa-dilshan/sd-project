import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'

function HeaderBar() {
    return(
        <Fragment>
            {/* As a heading  */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <span className="navbar-brand mb-0 h1">Name List</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/namelist">Show Name List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Log in</Link>
                    </li>
                    
                </ul>
            
            </nav>
            {/* end heading */}
        </Fragment>
    );
    
}
export default HeaderBar;