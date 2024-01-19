import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import 'react-datepicker/dist/react-datepicker.css';

const TaskItem = ({ task, onDelete, onToggle, index }) => {
    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided) => (
                <li
                    className={`list-group-item ${task.completed ? 'list-group-item-success' : ''} row`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='col-12'>
                                {task.name}
                            </h3>
                        </div>
                        <div className='col-md-6'>
                            <p className="mb-0">Task Date: {task.taskDate}</p>
                            <p className="mb-0">Date Added: {task.dateAdded}</p>
                        </div>
                        <div className='col-md-6'>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`completed-${task.id}`}
                                    checked={task.completed}
                                    onChange={() => onToggle(task.id)}
                                />
                                <label className="form-check-label" htmlFor={`completed-${task.id}`}>
                                    Mark as Completed
                                </label>
                            </div>
                            <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            )}
        </Draggable>
    );
};

export default TaskItem;
