import { useState } from "react";
import DisplayTasks from "./displayTasks";
import Profile from "./profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";

//import ProtectedRoutes from "./components/ProtectedRoute";

function Home({
  tasks,
  handleAddTask,
  handleTaskDelete,
  handleTaskUpdate,
  handleTaskResubmit,
  handleLogOut,
}) {
  const [currentPage, setCurrentPage] = useState("todo");
  function changePage(page) {
    setCurrentPage(page);
  }
  return (
    <div className="Home">
      <div className="sidemenu">
        <h3 className="logo">todo List</h3>
        <div className="sidemenu-links">
          <div>
            <MdOutlineDashboard className="sidemenu-icons" />
            Dashboard
          </div>

          <Link to="profile" className="link">
            <div>
              <CgProfile className="sidemenu-icons" />
              Profile
            </div>
          </Link>
          <Link to="todos" className="link">
            <div>
              <FaTasks className="sidemenu-icons" />
              Tasks
            </div>
          </Link>

          <div onClick={handleLogOut}>Logout</div>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>

      {/*<div className="main">
        {currentPage === "profile" ? (
          <div>
            <Profile />
          </div>
        ) : (
          <div className="main-content">
            <div className="display-tasks">
              <DisplayTasks
                tasks={tasks}
                handleAddTask={handleAddTask}
                handleTaskDelete={handleTaskDelete}
                handleTaskUpdate={handleTaskUpdate}
                handleTaskResubmit={handleTaskResubmit}
                changePage={changePage}
              />
            </div>
          </div>
        )}
      </div>*/}
    </div>
  );
}

export default Home;
