import React, { Component } from 'react';
import './TodoList.scss';
import TodoListInput from '../TodoListInput/TodoListInput';
import TaskList from '../TaskList/TaskList';
import httpService from '../../services/httpService';

class TodoList extends Component {

    state = {
        tasks: []
    }

    componentWillMount() {
        httpService.get('/tasks').then((response) => {
            this.setState({
                tasks: response.data
            });
        }).catch((ex) => {
            console.log('ERROR', ex);
        });
    }

    render() {
        return (
            <div className="todo-list">
                <TodoListInput addTask={this.onTaskAdded}/>
                <TaskList tasks={this.state.tasks}/>
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