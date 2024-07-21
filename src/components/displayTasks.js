import { useState, useEffect } from "react";

import Task from "./task";

function DisplayTasks({
  tasks,
  handleTaskDelete,
  handleTaskUpdate,
  handleTaskResubmit,
}) {
  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  /* Update screen on every change in search input */

  useEffect(() => {
    if (searchInput.length > 0) {
      setSearchResults(
        tasks.filter(
          (task) =>
            task.taskName.toLowerCase().match(searchInput.toLowerCase()) ||
            task.priority.toLowerCase().match(searchInput.toLowerCase()),
        ),
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

  return (
    <div className="Display">
      <div className="search-div">
        {/*<IoIosSearch
          id="search-icon"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "1.6rem",
            marginRight: "0px",
            padding: "0px",
          }}
        />*/}
        <input
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
          value={searchInput}
        />
      </div>

      <ul className="employees-display">
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
