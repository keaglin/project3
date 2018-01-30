import React from 'react'

const ItemEdit = (props) => {
  let book = props.location.state.book
  return (
    <div>
      <h1>{book.title}</h1>
      <div>
        <h4>Edit Book</h4>
        <input type='text' placeholder='email' onChange={this.handleEmail} />
        <input type='password' placeholder='password' onChange={this.handlePassword} />
        <input type='password' placeholder='confirm password' onChange={this.handlePwConfirm} />
        <input type='button' value='Submit' onClick={this.handleSubmit} />
        {/* {isValid && <p>Valid!</p>} */}
      </div>
    </div>
  )
}

export default ItemEdit
