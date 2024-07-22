import { useState } from "react";
function Registration({ handleRegistrationSubmit }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegistrationSubmit(userDetails);
  }

  return (
    <div>
      <h1>Registration</h1>
      <form>
        <div className="username">
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => handleChange(e)}
              value={userDetails.username}
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
              value={userDetails.password}
            />
          </label>
        </div>

        <input
          type="submit"
          value="submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
      </form>
    </div>
  );
}

export default Registration;
