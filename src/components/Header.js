import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
<<<<<<< HEAD
        <div className='nav-wrapper cyan darken-1'>
          <Link to='/' className='brand-logo center'>LitSwap!</Link>
          <ul id='nav-mobile' className='left hide-on-med-and-down'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='/users'>Users</Link></li>
=======
        <div className="nav-wrapper blue-grey darken-1">
          <Link to="/" className="brand-logo center">LitSwap!</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/users">Users</Link></li>
>>>>>>> 90381f2db4356d62da6ec227d43cb22c9a98893f
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
