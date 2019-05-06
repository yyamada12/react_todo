import React from "react";
import PropTypes from "prop-types";

export default class TaskList extends React.Component {
  render() {
    return (
      <div data-testid="todos">
        {this.props.todos.length === 0 ? (
          "Nothing Todo"
        ) : (
          <ul>
            {this.props.todos.map(todo => (
              <li key={todo.id}>{todo.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.array
};
