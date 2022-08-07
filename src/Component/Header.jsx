import React from 'react';
import Navbar from './Navbar';

function Header(){

    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>“Alternative </span>facts and fake news <span>
                     are just other names for propaganda”</span></h1><br></br>
                <p1 className='details'>“The truth does
                        not become a lie,
                        right does not become
                        wrong, and good does
                        not become evil, just
                        because the minority
                        believes in conspiracy
                        theories & fake news!”<br></br>
                        ― Paul S. Lynch
                </p1>
                <p></p>
                <a href='#' className='cv-btn'>Demo</a>
            </div>
        </div>
    )
}
export default Header;