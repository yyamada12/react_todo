import React from 'react'
import PropTypes from 'prop-types';

export default class TaskList extends React.Component {

    render() {
        return (
            <div data-testid="todos">
                { this.props.todos.length === 0 ? "Nothing Todo" : ""}
            </div>
        )
    }
}

TaskList.propTypes = {
    todos: PropTypes.array
}