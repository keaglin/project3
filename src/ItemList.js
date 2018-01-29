import React from 'react'

const ItemList = (props) => {
  const books = props.books
  return (
    <div>
      <ul>
      {
        books.map((book, index) => {
            return <li key={index}><a href={`/books/${book.title}`}>{book.title}</a></li>
        })
      }
      </ul>
    </div>
  )
}


export default ItemList
