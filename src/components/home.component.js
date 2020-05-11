import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css_components/home.css'

export default class Home extends Component{

    render(){

        return(
            <div className={'home-background'}>
                <div className={'home-content home-animation'}>
                    <Link to="/Software_Intro" className={'home-animation'}>Software Engineer. </Link>
                    <Link to="/Esports_Intro" className={'home-animation'}>Esports. </Link>
                    <Link to="/" className={'home-animation'}>Life.</Link>
                </div>
            </div>
        );
    }
}