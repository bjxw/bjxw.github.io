import React, { Component} from 'react';
import CV_PDF from "./pdfs/CV.pdf";

import './css_components/cv.css'

import SinglePagePDFViewer from "./single-page"
import AllPagesPDFViewer from "./all-pages"

export default class CV extends Component{

    render(){
        return (
            <div>
                <div className={'cv-background'}>
                    

                    <div className='cv-content'>
                        <SinglePagePDFViewer pdf={CV_PDF}/>
                    </div>
                </div>
            </div>
            
        );
    }
}



