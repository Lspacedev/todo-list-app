import { useState } from "react";
import DisplayTasks from "./displayTasks";
import Profile from "./profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import SidemenuLinks from "./sidemenuLinks";

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
        <h3 className="logo">todoList</h3>
        <div className="sidemenu-links">
          <SidemenuLinks>
            <MdOutlineDashboard className="sidemenu-icons" />
            Dashboard
          </SidemenuLinks>

          <Link to="profile" className="link">
            <SidemenuLinks>
              <CgProfile className="sidemenu-icons" />
              <p>Profile</p>
            </SidemenuLinks>
          </Link>
          <Link to="todos" className="link">
            <SidemenuLinks>
              <FaTasks className="sidemenu-icons" />
              <p>Tasks</p>
            </SidemenuLinks>
          </Link>
          <SidemenuLinks>
            <div onClick={handleLogOut}>Logout</div>
          </SidemenuLinks>
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
