import React from "react";

import TaskList from "./TaskList/TaskList";
import AddTask from "./AddTask/AddTask";

export default class App extends React.Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
  }

  state = { todos: [] };

  addTask(input) {
    const todos = this.state.todos.slice();
    todos.push({
      id: getUniqueId(),
      name: input
    });
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div>
        <TaskList todos={this.state.todos} />
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

function getUniqueId() {
  return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
}
