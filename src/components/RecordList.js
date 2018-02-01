import React from 'react'
import {Link} from 'react-router-dom'

const ItemList = (props) => {
  const records = props.records
  return (
    <div>
      <ul>
        {
        records.map((record, index) => {
          return <li key={index}>
            <Link to={{
              pathname: `/users/${record.title}`,
              state: {record: record}
            }}> {record.title}
            </Link>
          </li>
        })
      }
      </ul>
      <div>
        <button>
          <Link to='/records/add'>Add New Record</Link>
        </button>
      </div>
    </div>
  )
}

export default ItemList
