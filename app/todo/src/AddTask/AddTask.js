import React from 'react'

export default class AddTask extends React.Component {

    render() {
        return (
            <div>
                <form data-testid="form">
                    <input type="text"/>
                </form>
                <button data-testid="addButton">Add Task</button>
            </div>
        )
    }
}
