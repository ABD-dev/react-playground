import React from 'react';

class TodoItem extends React.Component {
  render() {
    let doRemove = () => {
      this.props.remove(this.props.todo.id);
    };

    return (
      <li className="list-group-item">
        {this.props.todo.title}
        <i className="pull-right glyphicon glyphicon-remove" onClick={doRemove}></i>
      </li>
    );
  }
}

export default TodoItem;