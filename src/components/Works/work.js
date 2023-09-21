import React from 'react'
import "./works.css"
import portfolio1 from "../../assets/portfolio1.png"
import portfolio2 from "../../assets/portfolio2.png"
import portfolio3 from "../../assets/portfolio3.png"
import portfolio4 from "../../assets/portfolio4.png"
import portfolio5 from "../../assets/portfolio5.png"
import portfolio6 from "../../assets/portfolio6.png"

function work() {
  return (
    <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <span className='workDescription'> I am passionate about providing modern-day solutions to problems facing our society,<br/>
         through the creation of visually appealling and interactive websites.</span>
        <div className='worksImages'>
            <img src={portfolio1} alt='portfolio1' className='workImg'/>
            <img src={portfolio2} alt='portfolio2' className='workImg'/>
            <img src={portfolio3} alt='portfolio3' className='workImg'/>
            <img src={portfolio4} alt='portfolio4' className='workImg'/>
            <img src={portfolio5} alt='portfolio5' className='workImg'/>
            <img src={portfolio6} alt='portfolio6' className='workImg'/>
        </div>
    </section>
  )
}

export default work;