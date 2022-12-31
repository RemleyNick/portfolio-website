import React from 'react'
import './header.css'
import CTA from './CTA'
import Programmer from '../../assests/programmer.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nick Remley</h1>
        <HeaderSocial />
        <CTA />

        <div className='programmer'>
          <img src={Programmer} alt='Image of Programmer' />
        </div>
      </div>
    </header>
  )
}

export default Header