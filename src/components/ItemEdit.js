import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'

class ItemEdit extends Component {
  state = {
    book: this.props.location.state.book
  }

  // Help with Object.assign for setting state on nested props from Stack Overflow
  // it was also mentioned in a lesson but SO helped me understand how to implement it
  // https://stackoverflow.com/questions/43040721/how-to-set-a-nested-state-in-react
  handleTitle = (e) => {
    // if (e.target.value) this.setState({book: {title: e.target.value}})
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {title: e.target.value})})
  }
  handleAuthor = (e) => {
    // console.log('book from handleAuthor is', this.state.book)
    // if (e.target.value) this.setState({book: {author: e.target.value}})
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {author: e.target.value})})
  }
  handleQuality = (e) => {
    // if (e.target.value) this.setState({book: {quality: e.target.value}})
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {quality: e.target.value})})
  }
  handleQuote = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {quote: e.target.value})})
  }
  handleOwner = (e) => {
    // if (e.target.value) this.setState({book: {owner: e.target.value}})
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {owner: e.target.value})})
  }

  // Got help with axios from here:
  // https://github.com/axios/axios
  // and here:
  // https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237
  handleSubmit = () => {
    // console.log(CLIENT_URL)
    axios.put(`${CLIENT_URL}/${this.state.book.title}`, {book: this.state.book})
      // .then(response => response.redirect(`/books`))
      .then(console.log('book from axios.put.then is', this.state.book)
        // response => response.redirect(`/books/${this.state.book.title}`)
      )
      .catch(err => console.log('Woops!', err))
    // axios.get(`${CLIENT_URL}/${this.state.book.title}`)
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.book) === JSON.stringify(this.state.book)) axios.get(`${CLIENT_URL}/${this.state.book.title}`)
    console.log('props is', this.props)
    console.log('prevProps is', prevProps)
    console.log('state is', this.state)
    console.log('prevState is', prevState.book)
  }

  render() {
    let book = this.state.book
    console.log('book is', book)
    return(
      <div>
        <h1>{book.title}</h1>
        <div>
            <h4>Edit Book</h4>
            <input type="text" placeholder={book.title}   onChange={this.handleTitle} />
            <input type="text" placeholder={book.author}  onChange={this.handleAuthor} />
            <input type="text" placeholder={book.quality} onChange={this.handleQuality} />
            <input type="text" placeholder={book.quote}   onChange={this.handleQuote} />
            <input type="text" placeholder={book.owner}   onChange={this.handleOwner} />
            <input type="button" value="Submit"           onClick={this.handleSubmit} />
            {/* {isValid && <p>Valid!</p>} */}
          </div>
      </div>
    )
  }
}

export default ItemEdit