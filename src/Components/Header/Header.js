import React, { useState } from 'react'
import './Header.css'
import Logo from  '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
const Header = () => {

  const mobile = window.innerWidth <=768 ? true: false;
  const [menuOpened, setmenuOpended] =useState(false)


  return (
    <div className='header' id='home'>
      <img src={Logo}  alt='' className='logo'/>

      {(menuOpened === false && mobile=== true) ? (

        <div style={{backgroundColor:'var(--appcolor)' ,padding:'0.5rem' ,borderRadius:'5px' }}
        onClick={() => setmenuOpended(true)}> <img src={Bars} alt='' style={{width: '1.5rem',height:'1.5rem',}} /></div>
      ):(
      
      <ul className='header-menu'>

        <li>
          <Link  onClick={() => setmenuOpended(false)} to='home'
          spy={true} smooth={true} >Home </Link> </li>
        
        <li>
        <Link  onClick={() => setmenuOpended(false)} to='programs'
          spy={true} smooth={true} >Programs </Link></li>
          
        <li > <Link  onClick={() => setmenuOpended(false)} to='reason'
          spy={true} smooth={true} >Why us</Link> </li>

        <li ><Link 
         onClick={() => setmenuOpended(false) } to='plan'
          spy={true} smooth={true} >Plans </Link></li>

        <li>
          <Link   onClick={() => setmenuOpended(false)} to='testimonials' spy={true} 
          smooth={true}> Testimonials</Link>
        </li>

      </ul>)}
      
    </div>
  )
}

export default Header