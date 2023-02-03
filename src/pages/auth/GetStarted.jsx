import React from 'react'
import { Link } from 'react-router-dom'
import "../stylePage/getStarted.css"
function GetStarted() {
  return (
    <div className="page-getStarted">
        <div className="getStartedwrapper">
        <div className="getStartedIntro">
            <div>
            <h2 className='txt-blue'>Motivation Podium</h2>
            <p>Connect with friends and the world around you on Motivation Podium.</p>
            </div>
        </div>
        <div className="getStartedForm">
            <div>
            <p>Choose an Suitable option for you</p>
            <br />
            <Link to="/auth/signin">
            <button className='txt-blue mp-btn'>SignIn</button>
            </Link>
            <Link to="/auth/signup">
            <button className='txt-blue mp-btn'>SignUp</button>
            </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GetStarted