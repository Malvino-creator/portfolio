import React from 'react'
import "./contact.css"

function contact() {
  return (
    <section className='contactPage'>
        <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDescription'> I have had the opportunity to work with a diverse group of companies/
        Some of the notable startups I have worked with includes:</p>
        <div className='clientImages'>
        <img src='clientImage' alt='clientImage' className='clientImage'/>
        <img src='clientImage' alt='clientImage' className='clientImage'/>
        <img src='clientImage' alt='clientImage' className='clientImage'/>
        <img src='clientImage' alt='clientImage' className='clientImage'/>
        </div>
        </div>
        <div id='contact'>

        </div>
    </section>
  )
}

export default contact