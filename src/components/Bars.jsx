 import React from 'react';

const Bars=({title,description,setTitle,setDescription}) =>{
    return (
        <>
        <div className='todo-input'> 
        <div className='Bars'>
       <label>Task to do</label>
       <input
        type="text"
         placeholder='Write Task here'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         
        ></input>
       </div>
       <div className='Bars'>
       <label>Description</label>
       <input type="text" 
       placeholder='Write Description here'
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       ></input>
       </div>
       </div>
       </>
    )
};
export default Bars; 