import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
import {Redirect}           from 'react-router-dom'

class RecordEdit extends Component {
  state = {
    record: this.props.location.state.record,
    toDashboard: false
  }

  handleName = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {name: e.target.value})})
  }
  handleArtist = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {artist: e.target.value})})
  }
  handleQuality = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {quality: e.target.value})})
  }
  handleSong = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {song: e.target.value})})
  }
  handleOwner = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {owner: e.target.value})})
  }
  handleImage = (e) => {
    if (e.target.value) this.setState({record: Object.assign(this.state.record, {imageUrl: e.target.value})})
  }

  handleSubmit = () => {
    axios.put(`${CLIENT_URL}/records/${this.state.record.name}`, {record: this.state.record})
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
  }

  render() {
    let record = this.state.record
    console.log('record is', record)
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/records/${record.name}`,
        state: {record:record}
      }}/>
    }
    return (
      <div>
        <h1>{record.name}</h1>
        <div>
            <h4>Edit Record</h4>
            <input type="text" placeholder={record.name}    onChange={this.handleName} />
            <input type="text" placeholder={record.artist}  onChange={this.handleArtist} />
            <input type="text" placeholder={record.quality} onChange={this.handleQuality} />
            <input type="text" placeholder={record.song}    onChange={this.handleSong} />
            <input type="text" placeholder={record.owner}   onChange={this.handleOwner} />
            <input type="text" placeholder='Image Link'   onChange={this.handleImage} />
            <input type="button" value="Submit"             onClick={this.handleSubmit} />
          </div>
      </div>
    )
  }
}

export default RecordEdit
