import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import TaskList from "./TaskList/TaskList";
import AddTask from "./AddTask/AddTask";
import Title from "./Title/Title";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class App extends React.Component {
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
    todos.forEach(todo => {
      if (todo.id === checkTaskId) todo.isDone = !todo.isDone;
    });
    this.setState({
      todos: todos
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Title
            num_of_remains={
              this.state.todos.filter(todo => !todo.isDone).length
            }
            num_of_todos={this.state.todos.length}
          />
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
      </React.Fragment>
    );
  }
}

function getUniqueId() {
  return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
}

export default withStyles(styles)(App);
