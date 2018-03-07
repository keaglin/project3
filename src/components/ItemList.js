import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ItemList.css'


const ItemList = (props) => {
  const books = props.books
  return (
    <div className='row'>
      <ul className='list-container'>
        {
        books.map((book, index) => {
          return (
            <Link to={{
              pathname: `/books/${book.title}`,
              state: {book: book}
            }}> 
              <li className='list-li' key={index}>
                <div className='image-wrap'>
                  <img className='img-item-list image' src={book.imageUrl} alt="cover"/>
                </div>
                <div>
                  <h2 className='title-list'>{book.title}</h2>
                </div>
              </li>
            </Link>
          )
        })
      }
      </ul>
      <div>
        <button>
          <Link to ='/books/add'>Swap A Book</Link>
        </button>
      </div>
    </div>
  )
}

export default ItemList
