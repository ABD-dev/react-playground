import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h1 className="text-info">To-Do's: <small>{this.props.count || 0}</small></h1>
      </div>
    );
  }
}

export default Title;