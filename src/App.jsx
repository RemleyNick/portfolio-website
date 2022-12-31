import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App