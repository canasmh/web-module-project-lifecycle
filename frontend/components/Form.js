import React from 'react'

export default class Form extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.post();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.props.change} placeholder='Add new Item' name="add" value={this.props.current}/>
        <button type="submit">Add</button>
        <br/>
        <button onClick={this.props.toggle} type="button">{this.props.hidden ? "Show" : "Hide"} Completed</button>
      </form>
    )
  }
}
