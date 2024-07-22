import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import Registration from "./components/registration";
import { useEffect, useState } from "react";

function App() {
  //users array
  const [users, setUsers] = useState([
    { username: "guest", password: "guest", tasks: [] },
  ]);
  const [currentUser, setCurrentUser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    console.log("updating...");
    const usersCopy = users.slice(0);
    const foundUser = usersCopy.find(
      (user) => user.username === currentUser.username
    );
    if (foundUser) {
      foundUser.tasks = currentUser.tasks.slice(0);
    }

    setUsers(usersCopy);
  }, [currentUser]);

  function handleRegistrationSubmit(obj) {
    //check if user exists
    const filteredUser = users.filter((user) => user.username === obj.username);
    if (filteredUser.length > 0) {
      console.log("user already exists");
    } else {
      setUsers((prev) => [...prev, obj]);
    }
  }

  function handleLoginSubmit(obj) {
    const findUser = users.filter((user) => user.username === obj.username);
    if (findUser.length > 0) {
      let [user] = findUser;
      console.log("user exists", obj, findUser);
      if (user.password === obj.password) {
        console.log("login success!");
        setLoginStatus(true);
        setCurrentUser(user);
      } else {
        console.log("invalid login password");
      }
    } else {
      console.log("user does not exist");
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
  console.log(users);
  return (
    <div className="App">
      <Registration handleRegistrationSubmit={handleRegistrationSubmit} />
      <Login handleLoginSubmit={handleLoginSubmit} />
      <Home
        tasks={currentUser.tasks || []}
        handleAddTask={handleAddTask}
        handleTaskDelete={handleTaskDelete}
        handleTaskUpdate={handleTaskUpdate}
        handleTaskResubmit={handleTaskResubmit}
      />
    </div>
  );
}

export default App;
