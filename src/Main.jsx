import React from 'react'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'

const Main = () => {
  return (
    <div className='mainContainer' >

    <Navigation/>
    <HomePage/>

    </div>
  )
}

export default Main