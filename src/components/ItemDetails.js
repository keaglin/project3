import React, { Component } from 'react'

const ItemDetails = (props) => {
    console.log(props)
    return (
        <div>
            {props.location.state.book.title}
        </div>
    )
}


export default ItemDetails 
