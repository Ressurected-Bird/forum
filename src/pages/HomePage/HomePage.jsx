import React from 'react'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='homePageContainer' >

            <div className="home-leftDiv">
                <div className="home-titleDiv">
                    <h2>
                        Welcome to ResercutedBird Forum
                    </h2>
                </div>

                <div className="home-paragraphDiv">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam esse non animi itaque atque quam cupiditate provident saepe eligendi nisi, modi odit debitis culpa soluta possimus fugiat quos. Officiis molestias explicabo autem! Harum suscipit, sit quia debitis pariatur, nulla tempora magni quisquam aliquid distinctio quas, omnis ipsum culpa. Aut.
                    </p>
                </div>

                <div className="home-loginOrRegisterDiv">

                    <button className='home-createAccountBtn' >Create an Account</button>
                    <button className='home-signInBtn' > Already Have an Account ? Sign In</button>

                </div>

            </div>

            <div className="home-rightDiv">
                <div className="home-rightDiv-imgDiv">
                    <img src="../assests/HomePageImages/img-1.png" alt="" />
                    <img src="../assests/HomePageImages/img-2.png" alt="" />
                    <img src="../assests/HomePageImages/img-3.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default HomePage