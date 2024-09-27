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
      },
      {
        id: 1,
        title: "Laundry",
        description: "Fold clothes and put away",
        deadline: "Tomorrow",
      },
      { id: 3, title: "Tidy up", deadline: "Today" },
    ],
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map(({ title, description, deadline, id }, idx) => (
        <Task
          title={title}
          description={description}
          deadline={deadline}
          // key={idx} // alternative
          key={id}
        />
      ))}
    </div>
  );
}

export default App;
