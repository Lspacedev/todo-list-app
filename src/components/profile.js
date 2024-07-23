function Profile({ username, password }) {
  return (
    <div className="Profile">
      <div className="profile-picture"></div>
      <div className="contact-details">
        <h1>Account details</h1>
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
            <h3>Username:</h3>
            <div>{username}</div>
          </div>
          <div className="pass">
            <h3>Password:</h3>
            <div>{password}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
