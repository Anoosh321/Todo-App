import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Bars from './components/Bars';
import Press from './components/Press';
import ListArea from './components/ListArea';

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (title && description) {
      const newTask = { title, description, completed: false };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index, newTitle, newDescription) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, title: newTitle, description: newDescription } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className='todo-wrapper'>
      <Header title="My Todos" />
      <Bars
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <Press handleAddTask={handleAddTask} />
      <ListArea
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
    </div>
  );
};

export default App;