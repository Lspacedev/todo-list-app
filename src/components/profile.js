import { useState } from "react";

function Profile({ username, password, handleUserUpdate }) {
  const [usernam, setUsernam] = useState("");
  const [update, setUpdate] = useState(false);

  function handleSubmit(newName) {
    handleUserUpdate(newName);
    setUpdate(false);
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUsernam(value);
  }

  return (
    <div className="Profile">
      <div className="profile-picture"></div>
      <div className="contact-details">
        <h1>Account details</h1>
        {update && (
          <div>
            <div className="name">
              <label htmlFor="user-name">
                Update username:
                <input
                  type="text"
                  id="user-name"
                  onChange={(e) => handleChange(e)}
                  value={usernam}
                />
              </label>
            </div>
            <button onClick={() => handleSubmit(usernam)}>Submit</button>
          </div>
        )}
        {/*<div className="fname-sname">
          <div className="fname">
            <h3>First name:</h3>
            <div>Name</div>
          </div>
          <div className="sname">
            <h3>Surname:</h3>
            <div>Name</div>
          </div>
        </div>
        <div className="phone">
          <div className="pnumber">
            <h3>Phone number:</h3>
            <div>1111 1111 11</div>
          </div>
        </div>*/}
        <div className="user-pass">
          <div className="user">
            <h4>Username:</h4>
            <div>{username}</div>
          </div>

          <div className="pass">
            <h4>Password:</h4>
            <div>{password}</div>
          </div>
        </div>
        <button onClick={() => setUpdate(true)}>Update</button>
      </div>
    </div>
  );
}
export default Profile;
