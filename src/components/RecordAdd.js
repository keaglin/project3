import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
import { Redirect }         from 'react-router-dom'
import ItemContainer        from './ItemContainer'

class ItemAdd extends Component {
  state = {
    record: {},
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
    axios.post(`${CLIENT_URL}/${this.state.record.title}`, {record: this.state.record})
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
    return(
      <div>
        <div>
            <h4>Add Record</h4>
            <input type="text"   placeholder='Name'            onChange={this.handleName} />
            <input type="text"   placeholder='Artist'           onChange={this.handleArtist} />
            <input type="text"   placeholder='Quality (1-5)'    onChange={this.handleQuality} />
            <input type="text"   placeholder='Favorite Quote'   onChange={this.handleQuote} />
            <input type="text"   placeholder='Owner'            onChange={this.handleOwner} />
            <input type="button" value="Submit"                 onClick={this.handleSubmit} />
          </div>
      </div>
    )
  }
}

export default ItemAdd
