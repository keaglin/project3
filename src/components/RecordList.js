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
            return (
              <Link to={{
                pathname: `/records/${record.name}`,
                state: {record: record}
              }}> 
                <li className='list-li' key={index}>
                  <div className='image-wrap'>
                    <img className='img-item-list image' src={record.imageUrl} alt="cover"/>
                  </div>
                  <div>
                    <h2 className='title-list'>{record.name}</h2>
                  </div>
                </li>
              </Link>
            )
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
