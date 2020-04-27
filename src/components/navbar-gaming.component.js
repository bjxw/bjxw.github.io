import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css_components/Gaming.css';

export default class Gaming extends Component{

    render(){
        return(
            <div className="dropdown">
                Gaming
                <div className="dropdown-content navbar navbar-dark bg-dark">
                    <Link to="/Gaming_Intro" className = "nav-link"> - Intro </Link>
                    <Link to="/Gaming_Collegiate" className = "nav-link"> - Collegiate/ Professional </Link>
                </div>
            </div>
            
        );
    }
}