import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { CLIENT_URL }       from '../constants'
import { Redirect }         from 'react-router-dom'
import axios                from 'axios'


class RecordDetails extends Component {
  state = {
    record: this.props.location.state.record,
    toDashboard: false
  }
  handleDelete = () => {
    axios.delete(`${CLIENT_URL}/records/${this.state.record.name}`)
    .then(this.setState({ toDashboard: true }))
    .catch(err => console.log(err))
  }
  render() {
    let record = this.state.record
    console.log(record)
    if (this.state.toDashboard) return <Redirect to='/records' />
    return (
      <div>
        <div>
          <h1>{record.name}</h1>
          <div>
          <img className='img-itemdetails'  src={record.imageUrl} alt="cover" />
            <p>Artist: {record.artist}</p>
            <p>Released: {record.released}</p>
            <p>Quality (out of 5): {record.quality}</p>
            <p>Favorite Song: {record.song}</p>
            <p>Owner: {record.owner}</p>
            <button>
              <Link to={{
                pathname: `/records/${record.name}/edit`,
                state: {record: record}
              }}>
                Edit
              </Link>
            </button>
            <button onClick={this.handleDelete}>
              <Link to={{
                pathname: `/records/${record.name}`,
                state: {record: record}
              }}>
                Delete
              </Link>
            </button>

          </div>
        </div>

      </div>
    )
  }
}

export default RecordDetails
