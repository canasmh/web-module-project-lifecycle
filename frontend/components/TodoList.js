import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {this.props.data.map(todo => 
          <Todo key={todo.id} id={todo.id} name={todo.name} completed={todo.completed} patch={this.props.patch}/>
        )}
      </div>
    )
  }
}
