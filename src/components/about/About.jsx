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
            <img src={Programmer} alt='Programmer' />
          </div>
        </div>

        <div className="about_content">
        <div className="about_cards">
            <article className='about_card'>
              <h5>Javascript</h5>
            </article>
            <article className='about_card'>
              <h5>React</h5>
            </article>
            <article className='about_card'>
              <h5>Bootstrap</h5>
            </article>
            <article className='about_card'>
              <h5 className='low_card'>HTML/CSS</h5>
            </article>            <article className='about_card'>
              <h5>React Native</h5>
            </article>            <article className='about_card'>
              <h5 className='low_card'>Node.js</h5>
            </article>
          </div>
          
          <p>
          Hi, Nick here! I'm a web developer with passion for utilizing technology to help people lead easier, happier, and healthier lives. I am a lifelong learner, currently furthering my knowledge with a coding bootcamp. I am driven by improvement, continuing my growth as a developer, and being a high-performer for my team. My references will say I am an ideal teammate, a hard-worker, detail-oriented, and a leader.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
