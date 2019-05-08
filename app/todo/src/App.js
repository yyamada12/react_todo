import React from "react";

import TaskList from "./TaskList/TaskList";
import AddTask from "./AddTask/AddTask";

export default class App extends React.Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  state = { 
    todos: [],
    input: ""
  };

  addTask() {
    const todos = this.state.todos.slice();
    todos.push({
      id: getUniqueId(),
      name: this.state.input
    });
    this.setState({
      todos: todos,
      input: ""
    });
  }

  onChangeInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <TaskList todos={this.state.todos} />
        <AddTask 
          addTask={this.addTask} 
          onChangeInput={this.onChangeInput}
          input={this.state.input}
        />
      </div>
    );
  }
}

function getUniqueId() {
  return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
}
