import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
function Login() {
  return (
    <>
      {" "}
      <div className="container-fluid bgimage position-relative d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="card shadow-lg p-4 login-card bg-white">
                <h2 className="fw-bold text-danger mb-2">Welcome Back</h2>
                <p className="text-muted mb-4">
                  Login to your Cravings account
                </p>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <span className="input-group-text">
                        <BsEye />
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Remember me</label>
                    </div>
                    <a href="#" className="text-danger text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  <button className="btn w-100 text-white bg-color">
                    Login
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-1">Don't have an account?</p>
                  <Link
                    to={"/register"}
                    className="text-danger fw-semibold text-decoration-none"
                  >
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
