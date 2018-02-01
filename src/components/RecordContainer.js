import React, { Component }   from 'react'
import { CLIENT_URL }         from '../constants'
import RecordList               from './RecordList'
import axios                  from 'axios'
import { Link }                 from 'react-router-dom'

class RecordContainer extends Component {
  state = {
    records: []
  }

  componentDidMount() {
    axios.get(`${CLIENT_URL}`)
      .then(response => this.setState({records: response.data}))
  }

  render () {
    let records = this.state.records
    console.log(records)
    return (
      <div> <RecordList records={records}/></div>
     
    ) 
  }
}





export default RecordContainer
