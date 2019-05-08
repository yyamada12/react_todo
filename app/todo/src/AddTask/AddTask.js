import React from "react";
import PropTypes from "prop-types";

const AddTask = (props) => (
  <div>
    <form>
      <input
        data-testid="form"
        type="text"
        value={props.input}
        onChange={props.onChangeInput}
      />
    </form>
    <button onClick={props.addTask}>
      Add Task
    </button>
  </div>
)

AddTask.propTypes = {
  input: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired
};

export default AddTask;