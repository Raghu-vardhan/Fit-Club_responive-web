import React from 'react'
import './Programs.css'
import  programsData  from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
   <div className='program' id='programs'>
       <div className='program-header'>
        <span className='stroke-text'>Explore our</span>  
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
       </div>

       <div className='progress-categories'>
       {
            programsData.map((program) =>{
                return(
                    <div className='categery'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'><span>join now</span><img src={RightArrow}/>
                        </div>
                    </div>
                )
            })
       }
       </div>
   </div>
  )
}

export default Programs