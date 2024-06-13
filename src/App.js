import React from 'react';
import './index.css';
import Header from './components/Header';
import Todo from './components/Todo';
import Press from './components/Press';
const App =() =>{
  return ( 
    <div className='Todo-Container'>
      <Header title="Todoie App"/>
      <Todo text="Eat"/>
      <Todo text="Play"/>
      <Todo text="Code"/>
      <Todo text="Study"/>
      <Todo text="Sleep Again"/>
      <Press/>
    </div>
  );
};


export default App;
