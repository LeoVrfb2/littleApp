import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskData } from './CreationComposantAvecCGPT/types';
import TaskList from './CreationComposantAvecCGPT/TaskList';
import AddTask from './CreationComposantAvecCGPT/AddTask';
import Test from './InterfaceOjbjet/InterfaceObjet';
import LesClasses from './LesClass/LesClasses';

const tasksData: TaskData[] = [
  { id: uuidv4(), text: 'Faire les courses', completed: false },
  { id: uuidv4(), text: 'Aller à la gym', completed: true },
  { id: uuidv4(), text: 'Lire un livre', completed: false }
];

function App() {
  const [tasks, setTasks] = useState<TaskData[]>(tasksData);

  const handleTaskAddition = (taskText: string) => {
    const newTasks = [...tasks, { id: uuidv4(), text: taskText, completed: false }];
    setTasks(newTasks);
  };

  const handleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  const handleTaskDeletion = (taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter(task => task.completed);


  return (
    <div>
      {/* <h1>Ma liste de tâches</h1>
      <TaskList tasks={tasks} handleTaskCompletion={handleTaskCompletion} handleTaskDeletion={handleTaskDeletion} completedTasks={completedTasks} />
      <AddTask handleTaskAddition={handleTaskAddition} /> */}
      <Test />
      <LesClasses />
    </div>
  );
}

export default App;
