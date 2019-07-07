import React, { Component } from "react";
import NavBar from "./components/navbar";
//import "./App.css";
import TodoList from "./components/todoList";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container" id="main">
          <TodoList />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
