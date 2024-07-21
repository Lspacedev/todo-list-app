import Form from "./form";
import { useState } from "react";
function AddTask({ handleAddTask }) {
  const [clicked, setClicked] = useState(false);

  function toggleClicked() {
    setClicked(!clicked);
  }
  return (
    <div className="Add">
      <div className="Add-div">
        <div className="logo"></div>

        <button onClick={toggleClicked}>New Task</button>
      </div>
      {clicked && (
        <Form handleAddTask={handleAddTask} toggleClicked={toggleClicked} />
      )}
    </div>
  );
}
export default AddTask;
