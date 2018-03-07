import React from 'react'
import '../css/Landing.css'

const Landing = () => {
    return (
        <div>
            <h1 className='title'>litswap</h1>
            <img src={process.env.PUBLIC_URL + '/litswap_rec.png'} alt="logo" className='litswap-logo' />
            <h2 className ='header'>Swap your used books and records to discover new adventures.</h2>
            <a className='login-signin-btn' href='/users'>Login / SignIn</a>
        </div>
    ) 
}

export default Landing
