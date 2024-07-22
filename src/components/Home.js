import { useState } from "react";
import AddTask from "./addTask";
import DisplayTasks from "./displayTasks";
import Profile from "./profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import ProtectedRoutes from "./components/ProtectedRoute";

function Home({
  tasks,
  handleAddTask,
  handleTaskDelete,
  handleTaskUpdate,
  handleTaskResubmit,
}) {
  const [profileClick, setProfileClick] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <Link to="profile">
        <div
          onClick={() => {
            setProfileClick(true);
          }}
        >
          Profile
        </div>
      </Link>
      <AddTask handleAddTask={handleAddTask} />
      <DisplayTasks
        tasks={tasks}
        handleTaskDelete={handleTaskDelete}
        handleTaskUpdate={handleTaskUpdate}
        handleTaskResubmit={handleTaskResubmit}
      />
      {/*<Routes>
          <Route element={<ProtectedRoutes loginStatus={profileClick} />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>*/}
    </div>
  );
}

export default Home;
