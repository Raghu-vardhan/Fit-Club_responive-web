import React, { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form =useRef() 
    
        const sendEmail = (e) =>{
            e.preventDefault();

            emailjs.sendForm('service_rcue373', 'template_5oib6nk', form.current
            ,'tWdhL8GN8vFuyj-BA') 
              .then((result) => {
                
            }).catch((err) => {
                
            });
        }
    return (
    <div className='join' id='join-us'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'> Ready to</span>
                <span > level up</span>
            </div>
            <div>
                <span className='stroke-text'> your body</span>
                <span > with us</span>
            </div>
        </div>
        <div  className='right-j'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' 
                placeholder='Enter your email address'></input>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join;