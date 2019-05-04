import React from 'react';

import TaskList from './TaskList/TaskList';

export default class App extends React.Component {
  state = { todos: [] }
  render() {
    return (
      <div>
        <TaskList todos={ this.state.todos } />
      </div>
    );
  }
}
