import React, {Component} from 'react';
import './css_components/home.css'

export default class Home extends Component{

    render(){
        return(
            <div className={'home-background'}>
                <div className={'home-content home-animation'}>
                    <span className={'home-animation'}>Software Engineer.</span>
                    <span className={'home-animation'}> Esports. </span>
                    <span className={'home-animation'}> Life.</span>
                </div>
            </div>
        );
    }
}