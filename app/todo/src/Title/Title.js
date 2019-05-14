import React from "react";
import PropTypes from "prop-types";

const Title = props => (
  <div>
    <h1> Todo App </h1>
    {props.num_of_remains && props.num_of_todos && (
      <span data-testid="counts">
        ({props.num_of_remains}/{props.num_of_todos})
      </span>
    )}
  </div>
);

Title.propTypes = {
  num_of_remains: PropTypes.number,
  num_of_todos: PropTypes.number
};

export default Title;
