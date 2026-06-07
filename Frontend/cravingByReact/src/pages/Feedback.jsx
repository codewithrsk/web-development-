function Feedback() {
  return (
    <>
      <main>
        <div className="container-fluid bgimage position-relative d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-5 col-lg-4">
                <div className="card p-4 shadow card-custom">
                  <h3 className="text-center mb-2 text-danger fw-bold">
                    Share Feedback
                  </h3>
                  <p className="text-center text-muted small">
                    Help us improve your Cravings experience.
                  </p>

                  <form>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email</label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>
                      <div className="input-group">
                        <select name="" id="" className="form-select">
                          <option value="">Select a Category</option>
                          <option value="">Food Quality</option>
                          <option value="">Delivery Experience</option>
                          <option value="">App & Website</option>
                          <option value="">Customer Support</option>
                          <option value="">Pricing & Value</option>
                        </select>
                      </div>
                    </div>
                    <div className=" d-flex">
                      <label className="form-label fw-semibold me-3">
                        Overall Rating
                      </label>
                      <div className="d-flex gap-2 star">
                        <p className="bi bi-star star"></p>
                        <p className="bi bi-star star"></p>
                        <p className="bi bi-star star"></p>
                        <p className="bi bi-star star"></p>
                        <p className="bi bi-star star"></p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="" className="fw-semibold">
                        Your Feedback
                      </label>
                      <input
                        type="text"
                        className="form-control pb-5"
                        placeholder="Tell us about your experience..."
                      />
                    </div>
                  </form>

                  <button className="btn w-100 text-white bg-color">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Feedback;
