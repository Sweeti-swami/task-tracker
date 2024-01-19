import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggle, onDragEnd }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  return (
    <div>
      <div className="btn-group mb-3 mt-2 border">
        <button
          type="button"
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-light'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-light'}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          type="button"
          className={`btn ${filter === 'incomplete' ? 'btn-primary' : 'btn-light'}`}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul
              className="list-group pt-2 mt-2"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {filteredTasks.map((task, index) => (
                <TaskItem
                  key={task.id}
                  index={index}
                  task={task}
                  onDelete={onDelete}
                  onToggle={onToggle}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
