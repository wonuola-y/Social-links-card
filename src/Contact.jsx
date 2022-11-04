import React from 'react'
import { useState } from 'react';

function Contact() {
    

        const [input, setInput] = useState(" ");
        const [textnote, setTextNote] = useState(" ");
        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setInput(values => ({...values, [name]: value}))
          }
          const handleChanger = (event) => {
            setTextNote(event.target.value)
          }
          const handleSubmit = (e) =>{
         if (!this.validate() || input === null || input === '') { e.preventDefault() } }
                
  return (
    <div>
        <h1 className='header'>Contact Form</h1>
        <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="text">First Name</label>
        <input type="text"  value={input.username} onChange={handleChange}  placeholder="Enter your first name" id='first_name'/>

        <label htmlFor="text">Last name</label>
        <input type="text" id='last_name' value={input.username} onChange={handleChange} placeholder="Enter your last name" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="your@example.com" id='email'/>

        <label htmlFor="text">Send me a message</label>
        <textarea name="message" id="message" placeholder="Send me a message and I'll reply as soon as possible..." value={textnote} onChange={handleChanger
        } cols="30" rows="10"></textarea>

<div><input type="checkbox" name="checkbox" id="checkbox" /> You agree to providing your data to {input.username} who may contact you</div>
        
        <div className='button'>
        <button  value="Submit"  id='btn__submit' className='button-tag'>Send a message</button>
        </div>
        </form>
    </div>
  )
}

export default Contact