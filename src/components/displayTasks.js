import { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import AddTask from "./addTask";

import Task from "./task";

function DisplayTasks({
  tasks,
  handleAddTask,
  handleTaskDelete,
  handleTaskUpdate,
  handleTaskResubmit,
  changePage,
}) {
  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  //navigation
  const navigation = useNavigate();

  /* Update screen on every change in search input */

  useEffect(() => {
    if (searchInput.length > 0) {
      setSearchResults(
        tasks.filter(
          (task) =>
            task.taskName.toLowerCase().match(searchInput.toLowerCase()) ||
            task.priority.toLowerCase().match(searchInput.toLowerCase())
        )
      );
    }
    return () => {
      setSearchResults([]);
    };
  }, [tasks, searchInput]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  function handleNavigateProfile() {
    navigation("/home/profile");
  }

  return (
    <div className="Display">
      <div className="search-profile">
        <div className="search-div">
          <IoIosSearch
            id="search-icon"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontSize: "1.6rem",
              marginRight: "0px",
              padding: "0px",
            }}
          />
          <input
            type="search"
            placeholder="Search"
            onChange={handleSearchChange}
            value={searchInput}
          />
        </div>
        <div onClick={handleNavigateProfile} className="profile-link">
          Profile
        </div>
      </div>
      <div className="add">
        <div className="add-task">
          <AddTask handleAddTask={handleAddTask} />
        </div>
      </div>

      <ul className="tasks-display">
        {searchResults.length !== 0
          ? searchResults.map((task) => (
              <li key={task.taskName}>
                <Task
                  name={task.taskName}
                  definition={task.definition}
                  priority={task.priority}
                  status={task.status}
                  dueDate={task.dueDate}
                  edit={task.edit}
                  handleTaskDelete={handleTaskDelete}
                  handleTaskUpdate={handleTaskUpdate}
                  handleTaskResubmit={handleTaskResubmit}
                />
              </li>
            ))
          : tasks.map((task) => (
              <li key={task.taskName}>
                <Task
                  name={task.taskName}
                  definition={task.definition}
                  priority={task.priority}
                  status={task.status}
                  dueDate={task.dueDate}
                  edit={task.edit}
                  handleTaskDelete={handleTaskDelete}
                  handleTaskUpdate={handleTaskUpdate}
                  handleTaskResubmit={handleTaskResubmit}
                />
              </li>
            ))}
      </ul>
    </div>
  );
}

export default DisplayTasks;
