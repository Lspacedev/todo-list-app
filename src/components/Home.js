import { useState } from "react";
import AddTask from "./addTask";
import DisplayTasks from "./displayTasks";
function Home() {
  const [tasks, setTasks] = useState([]); //useLocalStorage("tasks", []);

  function handleAddTask(obj) {
    //find task
    const filteredTask = tasks.filter((task) => task.taskName === obj.taskName);

    console.log("filter", filteredTask, obj);

    //if task doesn't exist add them
    if (filteredTask.length === 0) {
      setTasks((prev) => [...prev, obj]);
    }
  }

  function handleTaskDelete(name) {
    const filteredTasks = tasks.filter((task) => task.taskName !== name);
    setTasks(filteredTasks);
  }

  function handleTaskUpdate(name) {
    const tasksCopy = tasks.slice(0);
    let task = tasksCopy.find((task) => task.taskName === name);
    task.edit = true;

    setTasks(tasksCopy);
  }

  function handleTaskResubmit(name, obj) {
    const tasksCopy = tasks.slice(0);
    let task = tasksCopy.find((task) => task.taskName === name);
    if (obj.taskName) {
      task.taskName = obj.taskName;
    }
    if (obj.definition) {
      task.definition = obj.definition;
    }
    if (obj.position) {
      task.position = obj.position;
    }
    if (obj.priority) {
      task.priority = obj.priority;
    }
    if (obj.status) {
      task.status = obj.status;
    }
    if (obj.dueDate) {
      task.dueDate = obj.dueDate;
    }

    task.edit = false;

    setTasks(tasksCopy);
  }

  console.log(tasks);
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
