import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { CLIENT_URL }       from '../constants'
import { Redirect }         from 'react-router-dom'
import axios                from 'axios'


class ItemDetails extends Component {
  state = {
    record: this.props.location.state.record,
    toDashboard: false
  }
  handleDelete = () => {
    axios.delete(`${CLIENT_URL}/${this.state.record.title}`)
    .then(this.setState({ toDashboard: true }))
    .catch(err => console.log(err))
  }
  render() {
    let record = this.state.record
    if (this.state.toDashboard === true) return <Redirect to='/records' />
    return (
      <div>
        <div>
          <h1>{record.title}</h1>
          <div>
            <p>Artist: {record.artist}</p>
            <p>Released: {record.released}</p>
            <p>Quality (out of 5): {record.quality}</p>
            <p>Favorite Quote: {record.quote}</p>
            <p>Owner: {record.owner}</p>
            <button>
              <Link to={{
                pathname: `/records/${record.title}/edit`,
                state: {record: record}
              }}>
                Edit
              </Link>
            </button>
            <button onClick={this.handleDelete}>
              <Link to={{
                pathname: `/records/${record.title}`,
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

export default ItemDetails
