import { Routes, Route, Link, Outlet } from "react-router-dom";

function User() {
  return (
    <>
      <h1>User</h1>

      <nav>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default User;
