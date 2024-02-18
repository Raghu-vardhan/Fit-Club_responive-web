import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from  '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from  '../assets/heart.png'
import NumberCounter from 'number-counter'

const Hero = () => {

   
  return (
    <div className='Hero' >

        <div className='blur hero-blur'></div>
        <div className='left-h'>
        <Header/>
        {/* the best ad */}
        <div className='the-best-ad'>
        <div></div>
          <span>the best fitness club in the town</span>
         </div>
          <div className='hero-text'>
            <div>
              <></>
            <span className='stroke-text '>Shape </span>
              <span>Your </span> 
            </div>
              <div><span>ideal body</span>
            </div>  
            <div>
              <span className='span'>
              in here we will help you to shape and build your ideal body
              and live up your life to fullest
              </span>
            </div>
          </div>
          
          <div className='figures'>
            <div>
              <span> 
              <NumberCounter end={140} start={100} delay='4' prefix='+'/>  
              </span> 
              <span>expert coaches </span>
            </div>
            <div>
              <span>
                <NumberCounter end={978} start={800} delay='4' prefix='+'/> 
              </span>
              <span>memebers joined</span>
            </div>
            <div>
              <span>
              <NumberCounter end={50} start={0} delay='4' prefix='+'/> 
              </span>
              <span>fitness programs </span>
            </div>
          </div>
          {/* {button} */}
          <div className='hero-btn'>
            <button className='btn'>Get started</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
        
        <div className='right-h'>
          <button className='btn' >Join Now</button>
        
          <div className='heart-rate'>

            <img src={Heart} alt=''/>
             <span >Heart Rate </span> <span>116 bpm </span>
          </div>
          
          <div>
            {/* here images */}
            <img src={hero_image}className='hero-image'/>
            <img src={hero_image_back} className='hero-image-back'/>

          </div>

        </div> 
    </div>
  )
}

export default Hero;