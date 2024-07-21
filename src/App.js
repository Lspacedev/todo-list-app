import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { username: "guest", password: "guest" },
  ]);
  const [loginStatus, setLoginStatus] = useState(false);

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
      <Login handleLoginSubmit={handleLoginSubmit} />
      <Home />
    </div>
  );
}

export default App;
