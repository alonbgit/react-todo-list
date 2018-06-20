import React, { Component } from 'react';
import './TaskList.scss';
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends Component {

    render() {
        return (
            <div className="task-list">
                <ul>
                    {this.props.tasks.map((task) => {
                        return <TaskItem task={task}/>
                    })}
                </ul>
            </div>
        )
    }

}

export default TaskList;