import React, { Component } from 'react';
import './TodoList.scss';
import TodoListInput from '../TodoListInput/TodoListInput';

class TodoList extends Component {

    state = {
        tasks: []
    }

    render() {
        return (
            <div className="todo-list">
                <TodoListInput addTask={this.onTaskAdded}/>
            </div>
        )
    }

    onTaskAdded(taskName) {
        const tasks = [...this.state.tasks];
        tasks.push(taskName);
        this.setState({
            tasks: tasks
        });
    }

}

export default TodoList;