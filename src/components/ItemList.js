import React  from 'react'
import {Link} from 'react-router-dom'
import '../css/ItemList.css'


const ItemList = (props) => {
  const books = props.books
  return (
    <div className='row'>
      <ul>
      {
        books.map((book, index) => {
            return <li key={index}>
            <Link to = {{
              pathname: `/books/${book.title}`, 
              state: {book:book}
            }}> {book.title} 
            </Link>
           </li>
        })
      }
      </ul>
      <div>
        <button>
          <Link to = {{ pathname: `/books/add`}}>
            Swap Your Lit
          </Link>
        </button>
      </div>
    </div>
  )
}


export default ItemList
