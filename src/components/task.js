import { useState } from "react";
function Task({
  name,
  definition,
  priority,
  status,
  dueDate,
  edit,
  handleTaskDelete,
  handleTaskUpdate,
  handleTaskResubmit,
}) {
  const [obj, setObj] = useState({
    taskName: "",
    definition: "",
    priority: "",
    status: "",
    dueDate: "",
    edit: false,
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setObj((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="Task">
      {edit === true ? (
        <div className="update-form">
          <div className="name">
            <label htmlFor="task-name">
              Task name:
              <input
                type="text"
                id="task-name"
                name="taskName"
                onChange={(e) => handleChange(e)}
                placeholder={name}
                value={obj.taskName}
              />
            </label>
          </div>

          <div className="definition">
            <label htmlFor="definition">
              Definition:
              <input
                type="text"
                id="definition"
                name="definition"
                onChange={(e) => handleChange(e)}
                placeholder={definition}
                value={obj.definition}
              />
            </label>
          </div>
          <div className="priority">
            <label htmlFor="priority">
              Priority:
              <input
                type="text"
                id="priority"
                name="priority"
                onChange={(e) => handleChange(e)}
                placeholder={priority}
                value={obj.priority}
              />
            </label>
          </div>
          <div className="status">
            <label htmlFor="status">
              Status:
              <input
                type="text"
                id="status"
                name="status"
                onChange={(e) => handleChange(e)}
                placeholder={status}
                value={obj.status}
              />
            </label>
          </div>

          <div className="due-date">
            <label htmlFor="due-date">
              Date:
              <input
                type="date"
                id="due-date"
                name="dueDate"
                onChange={(e) => handleChange(e)}
                placeholder={dueDate}
                value={obj.dueDate}
              />
            </label>
          </div>
        </div>
      ) : (
        <div className="Employee">
          <h3>{name}</h3>
          <h5>{definition}</h5>
          <h5>{priority}</h5>
          <h6>{status}</h6>
          <h6>{dueDate}</h6>
        </div>
      )}
      <div className="delete-update">
        <button
          className="update"
          onClick={() => {
            edit ? handleTaskResubmit(name, obj) : handleTaskUpdate(name);
          }}
        >
          {edit ? "Update" : "Edit"}
        </button>

        <button className="delete" onClick={() => handleTaskDelete(name)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
