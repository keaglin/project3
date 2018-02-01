import React from 'react'
import {Link} from 'react-router-dom'

const ItemList = (props) => {
  const records = props.records
  return (
    <div>
      <ul>
        {
        users.map((user, index) => {
          return <li key={index}>
            <Link to={{
              pathname: `/users/${user.title}`,
              state: {user: user}
            }}> {user.title}
            </Link>
          </li>
        })
      }
      </ul>
      <div>
        <button>
          <Link to='/users/add'>Add your own?</Link>
        </button>
      </div>
    </div>
  )
}

export default ItemList
