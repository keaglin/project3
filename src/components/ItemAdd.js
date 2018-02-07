import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
import '../css/ItemAdd.css'
import { Redirect }         from 'react-router-dom'

class ItemAdd extends Component {
  state = {
    book: {},
    toDashboard: false
  }

  // this is a little repetitive. Check out the react docs on handling multiple inputs. 
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  // if you add a name attribute to each input you can use a single handle change method for all of them.
  
  handleTitle = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {title: e.target.value})})
  }
  handleAuthor = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {author: e.target.value})})
  }
  handleQuality = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {quality: e.target.value})})
  }
  handleQuote = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {quote: e.target.value})})
  }
  handleOwner = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {owner: e.target.value})})
  }
  handleImage = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {imageUrl: e.target.value})})
  }

  handleSubmit = () => {
    axios.post(`${CLIENT_URL}/books/${this.state.book.title}`, {book: this.state.book})
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
  }


  render() {
    let book = this.state.book
    console.log('book is', book)
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/books/${book.title}`,
        state: {book:book}
      }}/>
    }
    return(
      <div>
        <div>
            <h4>Add Book</h4>
            <input type="text"   placeholder='Title'            onChange={this.handleTitle} />
            <input type="text"   placeholder='Author'           onChange={this.handleAuthor} />
            <input type="text"   placeholder='Quality (1-5)'    onChange={this.handleQuality} />
            <input type="text"   placeholder='Favorite Quote'   onChange={this.handleQuote} />
            <input type="text"   placeholder='Owner'            onChange={this.handleOwner} />
            <input type="text" placeholder='Cover'   onChange={this.handleImage} />

            <input type="button" className='submit-add-btn'     value="Submit"  onClick={this.handleSubmit} />
          </div>
      </div>
    )
  }
}

export default ItemAdd
