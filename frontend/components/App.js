import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then(response => {
        const data = response.data.data;
        this.setState({todos: data})
      })
      .catch(err => {
        console.log(`There was an error: ${err}`)
      })
  }

  patchData = (id) => {
    axios.patch(URL + `/${id}`)
      .then(res => {
        const data = res.data.data;
        const newTodos = this.state.todos.map((item) => {
          if (item.id === id) {
            return data;
          } else {
            return item;
          }
        });
        console.log(`New Todos: ${newTodos}`)
        this.setState({
          todos: newTodos
        });
        
      })
      .catch(err => console.log(`There was an error: ${err}`))
  }
  render() {
    return (
      <div>
        <TodoList data={this.state.todos} patch={this.patchData}/>
        <Form />
      </div>
        
    )
  }
}
