import React, {Component} from 'react';
import './css_components/home.css'
import Profile from '../images/Profile.jpg'

export default class Home extends Component{

    render(){

        return(
            <div className={'home-background'}>
                <div className={'home-content home-animation'}>
                    Hey there! I'm Ben.
                </div>

                <img src={Profile} alt={"Ben Wu"} className="avatar"/>
            </div>
        );
    }
}