import React from 'react'
import './testimonials.css'
const testimonials = () => {
  return (
    <div className='testimonials-main'>
      <div className='testimonials-content'>
        <h1>Testimonials</h1>
        <p className='xyz1'>What our clients are saying</p>
        <div className='testimonials-card'>
          <div className='card-2'>
            <img src='./about img/1.jpg' alt='Imran Khan'></img>
            <p><span>&#182;</span>
            Working with Waqas Arshad was an amazing experience. They were able to capture my vision perfectly and deliver a high-quality product that exceeded my expectations. They were professional, responsive, and always went above and beyond to ensure my satisfaction. I highly recommend Jhon Wick for any design project. 
            <span>&#182;</span> </p>
            <p><span>MR Jhon Wick </span>High Table</p>
          </div>

          <div className='card-2'>
            <img src='./about img/2.jpg' alt="sas" />
            <p><span>&#182;</span>
            I had the pleasure of working with Waqas Arshad on a branding project for my business, and I couldn't be happier with the results. [Your Name] has a keen eye for design and was able to create a brand identity that truly represents my business. Their attention to detail and willingness to work collaboratively made the entire process seamless. I highly recommend Tom Harry for any branding project.
            <span>&#182;</span> </p>
            <p><span>Tom Harry </span>CEO OF JBL</p>
          </div>

          <div className='card-2'>
            <img src='./about img/3.jpg' alt="sas" />
            <p><span>&#182;</span>
            I reached out to Waqas Arshad for help with a website redesign, and I am so glad I did. [Your Name] was able to take my outdated website and turn it into a modern, user-friendly site that perfectly showcases my business. They were easy to work with, communicative, and delivered the project on time and within budget. I would highly recommend Mark Watsan for any web design project.
            <span>&#182;</span> </p>
            <p><span>Dr Mark Watsan </span> co-founder MTA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default testimonials
