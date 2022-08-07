import React,{useState} from 'react';
import veritometrics from '../images/veritometrics.png';


function Navbar(){

    const[nav, setnav] = useState(false);
    const changeBackground = ()=>{
        if(window.scroll >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
        <nav className={nav ? 'nav-active' :'nav'}>
            <a href='#' className='logo'>
                <img src={veritometrics} alt=''/>
            <h1 className='cmpyName'>Veritometrics</h1>
            </a>
            {/* name effect  */}
            <input type= 'checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#main'>Demo</a></li>
                <li><a href='#Sponsers'>Sponsers</a></li>
                <li><a href='#contact'>Contact Us</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;