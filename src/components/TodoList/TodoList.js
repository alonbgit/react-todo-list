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
                <TaskList tasks={this.state.tasks}
                          deleteTask={this.onDeleteTask}/>
            </div>
        )
    }

    onTaskAdded = (taskName) => {
        const tasks = [...this.state.tasks];
        tasks.push({
            id: Math.random(),
            name: taskName
        });
        this.setState({
            tasks: tasks
        });
    }

    onDeleteTask = (task) => {
        const taskToDeleteIndex = this.state.tasks.findIndex((c) => c.id == task.id);
        if (taskToDeleteIndex !== -1) {
            const tasks = [...this.state.tasks];
            tasks.splice(taskToDeleteIndex, 1);
            this.setState({
                tasks: tasks
            });
        }
    }

}

export default TodoList;