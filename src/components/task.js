import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

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

  function handleDropdownChange(e) {
    const { name, value } = e.target;
    setObj((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="Task">
      <div className="task-content">
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
                <select
                  name="priority"
                  onChange={handleDropdownChange}
                  value={obj.value}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </label>
            </div>
            <div className="status">
              <label htmlFor="status">
                Status:
                <select
                  name="status"
                  onChange={handleDropdownChange}
                  value={obj.status}
                >
                  <option value="Not Completed">Not Completed</option>
                  <option value="Completed">Completed</option>
                </select>
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
          <div className="task-info">
            {priority == "High" ? (
              <div className="high"></div>
            ) : priority == "Medium" ? (
              <div className="medium"></div>
            ) : (
              <div className="low"></div>
            )}
            <div>
              <div className="title">Name:</div>
              <h5>{name}</h5>
            </div>
            <div>
              <div className="title">Definition:</div>
              <h5>{definition}</h5>
            </div>
            <div>
              <div className="title">Priority:</div>
              <h5>{priority}</h5>
            </div>
            <div>
              <div className="title">Status:</div>
              <h5>{status}</h5>
            </div>
            <div>
              <div className="title">Due Date:</div>
              <h5>{dueDate}</h5>
            </div>
          </div>
        )}
        <div className="delete-update">
          <button
            className="update"
            onClick={() => {
              edit ? handleTaskResubmit(name, obj) : handleTaskUpdate(name);
            }}
          >
            {edit ? "Update" : <FaEdit className="edit-icon" />}
          </button>

          <button className="delete" onClick={() => handleTaskDelete(name)}>
            <MdOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
