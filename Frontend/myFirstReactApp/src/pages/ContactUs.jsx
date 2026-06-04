import { Link } from "react-router-dom";


function Content() {
  return (
    <>
      <main>
        <div className="container-fluid bgimage position-relative d-flex align-items-center">
          <div className="container my-5">
            <div className="row">
              <div className="col-md-5">
                <div className="card shadow-lg p-4 login-card bg-white text-center">
                  <h2 className="fw-bold text-danger mb-2">Contact Us</h2>
                  <p className="text-muted mb-4">
                    Have a question? We'd love to hear from you.
                  </p>

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
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What is this about"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control pb-5"
                        placeholder="Enter your message hear..."
                      />
                    </div>
                    <Link to={"/login"}>
                      <button className="btn w-100 text-white btn-primary rounded rounded-5">
                        Login
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Content;
