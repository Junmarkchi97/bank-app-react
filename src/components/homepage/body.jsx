import React from 'react'
import '../../styles/homepage/body.css'

export default function Body() {
  return (
    <div className='body'>
        <h1 className='body-title'>Powerfully Simple</h1>
        <h1 className='body-title'>Business Banking</h1>
        <h4 className='body-subtitle'>Built for small business owners,entrepreneurs,</h4>
        <h4 className='body-subtitle'>and freelancers. No hidden fees, no hassle.</h4>
        <div className='body-email'>
            <input type='text' placeholder='Your Business Email' className='body-input'></input>
            <button className='body-button'>Get Started</button>
        </div>
    </div>
  )
}
