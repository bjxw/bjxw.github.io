import React, { Component} from 'react';
import CV_PDF from "./pdfs/CV.pdf";
import Profile from '../images/Profile.jpg'
import './css_components/cv.css'

import SinglePagePDFViewer from "./single-page"
import AllPagesPDFViewer from "./all-pages"

export default class CV extends Component{

    render(){
        return (
            <div>
                <div className={'cv-background'}>
                    <img src={Profile} alt={"Ben Wu"} className="avatar"/>
                    
                    <div className='cv-content'>
                        <SinglePagePDFViewer pdf={CV_PDF}/>
                    </div>
                </div>
            </div>
            
        );
    }
}



