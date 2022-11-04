import React from "react";
import { useState } from "react";
import Zuri from "./tools/zuri.svg";
import IFG from "./tools/i4g.svg";

function Contact() {
  const [input, setInput] = useState(" ");
  const [textnote, setTextNote] = useState(" ");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleChanger = (event) => {
    setTextNote(event.target.value);
  };
  const handleSubmit = (e) => {
    if (!this.validate() || input === null || input === "") {
      e.preventDefault();
    }
  };

  return (
    <div className="form">
      <div>
        <h1 className="header">Contact Me</h1>
        <p>Hi, there contact me toask about anything you have in mind</p>
      </div>
      <form className="form-details" onSubmit={handleSubmit}>
        <div className="names">
          <div>
            <label htmlFor="text">First Name</label>
            <br />
            <input
              type="text"
              value={input.username}
              onChange={handleChange}
              placeholder="Enter your first name"
              id="first_name"
            />
          </div>

          <div>
            <label htmlFor="text">Last name</label>
            <br />
            <input
              type="text"
              id="last_name"
              value={input.username}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="yourname@email.com" id="email" />

        <label htmlFor="text">Send me a message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply as soon as possible..."
          value={textnote}
          onChange={handleChanger}
          cols="30"
          rows="10"
        ></textarea>

        <div className="check">
          <input type="checkbox" name="checkbox" id="checkbox" /> <p>You agree to
          providing your data to {input.username} who may contact you</p>
        </div>

        <div className="button">
          <button value="Submit" id="btn__submit" className="button-tag">
            Send a message
          </button>
        </div>
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
  );
}

export default Contact;
