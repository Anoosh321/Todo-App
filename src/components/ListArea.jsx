import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const ListArea=({tasks,handleDeleteTask,handleCompleteTask}) =>{
    return(
        
        <div className='list-Area'>
          <div className='list-Area-items'>  
          {tasks.map((task, index) => (
          <div key={index} className="list-Area">
            <div className={`list-Area-items ${task.completed ? 'completed' : ''}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="icon-container">
              <AiOutlineDelete className="icon" onClick={() => handleDeleteTask(index)} />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListArea;