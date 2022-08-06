import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigationContainer' >

        <div className="nav-leftDiv">
          <img src="../assests/logo/logo.jpg" alt="" />
            <h2>
            ResurrectedBird
            </h2>
        </div>

        <div className="nav-rightDiv">

        <a href="#" className='activeMenu' > Home </a>
        <a href="#"> About Us </a>
        <a href="#"> Contact Us </a>
        <a href="#"> Discussion </a>

        </div>

    </div>
  )
}

export default Navigation