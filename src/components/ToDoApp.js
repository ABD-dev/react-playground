import React from 'react';
import Title from './Title';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  addTodo(value) {
    if (value) {
      const todo = {
        id: this.state.data.length + 1,
        title: value
      };
      this.state.data.push(todo);
      this.setState({data: this.state.data});
    }
  }

  removeToDo(todoId) {
    const remainingTodos = this.state.data.filter(todo => todo.id !== todoId);
    this.setState({data: remainingTodos});
  }

  clearAll() {
    this.setState({data: []});
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <Title count={this.state.data.length} />
          <div className="panel panel-info">
            <div className="panel-heading">
              <AddToDo addTodo={this.addTodo.bind(this)} />
            </div>
            <div className="panel-body">
              <ToDoList todos={this.state.data} remove={this.removeToDo.bind(this)} clearAll={this.clearAll.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;
