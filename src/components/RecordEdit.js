import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
import {Redirect}           from 'react-router-dom'

class RecordEdit extends Component {
  state = {
    record: this.props.location.state.record,
    toDashboard: false
  }

  handleTitle = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {title: e.target.value})})
  }
  handleAuthor = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {author: e.target.value})})
  }
  handleQuality = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {quality: e.target.value})})
  }
  handleQuote = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {quote: e.target.value})})
  }
  handleOwner = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {owner: e.target.value})})
  }

  handleSubmit = () => {
    axios.put(`${CLIENT_URL}/${this.state.record.title}`, {record: this.state.record})
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
  }

  render() {
    let record = this.state.record
    console.log('record is', record)
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/records/${record.title}`,
        state: {record:record}
      }}/>
    }
    return (
      <div>
        <h1>{record.title}</h1>
        <div>
            <h4>Edit Record</h4>
            <input type="text" placeholder={record.title}   onChange={this.handleTitle} />
            <input type="text" placeholder={record.author}  onChange={this.handleAuthor} />
            <input type="text" placeholder={record.quality} onChange={this.handleQuality} />
            <input type="text" placeholder={record.quote}   onChange={this.handleQuote} />
            <input type="text" placeholder={record.owner}   onChange={this.handleOwner} />
            <input type="button" value="Submit"           onClick={this.handleSubmit} />
          </div>
      </div>
    )
  }
}

export default RecordEdit
