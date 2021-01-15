import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css_components/navbar.css';

export default class Navbar extends Component {

    render(){
        return(
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className ="navbar-brand"> Ben Wu </Link>
                <div className = "navbar-collapse">
                <ul className = "navbar-nav">
                    <li className = "navbar-item">
                    <Link to="/" className = "nav-link"> Home </Link>
                    </li>

                    <li className = "navbar-item">
                    <Link to="/CV" className = "nav-link"> CV/Resume </Link>
                    </li>

                </ul>
                </div>
            </nav>
        );
    }

}