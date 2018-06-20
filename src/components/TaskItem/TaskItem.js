import React, { Component } from 'react';
import './TaskItem.scss';

class TaskItem extends Component {

    render() {
        return (
            <li className="task-item">
                <span>{ this.props.task.name }</span>
            </li>
        )
    }

}

export default TaskItem;
