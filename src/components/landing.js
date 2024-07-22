import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <nav>
        <div className="logo">todo List</div>
        <div className="login-register">
          <Link to="login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="registration">
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </nav>
      <div className="landing-info">
        <div className="landing-title">Organize your day to day tasks.</div>
        <div className="landing-subtitle">Organize your day to day tasks.</div>
        <button className="register-btn2">Register</button>
      </div>
    </div>
  );
}

export default Landing;
