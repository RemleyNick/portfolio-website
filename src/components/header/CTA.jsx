import React from 'react'
import CV from '../../assests/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#portfolio' className='btn btn-primary'>My Work</a>
        <a href='#contact' className='btn'>Contact Me</a>
    </div>
  )
}

export default CTA