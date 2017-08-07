import React from 'react';
import Title from './Title';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoAction';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TodoStore.getAll()
    };
  }

  getTodos = () => {
    this.setState({
      data: TodoStore.getAll()
    });
  };

  componentDidMount() {
    TodoStore.on('change', this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos);
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <Title count={this.state.data.length} />
          <div className="panel panel-info">
            <div className="panel-heading">
              <AddTodo addTodo={(value) => TodoActions.add(value)} />
            </div>
            <div className="panel-body">
              <TodoList 
                todos={this.state.data} 
                remove={(id) => TodoActions.remove(id)} 
                clearAll={() => TodoActions.clear()} />
            </div>
         </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
