import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css_components/navbar.css';

const Software = props => (
    <div className="dropdown">
        <Link to="/Software_Intro" className="nav-link"> Software </Link> 
        <div className="dropdown-content navbar navbar-dark bg-dark">
            <Link to="/Software_Intro" className = "nav-link"> - Intro </Link>
            <Link to="/ResumeCV" className = "nav-link"> - Resume/CV </Link>
            <Link to="/Portfolio" className = "nav-link"> - Portfolio </Link>
        </div>
    </div>
)

const Gaming = props => (
    <div className="dropdown">
        <Link to="/Esports_Intro" className="nav-link"> Esports </Link> 
        <div className="dropdown-content navbar navbar-dark bg-dark">
            <Link to="/Esports_Intro" className = "nav-link"> - Intro </Link>
            <div className="dropdown2">
                <Link to="/Esports_Collegiate_Professional" className = "nav-link"> - Collegiate/ Professional </Link>
                <div className="dropdown-content2 navbar navbar-dark bg-dark">
                    <div>test 1</div>
                    <div>test 2</div>
                </div>
            </div>
            
        </div>
    </div>
)

export default class Navbar extends Component {

    render(){
        return(
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className ="navbar-brand"> BJXW </Link>
                <div className = "navbar-collapse">
                <ul className = "navbar-nav">
                    <li className = "navbar-item">
                    <Link to="/" className = "nav-link"> Home </Link>
                    </li>

                    <li className = "navbar-item">
                    <Link to="/About" className = "nav-link"> About </Link>
                    </li>

                    <li>
                    <Software/>
                    </li>

                    <li>
                    <Gaming/>
                    </li>

                </ul>
                </div>
            </nav>
        );
    }

}