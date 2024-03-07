import React from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { TasksProvider } from './Context/TasksContent.jsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Task</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
