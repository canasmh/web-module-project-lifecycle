import React from 'react'

export default class Todo extends React.Component {

  render() {
    return (<p onClick={() => this.props.patch(this.props.id)}>{this.props.name}</p>)
  }
}
