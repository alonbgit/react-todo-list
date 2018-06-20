import React, { Component } from 'react';
import './TaskItem.scss';

class TaskItem extends Component {

    render() {
        return (
            <li className="task-item">
                <span className="task-name">{ this.props.task.name }</span>
                <span onClick={this.props.deleteTask}>✕</span>
            </li>
        )
    }

}

export default TaskItem;
