import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div className="container-fluid bgimage position-relative d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-5 col-lg-4">
              <div className="card p-4 shadow card-custom">
                <h3 className="text-center mb-2 text-color fw-bold">
                  Create Account
                </h3>
                <p className="text-center text-muted small">
                  Join us as a Customer, Restaurant, or Rider
                </p>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Register as:</label>

                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="customer"
                        value="customer"
                        checked
                      />
                      <label className="form-check-label" for="customer">
                        Customer
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="restaurant"
                        value="restaurant"
                      />
                      <label className="form-check-label" for="restaurant">
                        Restaurant
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="rider"
                        value="rider"
                      />
                      <label className="form-check-label" for="rider">
                        Rider
                      </label>
                    </div>
                  </div>
                </div>

                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                    />
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label small">
                      I agree to the
                      <span className="text-danger">terms and conditions</span>.
                    </label>
                  </div>

                  <button className="btn w-100 text-white bg-color">
                    Register
                  </button>
                </form>

                <p className="text-center small mt-3">
                  Already registered?
                  <Link
                    to={"/login"}
                    className="text-danger text-decoration-none"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
