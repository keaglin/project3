import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
import { Redirect }         from 'react-router-dom'

class RecordAdd extends Component {
  state = {
    record: {},
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
    axios.post(`${CLIENT_URL}/records/${this.state.record.title}`, {record: this.state.record})
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
            <input type="text"   placeholder='Name'             onChange={this.handleName} />
            <input type="text"   placeholder='Artist'           onChange={this.handleArtist} />
            <input type="text"   placeholder='Quality (1-5)'    onChange={this.handleQuality} />
            <input type="text"   placeholder='Favorite Song'    onChange={this.handleSong} />
            <input type="text"   placeholder='Owner'            onChange={this.handleOwner} />
            <input type="text"   placeholder='Image'            onChange={this.handleImage} />
            <input type="button" value="Submit"                 onClick={this.handleSubmit} />
          </div>
      </div>
    )
  }
}

export default RecordAdd
