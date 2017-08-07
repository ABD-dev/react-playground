import React from 'react';

class AddTodo extends React.Component {;
  render() {
    let input;

    let doSubmit = (e) => {
      e.preventDefault();
      if (input.value) {
        this.props.addTodo(input.value);
        input.value = '';
      }
    }

    return (
      <form onSubmit={(e) => { doSubmit(e) }}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Add to-do" ref={node => { input = node; }}/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Add</button>
          </span>
        </div>
      </form>
    );
  }
}

export default AddTodo;