import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

  render() {
    let doRemove = (todoId) => {
      this.props.remove(todoId);
    };

    let todoList = this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} remove={doRemove} />
    ));
    let list = null;
    if ( this.props.todos.length ) {
      list = (
        <div>
          <ul className="list-group">
            {todoList}
          </ul>
          <button className="btn btn-success btn-sm pull-right" onClick={this.props.clearAll}>Clear all</button>
        </div>
      );
    } else {
      list = (
        <p>
          <i className="glyphicon glyphicon-sunglasses"></i> Nothing to do 
        </p>
      );
    }

    return (
      <div>
        {list}
      </div>
    );
  }

}

export default TodoList;