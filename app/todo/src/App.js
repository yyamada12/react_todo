import React from "react";

import TaskList from "./TaskList/TaskList";
import AddTask from "./AddTask/AddTask";

export default class App extends React.Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }

  state = {
    todos: [],
    input: ""
  };

  addTask() {
    if (this.state.input.trim() === "") return;
    const todos = this.state.todos.slice();
    todos.push({
      id: getUniqueId(),
      name: this.state.input,
      isDone: false
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

  removeTask(removeTaskId) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== removeTaskId;
    });
    this.setState({
      todos: todos
    });
  }

  checkTodo(checkTaskId) {
    const todos = this.state.todos.slice();
    todos.map(todo => {
      if (todo.id === checkTaskId) todo.isDone = !todo.isDone;
    });
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div>
        <TaskList
          todos={this.state.todos}
          removeTask={this.removeTask}
          checkTodo={this.checkTodo}
        />
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
