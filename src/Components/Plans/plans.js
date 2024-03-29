import React from 'react'
import './plans.css'
import plansData from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () =>{
    return(
        <div className='plans-continer' id='plan'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='program-header' style={{gap:'2rem'}}> 
                <span className='stroke-text'>Ready to start</span>
                <span>Your Journeyt</span>
                <span className='stroke-text'>Now Withus</span> 

            </div> 

            <div className='plans'> 
                {
                    plansData.map((plan,i) =>{
                       return(
                        <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className='features'>
                             {plan.features.map((feature,i) =>{
                                return(
                                    <div className='feature'>
                                        <img src={whiteTick} alt='' />
                                        <span key={i}>{feature}</span>
                                    </div>
                                )
                             })}
                        </div>

                        <div>
                             <span> See more benefits -> </span>
                        </div>
                        <button className='btn'>Join now</button>
                     </div>
                    )})  
                }
            </div>
        </div>
    )
}

export default Plans;