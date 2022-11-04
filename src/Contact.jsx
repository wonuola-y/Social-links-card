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
        <input type="text"  value={input.username} onChange={handleChange}  id='first_name'/>

        <label htmlFor="text">Last name</label>
        <input type="text" id='last_name' value={input.username} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email"  id='email'/>

        <label htmlFor="text">Send me a message</label>
        <textarea name="message" id="message" value={textnote} onChange={handleChanger
        } cols="30" rows="10"></textarea>

        
        <div className='button'>
        <button  value="Submit"  id='btn__submit' className='button-tag'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Contact