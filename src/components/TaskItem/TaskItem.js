import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        return (
            <div className="task-item">
                <span>{ this.props.task }</span>
            </div>
        )
    }

}

export default TaskItem;
