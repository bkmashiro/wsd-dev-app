import "./App.css";
import Task from "./components/task";
import React, { useState } from "react";

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {
        id: 1,
        title: "Dishes",
        description: "Empty dishwasher",
        deadline: "Today",
        done: false,
      },
      {
        id: 2,
        title: "Laundry",
        description: "Fold clothes and put away",
        deadline: "Tomorrow",
        done: false,
      },
      { id: 3, title: "Tidy up", deadline: "Today", done: false },
    ],
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map(({ title, description, deadline, id, done }, idx) => (
        <Task
          title={title}
          description={description}
          deadline={deadline}
          key={id}
          done={done}
          markDone={() => doneHandler(idx)}
          deleteTask = {() => deleteHandler(idx)}
        />
      ))}
    </div>
  );
}

export default App;
