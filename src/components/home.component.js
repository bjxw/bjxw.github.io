import React, {Component} from 'react';
import './css_components/home.css'

export default class Home extends Component{

    render(){

        return(
            <div className={'home-background'}>
                <div className={'home-content home-animation'}>
                    Hey there! I'm Ben.
                </div>
            </div>
        );
    }
}