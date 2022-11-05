import React from "react";
import { useState } from "react";
import Zuri from "./tools/zuri.svg";
import IFG from "./tools/i4g.svg";
import { Link } from "react-router-dom";


 export default function Contact() {

  
    return (
      <div className="form">
        <div>
          <h1 className="header">Contact Me</h1>
          <p>Hi, there contact me to ask about anything you have in mind</p>
        </div>
        <form>
          <div className="names">
            <div>
              <label htmlFor="text">First Name</label>
              <br />
              <input
                type="text"
                name="fullName"
                placeholder="Enter your first name"
                id="first_name"
                required
              />

            </div>

            <div>
              <label htmlFor="text">Last name</label>
              <br />
              <input
                type="text"
                name="fullName"
                id="last_name"
                placeholder="Enter your last name"
                required
                  
              />{" "}
             
            </div>
          </div>

    
<label htmlFor="email">Email</label>
<br />
          <input
            type="email"
            placeholder="yourname@email.com"
            id="email"
            required
          />
<br/>
         

         <div className="area">
         <label htmlFor="text">Send me a message</label>
          <textarea
            name="message"
            id="message"
            type="text"
            placeholder="Send me a message and I'll reply as soon as possible..."
            
            cols="30"
            rows="10"
            required></textarea>
         </div>

          <div className="check">
            <input type="checkbox" name="checkbox" id="checkbox" required/>{" "}
            <p>
              You agree to providing your data to Wonuola who may contact you
            </p>
          </div>
          <Link to='/input'>Next</Link>
          <input type="submit" value="Submit" id="btn__submit"
              className="button-tag submit" />
       
        </form>
        <footer>
          <hr />
          <div className="footer">
            <a href="https://training.zuri.team/" className="IFG">
              <img src={IFG} alt="IFG" />
            </a>
            <p>HNG Internship 9 Frontend Task</p>
            <a href="/" className="Zuri">
              <img src={Zuri} alt="zuri" />
            </a>
          </div>
        </footer>
      </div>
    )
    
  
  }

