import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
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
        this.setState({
          todos: newTodos
        });
        
      })
      .catch(err => console.log(`There was an error: ${err}`))
  }

  postData = () => {
    axios.post(URL, {name: this.state.currentTodo})
      .then(res => {
        this.setState({
          currentTodo: "",
          todos: [...this.state.todos, res.data.data]
        })
      })
      .catch(err => console.log(`There was an error: ${err}`))
    
    
  }

  handleChange = (event) => {
    this.setState({currentTodo: event.target.value})
  }
  render() {
    return (
      <div>
        <TodoList data={this.state.todos} patch={this.patchData}/>
        <Form change={this.handleChange} post={this.postData} current={this.state.currentTodo}/>
      </div>
        
    )
  }
}
