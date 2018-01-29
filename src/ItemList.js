import React, { Component } from 'react'


const ItemList = (props) => {
    const books = props.books
    return (
        <div>
            <ul>
            {
                books.map((book, index) => {
                    return <li key={index}> {book.title} </li>
                })
            }
            </ul>
        </div>
    )
}


export default ItemList
