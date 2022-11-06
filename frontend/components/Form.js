import React from 'react'

export default class Form extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Add new Item' />
        <button type="submit">Add</button>
        <br/>
        <button type="button">Hide Completed</button>
      </form>
    )
  }
}
