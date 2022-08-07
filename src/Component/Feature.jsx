import React from "react";
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';
function Feature() {
    return(
        <div id="features">
            <div className="a-container">
            <FeatureBox image={featureimage} title='Linkdin Feature Demo' defination='Linkdin also consist fake news'/>
            <FeatureBox image={featureimage1} title='Twitter Feature Demo' defination='twitter also consist fake news'/>
            <FeatureBox image={featureimage2} title='Youtube Feature Demo' defination='youtube also consist fake news'/>    
            </div>
        </div>
    )
}
export default Feature;