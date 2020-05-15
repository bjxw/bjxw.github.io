import React, {Component} from 'react';
import './css_components/about.css';
import Profile from '../images/Profile.jpg'

export default class About extends Component{

    render(){
        return(
            <div className={"about-background"}>
                <div className={"about-content"}>
                    <p>
                        Hey there!
                    </p>
                    <br/>
                    <p>
                        My name is Ben Wu. I am a software engineer and am also very fond of esports and gaming.
                    </p>
                    <br/>
                    <p>
                        This is my website showcasing these two particular focuses while also giving an inside look as to what makes me tick.
                        Keep in mind, some contents are my personal views or solely for entertainment purposes and do not fully reflect my character all the time.
                    </p>
                    <br/>
                    <p>
                        Welcome!
                    </p>
                    <br/>
                    <img src={Profile} alt={"Ben Wu"} className="avatar"/>
                </div>
            </div>
        );
    }
}