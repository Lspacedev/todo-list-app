import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import Registration from "./components/registration";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { username: "guest", password: "guest" },
  ]);
  const [loginStatus, setLoginStatus] = useState(false);

  function handleRegistrationSubmit(obj) {
    //check if user exists
    const filteredUser = users.filter((user) => user.username === obj.username);
    if (filteredUser.length > 0) {
      console.log("user already exists");
    } else {
      setUsers((prev) => [...prev, obj]);
    }
  }
  console.log(users);

  function handleLoginSubmit(obj) {
    const findUser = users.filter((user) => user.username === obj.username);
    if (findUser.length > 0) {
      let [user] = findUser;
      console.log("user exists", obj, findUser);
      if (user.password === obj.password) {
        console.log("login success!");
        setLoginStatus(true);
      } else {
        console.log("invalid login password");
      }
    } else {
      console.log("user does not exist");
    }
  }
  return (
    <div className="App">
      <Registration handleRegistrationSubmit={handleRegistrationSubmit} />
      <Login handleLoginSubmit={handleLoginSubmit} />
      <Home />
    </div>
  );
}

export default App;
