import React from 'react'
import "./works.css"
import portfolio1 from "../../assets/portfolio1.png"
import portfolio2 from "../../assets/portfolio2.png"
import portfolio3 from "../../assets/portfolio3.png"
import portfolio4 from "../../assets/portfolio4.png"

function work() {
  return (
    <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <p className='workParag'> In today's fast-paced digital world, web developer's portfolio serves as a testament to ones skills, <br/>creativity, and ability to craft engaging online experiences.
         As a React developer,<br/> my portfolio embodies not only the projects I've<br/>undertaken but also the passion and dedication I bring to the ever-evolving field of web development.</p>
        <div className='workImages'>
            <img src={portfolio1} alt='portfolio1' className='workImg'/>
            <img src={portfolio2} alt='portfolio2' className='workImg'/>
            <img src={portfolio3} alt='portfolio3' className='workImg'/>
            <img src={portfolio4} alt='portfolio4' className='workImg'/>
        </div>
        <button className='worksBtn'> See more </button>
    </section>
  )
}

export default work;