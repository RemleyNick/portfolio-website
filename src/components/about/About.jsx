import React from 'react'
import './about.css'
import Programmer from '../../assests/programmer-two.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className='about_me-image'>
            <img src={Programmer} alt='Image of Programmer' />
          </div>
        </div>

        <div className="about_content">
        <div className="about_cards">
            <article className='about_card'>
              <h5>CSS</h5>
            </article>
            <article className='about_card'>
              <h5>Javascript</h5>
            </article>
            <article className='about_card'>
              <h5>Bootstrap</h5>
            </article>
            <article className='about_card'>
              <h5>React</h5>
            </article>            <article className='about_card'>
              <h5>React Native</h5>
            </article>            <article className='about_card'>
              <h5>Node.js</h5>
            </article>
          </div>
          
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About