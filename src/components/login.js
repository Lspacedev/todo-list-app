import { useState } from "react";

function Login({ handleLoginSubmit }) {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLoginSubmit(loginDetails);
  }

  return (
    <div>
      <h1>Login </h1>
      <form>
        <div className="username">
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => handleChange(e)}
              value={loginDetails.username}
            />
          </label>
        </div>

        <div className="password">
          <label htmlFor="password">
            Password:
            <input
              type="text"
              id="password"
              name="password"
              onChange={(e) => handleChange(e)}
              value={loginDetails.password}
            />
          </label>
        </div>

        <input
          type="submit"
          value="submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
      </form>

      <button>Go to home page</button>
    </div>
  );
}

export default Login;
