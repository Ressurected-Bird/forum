import React from 'react'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'

const Main = () => {
  return (
    <div className='mainContainer' >

    <Navigation/>
    <HomePage/>
    <Footer/>

    </div>
  )
}

export default Main