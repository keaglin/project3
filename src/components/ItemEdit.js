import React from 'react'

const ItemEdit extends Component {
  state = {
    book: this.props.location.state.book
  }

  handleTitle() {
    this.setState({ book: {title: e.target.value} })
  }
  handleAuthor() {
    this.setState({ book: {author: e.target.value} })
  }
  handleQuality() {
    this.setState({ book: {quality: e.target.value} })
  }
  handleQuote() {
    this.setState({ book: {quote: e.target.value} })
  }
  handleOwner() {
    this.setState({ book: {owner: e.target.value} })
  }

  handleSubmit() {
    axios.put(`${CLIENT_URL}`)
      .then()
  }

  render() {
    // let book = this.props.location.state.book
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