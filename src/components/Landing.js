import React, { Component } from 'react'
import '../css/Landing.css'

const Landing = () => {
  return (
    <div>
      <h1 className='title'>litswap</h1>
      <h2 className='header'>Trade & Share Literature</h2>
      <a className='signin' href='/users'>Login/signup</a>
      {/* <button className='enter-button'>Enter</button> */}
    </div>
  )
}

export default Landing
