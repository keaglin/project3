import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <nav>
        <div className="nav-wrapper teal darken-1">
          <Link to="/" className="brand-logo center">LitSwap!</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header