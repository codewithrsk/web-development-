import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand text-white m-0 p-0"
        >
          <img
            src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png"
            alt="Cravings Logo"
            width="100"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">qwerthjhgfdfhnm</span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <div className="navbar-nav ms-auto align-items-center">
            <Link
              to="/login"
              className="nav-link text-white me-2"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-outline-light"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;