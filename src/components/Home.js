import { useState } from "react";
import AddTask from "./addTask";
import DisplayTasks from "./displayTasks";
function Home({
  tasks,
  handleAddTask,
  handleTaskDelete,
  handleTaskUpdate,
  handleTaskResubmit,
}) {
  return (
    <div>
      <h1>Home</h1>
      <AddTask handleAddTask={handleAddTask} />
      <DisplayTasks
        tasks={tasks}
        handleTaskDelete={handleTaskDelete}
        handleTaskUpdate={handleTaskUpdate}
        handleTaskResubmit={handleTaskResubmit}
      />
    </div>
  );
}

export default Home;
