import React from 'react';

const Press=({handleAddTask}) =>{
    return <button className='todo-press'
    onClick={handleAddTask}
    >Add</button>
};
export default Press; 