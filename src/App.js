import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import Registration from "./components/registration";
import Landing from "./components/landing";
import ProtectedRoutes from "./components/ProtectedRoute";
import Profile from "./components/profile";
import DisplayTasks from "./components/displayTasks";
import useLocalStorage from "./components/useLocalStorage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //users array
  const [users, setUsers] = useLocalStorage("users", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {});
  const [loginStatus, setLoginStatus] = useLocalStorage("loginStatus", false);
  const [registrationStatus, setRegistrationStatus] = useState(false);

  useEffect(() => {
    const usersCopy = users.slice(0);
    const foundUser = usersCopy.find(
      (user) => user.username === currentUser.username
    );
    if (foundUser) {
      foundUser.tasks = currentUser.tasks.slice(0);
    }

    setUsers(usersCopy);
  }, [users, setUsers, currentUser]);

  function handleUserUpdate(obj) {
    const usersCopy = { ...currentUser };
    if (obj.username) {
      usersCopy.username = obj.username;
    }

    if (obj.password) {
      usersCopy.password = obj.password;
    }

    setCurrentUser(usersCopy);
  }

  function handleRegistrationSubmit(obj) {
    //check if user exists
    const filteredUser = users.filter((user) => user.username === obj.username);
    if (filteredUser.length > 0) {
      alert("user already exists");
    } else if (obj.username === "" || obj.password === "") {
      alert("no user info");
    } else {
      alert("Account created.");
      setUsers((prev) => [...prev, obj]);
      setRegistrationStatus(true);
    }
  }

  function handleLoginSubmit(obj) {
    const findUser = users.filter((user) => user.username === obj.username);
    if (findUser.length > 0) {
      let [user] = findUser;
      if (user.password === obj.password) {
        setLoginStatus(true);
        setCurrentUser(user);
      } else {
        alert("invalid login password");
      }
    } else {
      alert("user does not exist");
    }
  }

  //const [tasks, setTasks] = useState([]); //useLocalStorage("tasks", []);

  function handleAddTask(obj) {
    //find task
    const filteredTask = currentUser.tasks.filter(
      (task) => task.taskName === obj.taskName
    );

    //if task doesn't exist add them
    if (filteredTask.length === 0) {
      //setCurrentUser({ ...currentUser, tasks: [...currentUser.tasks, obj] });
      setCurrentUser((prev) => ({ ...prev, tasks: [...prev.tasks, obj] }));
    }
  }

  function handleTaskDelete(name) {
    const filteredTasks = currentUser.tasks.filter(
      (task) => task.taskName !== name
    );
    setCurrentUser((prev) => ({ ...prev, tasks: filteredTasks }));
  }

  function handleTaskUpdate(name) {
    const tasksCopy = currentUser.tasks.slice(0);
    let task = tasksCopy.find((task) => task.taskName === name);
    task.edit = true;

    setCurrentUser((prev) => ({ ...prev, tasks: tasksCopy }));
  }

  function handleTaskResubmit(name, obj) {
    const tasksCopy = currentUser.tasks.slice(0);
    let task = tasksCopy.find((task) => task.taskName === name);
    if (obj.taskName) {
      task.taskName = obj.taskName;
    }
    if (obj.definition) {
      task.definition = obj.definition;
    }
    if (obj.position) {
      task.position = obj.position;
    }
    if (obj.priority) {
      task.priority = obj.priority;
    }
    if (obj.status) {
      task.status = obj.status;
    }
    if (obj.dueDate) {
      task.dueDate = obj.dueDate;
    }

    task.edit = false;

    setCurrentUser((prev) => ({ ...prev, tasks: tasksCopy }));
  }

  function handleLogOut() {
    setLoginStatus(false);
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="registration"
            element={
              <Registration
                handleRegistrationSubmit={handleRegistrationSubmit}
                registrationStatus={registrationStatus}
              />
            }
          />
          <Route
            exact
            path="login"
            element={
              <Login
                handleLoginSubmit={handleLoginSubmit}
                loginStatus={loginStatus}
              />
            }
          />

          <Route element={<ProtectedRoutes loginStatus={loginStatus} />}>
            {/*<Route
              path="home"
              element={
                <Home
                  tasks={currentUser.tasks || []}
                  handleAddTask={handleAddTask}
                  handleTaskDelete={handleTaskDelete}
                  handleTaskUpdate={handleTaskUpdate}
                  handleTaskResubmit={handleTaskResubmit}
                  handleLogOut={handleLogOut}
                />
              }
            />*/}
            <Route path="home" element={<Home handleLogOut={handleLogOut} />}>
              <Route
                index
                element={
                  <DisplayTasks
                    tasks={currentUser.tasks || []}
                    handleAddTask={handleAddTask}
                    handleTaskDelete={handleTaskDelete}
                    handleTaskUpdate={handleTaskUpdate}
                    handleTaskResubmit={handleTaskResubmit}
                  />
                }
              />
              <Route
                path="profile"
                element={
                  <Profile
                    username={currentUser.username}
                    password={currentUser.password}
                    handleUserUpdate={handleUserUpdate}
                  />
                }
              />
              <Route
                path="todos"
                element={
                  <DisplayTasks
                    tasks={currentUser.tasks || []}
                    handleAddTask={handleAddTask}
                    handleTaskDelete={handleTaskDelete}
                    handleTaskUpdate={handleTaskUpdate}
                    handleTaskResubmit={handleTaskResubmit}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
        {/*<Registration handleRegistrationSubmit={handleRegistrationSubmit} />*/}
      </div>
    </Router>
  );
}

export default App;
