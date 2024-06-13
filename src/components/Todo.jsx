import React from 'react';

const Todo=(props) =>{
    return (
        <li className='todo-item'>
           <span>
            <input type="checkbox"></input>
            <span className='todo-text'>{props.text}</span>
            </span>
            <p>...</p>
        </li>
        
    )
};
export default Todo;