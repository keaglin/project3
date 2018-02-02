import React  from 'react'
import {Link} from 'react-router-dom'

const RecordList = (props) => {
  const records = props.records
  console.log(records)
  return (
    <div>
      <ul>
        {
          records.map((record, index) => {
            return <li key={index}>
              <Link to={{
                pathname: `/records/${record.name}`,
                state: {record: record}
              }}> {record.name}
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

export default RecordList
