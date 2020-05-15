import React, {Component} from 'react';
import './css_components/esports-intro.css';

export default class EsportsIntro extends Component{
    render(){
        return(
            <div className={'esports-background'}>
                <div className={'esports-content'}>
                Welcome to my esports section! Esports and video games have been a huge part of my life as a hobby and passion. Growing up I was constantly surrounded by games
                with a a strong influence from Nintendo franchises, years with a Playstation 2, and free PC and flash games in my childhood. In fact, I initially 
                majored in computer science thinking that I would eventually become a game developer.  My first competitive games were Super Smash Bros 64 and Pokemon where I fell in 
                love with games that involved steep learning curves in mechanics or strategy. I eventually moved onto DotA 2 in highschool which quickly became my addiction at around 
                1300 hours just under 2 years. I was involved with Stanford Video Game Association's 2018 rebranding during my time as an undergraduate and only got more involved with 
                the esports community as time went on. By my senior year, I was part of NVIDIA's GeForce Student Beta program. I'm currently still serving as a senior officer of 
                the GeForce Student program and continually branching out my experience in the esports industry. Whether I want to make esports a career or not is really unclear even
                to myself, but one thing is for sure - the communities and people I continually meet through this journey keep me coming back for more every time.
                </div>
            </div>
        );
    }
}