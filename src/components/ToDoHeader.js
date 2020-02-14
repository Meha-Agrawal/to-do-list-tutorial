import React, { Component } from "react";

class ToDoHeader extends React.Component {
  state = { inputVal: "" };

  onAddToDo = () => {
    this.props.onAdd(this.state.inputVal);
  };

  handleOnChange = event => {
    this.setState({ inputVal: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputVal}
          onChange={this.handleOnChange}
        ></input>
        <button onClick={this.onAddToDo}>Add Todo</button>
      </div>
    );
  }
}

export default ToDoHeader;
