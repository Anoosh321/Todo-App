import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';


const ListArea = ({ tasks, handleDeleteTask, handleEditTask }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');

  const handleEditClick = (task, index) => {
    setEditingIndex(index);
    setEditingTitle(task.title);
    setEditingDescription(task.description);
  };

  const handleSaveClick = (index) => {
    handleEditTask(index, editingTitle, editingDescription);
    setEditingIndex(null);
    setEditingTitle('');
    setEditingDescription('');
  };

  return (
    <div className='list-Area'>
      {tasks.map((task, index) => (
        <div key={index} className="list-Area">
          {editingIndex === index ? (
            <div className="edit-area">
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              <input
                type="text"
                value={editingDescription}
                onChange={(e) => setEditingDescription(e.target.value)}
              />
              <button onClick={() => handleSaveClick(index)}>Save</button>
            </div>
          ) : (
            <div className={`list-Area-items ${task.completed ? 'completed' : ''}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          )}
          <div className="icon-container">
            <AiOutlineDelete className="icon" onClick={() => handleDeleteTask(index)} />
            <AiOutlineEdit className="icon" onClick={() => handleEditClick(task, index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListArea;