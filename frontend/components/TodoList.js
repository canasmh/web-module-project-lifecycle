import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {

  render() {
    {console.log('TODOLIST RENDERED')}
    return (
      <div>
        <h2>Todos:</h2>
        {this.props.data.map(todo => 
          <Todo key={todo.id} name={todo.name} completed={todo.completed} />
        )}
      </div>
    )
  }
}
