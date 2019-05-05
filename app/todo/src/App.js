import React from 'react';

import TaskList from './TaskList/TaskList';
import AddTask from './AddTask/AddTask';

export default class App extends React.Component {
  state = { todos: [] }
  render() {
    return (
      <div>
        <TaskList todos={ this.state.todos } />
        <AddTask />
      </div>
    );
  }
}
