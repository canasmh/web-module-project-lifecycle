import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {

  render() {
    {console.log('TODOLIST RENDERED')}
    return (
      <div>
        {this.props.data.map(todo => 
          <Todo key={todo.id} name={todo.name} completed={todo.completed} />
        )}
      </div>
    )
  }
}
