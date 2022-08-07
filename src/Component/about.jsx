import React from "react";

function About(props) {
    return(
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt=''/>
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Linguistic Cue approaches detect fake news by catching the information manipulators in the writing style of the news content. The main methods that have been implemented under the Linguistic Cue approaches are Data Representation, Deep Syntax, Semantic Analysis, and Sentiment Analysis.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}
export default About;