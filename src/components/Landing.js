import React, { Component } from 'react'
import '../css/Landing.css'


const Landing = () => {
    return (
        <div>
            <h1 className='title'>litswap</h1>
            <h2 className ='header'>Swap used books to discover new adventures.</h2>
            <a className='login-signin-btn' href='/users'>Login / SignIn</a>
            {/* <button className='enter-button'>Enter</button> */}
        </div>
    ) 
}

export default Landing
