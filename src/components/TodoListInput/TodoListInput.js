import React, { Component } from 'react';
import './TodoListInput.scss';

class TodoListInput extends Component {

    state = {
        taskName: ''
    }

    render() {
        return (
            <div className="todo-list-input">
                <input type="text"
                       value={this.state.taskName}
                       onChange={(e) => this.setState({taskName: e.target.value})}/>
                <button onClick={() => this.props.addTask(this.state.taskName)}>Add Task</button>
            </div>
        ) 
    }

}

export default TodoListInput;