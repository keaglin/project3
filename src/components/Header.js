import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'


const Header = () => {
  return(
    <header>
      <nav>
        <div className="nav-wrapper #5C351B brown darken-2">
          <Link to="/" className="brand-logo-center">litswap</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
