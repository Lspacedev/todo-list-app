import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <nav>
        <div>Todo List</div>
        <div>
          <Link to="login">Login</Link>
          <Link to="registration">Register</Link>
        </div>
      </nav>
      <div>
        <h2>Organize your day to day tasks.</h2>
      </div>
    </div>
  );
}

export default Landing;
