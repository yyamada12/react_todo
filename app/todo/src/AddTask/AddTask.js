import React from "react";
import PropTypes from "prop-types";

export default class AddTask extends React.Component {
  state = {
    input: ""
  };
  render() {
    return (
      <div>
        <form>
          <input
            data-testid="form"
            type="text"
            onChange={e => this.setState({ input: e.target.value })}
          />
        </form>
        <button onClick={() => this.props.addTask(this.state.input)}>
          Add Task
        </button>
      </div>
    );
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired
};
