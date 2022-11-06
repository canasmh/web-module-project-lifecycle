import React from 'react'

export default class Todo extends React.Component {

  render() {
    return (
      <p className="todo" onClick={() => this.props.patch(this.props.id)}>{this.props.name}{this.props.completed && <span>✅</span>}</p>
    )
  }
}
