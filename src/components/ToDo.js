import React from "react";

class ToDo extends React.Component {
  onDeleteToDo = () => {
    this.props.onDelete(this.props.key);
  };

  render() {
    return (
      <div>
        <text>{this.props.itemName}</text>
        <button onClick={this.onDeleteToDo}>done!</button>
      </div>
    );
  }
}

export default ToDo;
