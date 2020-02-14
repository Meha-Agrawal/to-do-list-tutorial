import React, { Component } from "react";
import ToDoHeader from "./ToDoHeader.js";
import ToDo from "./ToDo.js";
import "../css/ToDoList.css";

class ToDoListContainer extends Component<Props> {
  state = {
    list_items: []
  };

  addTodo = new_item => {
    const new_list = this.state.list_items;
    new_list.push(new_item);
    this.setState({ list_items: new_list });
  };

  deleteTodo = key_to_delete => {
    const cur_items_list = this.state.list_items;
    cur_items_list.splice(key_to_delete, 1);
    this.setState(cur_items_list);
  };

  render() {
    const all_todos = [];
    for (let i = 0; i < this.state.list_items.length; i++) {
      all_todos.push(
        <div>
          <ToDo
            key={i}
            onDelete={this.deleteTodo}
            itemName={this.state.list_items[i]}
          />
        </div>
      );
    }
    return (
      <div className="to-do-list-container">
        <ToDoHeader onAdd={this.addTodo} />
        <div>{all_todos}</div>
      </div>
    );
  }
}

export default ToDoListContainer;
