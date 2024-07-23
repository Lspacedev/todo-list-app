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
        {clicked ? (
          <Form handleAddTask={handleAddTask} toggleClicked={toggleClicked} />
        ) : (
          <button onClick={toggleClicked}>New Task</button>
        )}
      </div>
    </div>
  );
}
export default AddTask;
