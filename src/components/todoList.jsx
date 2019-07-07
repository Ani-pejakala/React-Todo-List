import React, { Component } from "react";
import InCompletedTodo from "./inCompletedTodo";
import CompletedTodo from "./completedTodo";
class TodoList extends Component {
  state = {
    todoList: [
      { id: 1, text: "Learn JS", done: false },
      { id: 2, text: "Learn CSS", done: true }
    ],
    vis: true
  };
  handleAdd = () => {
    const d = new Date();
    const getId = d.getTime();
    const name = this.refs.newItem.value;
    const todoList = this.state.todoList;
    todoList.push({ id: getId, text: name, done: false });
    this.refs.newItem.value = "";
    this.setState({ todoList });
    console.log(this.state.todoList);
  };
  handleCheck = todo => {
    const todoList = this.state.todoList;
    const index = todoList.indexOf(todo);
    todoList[index].done = !todo.done;
    this.setState({ todoList });
  };
  handleDelete = todo => {
    const todoList = this.state.todoList;
    const index = todoList.indexOf(todo);
    todoList.splice(index, 1);
    this.setState({ todoList });
  };
  formatText() {
    const { vis } = this.state;
    return vis ? "Show" : "Hide";
  }
  render() {
    return (
      <div>
        <p>
          <label htmlFor="new-list">Add Item</label>
          <input type="text" ref="newItem" id="new-list" placeholder="Add todo here" />
          <button onClick={this.handleAdd}>ADD</button>
        </p>
        <h1>InCompleted Todo</h1>
        <ul className="list-group" id="incompShowToDoList">
          {this.state.todoList.map(todo => (
            <InCompletedTodo
              key={todo.id}
              onCheck={this.handleCheck}
              onDelete={this.handleDelete}
              todo={todo}
            />
          ))}
        </ul>
        <h1>
          Completed Todo
          <button
            className="button5"
            id="btn1"
            onClick={() => this.setState({ vis: !this.state.vis})}
          >{this.formatText()}
          </button>
        </h1>
        <ul id="compShowToDoList">
          {this.state.todoList.map(todo => (
            <CompletedTodo
              key={todo.id}
              onCheck={this.handleCheck}
              onDelete={this.handleDelete}
              todo={todo}
              vis={this.state.vis}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
