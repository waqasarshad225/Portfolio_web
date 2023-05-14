import React from 'react'
import "./contact.css"
const contact = () => {
  return (
    <div className='contact-main' >
      <h1>Contact US</h1>
      <p>If you have any questions feel free to contact us. Thanks</p>
      <div className='contact-f'>
        <form action="">
          <input name='name' placeholder='Enter Your Name'></input>
          <input name='Email' placeholder='Enter Your Email'></input>
          <input name='contact' placeholder='Enter Your Number'></input>
          <textarea name="massage" id="massage-text" cols="50" rows="5"></textarea>
          <button type='button' className='sub-btn' placeholder='Enter Your Text....'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default contact
