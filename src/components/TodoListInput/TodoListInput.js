import React, { Component } from 'react';
import './TodoListInput.scss';

class TodoListInput extends Component {

    render() {
        return (
            <div className="todo-list-input">
                <input type="text"/>
                <button onClick={this.props.addTask}>Add Task</button>
            </div>
        ) 
    }

}

export default TodoListInput;