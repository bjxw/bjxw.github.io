import React, {Component} from 'react';
import "./css_components/software-intro.css"

export default class SoftwareIntro extends Component{

    render(){
        return(
            <div className={"software-background"}>
                <div className={"software-content"}>
                    Welcome to my Software section! It's more or less everything related to what I have done with Computer Science. 
                    I majored and graduated Stanford University with a Bachelors of Science in Computer Science with a focus in Graphics in 2019.
                    I primarily used C++ during my work at Stanford and eventually picked up JavaScript my junior year and have been working on web
                    applications ever since. In fact, this entire site is using a MERN stack!
                </div>
            </div>
        );
    }
}