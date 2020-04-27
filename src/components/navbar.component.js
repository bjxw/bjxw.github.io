import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Gaming from "./navbar-gaming.component";

export default class Navbar extends Component {

    render(){
        return(
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className ="navbar-brand"> BJXW </Link>
                <div className = "collapse navbar-collapse">
                <ul className = "navbar-nav mr-auto">
                    <li className = "navbar-item">
                    <Link to="/" className = "nav-link"> Home </Link>
                    </li>

                    <li className = "navbar-item">
                    <Link to="/About" className = "nav-link"> About </Link>
                    </li>

                    <li className = "navbar-item">
                    <Link to="/Projects" className = "nav-link"> Projects </Link>
                    </li>

                    <li className = "nav-link">
                    <Gaming/>
                    </li>

                </ul>
                </div>
            </nav>
        );
    }

}