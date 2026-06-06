import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top  ">
        <div className="container mx-2 w-100 ">
          <Link
            to={"/"}
            className="navbar-brand text-white d-flex justify-content-start m-0 p-0"
          >
            <img
              src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png"
              alt="Cravings Logo"
              width="100"
              height="auto"
              className="text-start"
            />
          </Link>

          <div className="collapse navbar-collapse" id="nav">
            <div className="navbar-nav ms-auto">
              <div className="nav-item">
                <Link to={"/login"} className="nav-link text-white">
                  Login
                </Link>
              </div>
              <dev className="nav-item">
                <Link to={"/register"} className="btn btn-outline-light ms-2">
                  Register
                </Link>
              </dev>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
