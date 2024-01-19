import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask = {
        name: taskName,
        taskDate: taskDate.toLocaleString(),
        dateAdded: new Date().toLocaleString(),
        completed: false,
      };
      onAdd(newTask);
      setTaskName('');
      setTaskDate(new Date());
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-3 row" >
      <div className="form-group col-5">
        <label htmlFor="taskName" className="form-label">Task Name:</label>
        <input
          type="text"
          id="taskName"
          className="form-control"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className="form-group col-3">
        <div>
            <label htmlFor="taskDate">Task Date:</label>
        </div>
        <DatePicker
          id="taskDate"
          className="form-control w-100 mt-2"
          selected={taskDate}
          onChange={(date) => setTaskDate(date)}
          dateFormat="MMMM d, yyyy"
          required
        />
      </div>
      <div className='text-center mt-4 col-4'>
        <button type="submit" className="btn btn-primary w-100">
            Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
