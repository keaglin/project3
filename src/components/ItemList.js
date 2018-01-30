import React from 'react'
import {Link} from 'react-router-dom'

const ItemList = (props) => {
  const books = props.books
  return (
    <div>
      <ul>
        {
        books.map((book, index) => {
          return <li key={index}>
            <Link to={{
              pathname: `/books/${book.title}`,
              state: {book: book}
            }}> {book.title}
            </Link>
          </li>
        })
      }
      </ul>
      <div>
        <button>
          <Link to = {{ pathname: `/books/add`}}>
            Add your own?
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ItemList
