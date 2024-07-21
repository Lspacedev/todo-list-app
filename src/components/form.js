import { useState } from "react";

function Form({ handleAddTask, toggleClicked }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask(obj);
    toggleClicked();
  }

  return (
    <div className="Form">
      <div className="form-div">
        <h3>Task Information</h3>

        <form>
          <div className="name">
            <label htmlFor="task-name">
              Task name:
              <input
                type="text"
                id="task-name"
                name="taskName"
                onChange={(e) => handleChange(e)}
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
                value={obj.dueDate}
              />
            </label>
          </div>

          <input
            type="submit"
            value="submit"
            onClick={(e) => handleSubmit(e)}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Form;
