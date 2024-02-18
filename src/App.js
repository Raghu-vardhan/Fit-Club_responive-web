import './App.css';
import React from 'react'
import Hero from './Components/Hero';
import Programs from './Components/programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Plans from './Components/Plans/plans';
import Testimonials from './Components/test/Testimonials';
import Join from './Components/join/Join';
import Footer from './Components/Footer/Footer';

const  App =() => {
  return (
    <div className='App'>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
