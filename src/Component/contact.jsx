import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook,faPhone,faEnvelope,faearth} from "@fortawesome/free-solid-svg-icons";



function Contact(props) {
    return(
        <div className="container" id="contact">
            <div>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message</p>
            </div>
            <div className="row">
                {/* <h3>Send me Mail</h3>
                <div className="contact-input">
                    <input type='email' placeholder="example@gmail.com"/>
                    <a href ="#">Contact</a>
                </div> */}
                <div class="column">
                    <form>
                        <h2>For any Queries!!!</h2>
                        <label for="fname" >First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                        <label for="lname" >First Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                        <label for="country" >Country</label>
                        <select id="country" name="country">
                            <option value="UK">UK</option>
                            <option value="Japan">Japan</option>
                            <option value="USA">USA</option>
                            <option value="Germany">Germany</option>
                            <option value="INDIA">India</option>
                        </select>
                        <label for="subject" >Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something...."></textarea>
                        <input type="submit" value="submit"></input>
                    </form>
                </div>
                <div class="column">
                    
                    <h2>Our address</h2>
                    <br/>
                    <address>
                        <p><FontAwesomeIcon icon={faAddressBook} />  <b> Address:</b> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        <br/>
                        <p><FontAwesomeIcon icon={faPhone} />  <b>Phone:</b> + 1235 2355 98</p>
                        <br/>
                        <p><FontAwesomeIcon icon={faEnvelope} />  <b>Email:</b> info@yoursite.com</p>
                        <br/>
                        {/* <p><FontAwesomeIcon icon={faearth} />  <b>Website:</b> yoursite.com</p> */}
                    </address>

                </div>
            </div>
        </div>
    )
}
export default Contact;