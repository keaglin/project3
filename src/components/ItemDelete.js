import React, {Component} from 'react'
import {CLIENT_URL} from '../constants'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export class ItemDelete extends Component {
  state = {
    book: this.props.location.state.book
  }
  componentWillUnmount() {
    axios.delete(`${CLIENT_URL}/${this.state.book.title}`)
  }

  render() {
    return(
      <Redirect to='/books' />
    )
  }
}
