import React from "react";
import PropTypes from "prop-types";

const TaskList = props => (
  <div data-testid="todos">
    {props.todos.length === 0 ? (
      "Nothing Todo"
    ) : (
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              data-testid="checkbox"
              checked={todo.isDone}
              onChange={() => props.checkTodo(todo.id)}
            />
            {todo.name}
            <button onClick={() => props.removeTask(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

TaskList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTask: PropTypes.func,
  checkTodo: PropTypes.func
};

export default TaskList;
