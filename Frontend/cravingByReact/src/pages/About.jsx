function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero d-flex align-items-center text-center bgimage">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <h1 className="fw-bold display-5 text-white">
            About <span className="text-warning">Cravings</span>
          </h1>

          <p className="lead text-white">
            Connecting hungry hearts with amazing food — one delivery at a time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats py-4 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="fw-bold text-orange">50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="col-md-3">
              <h3 className="fw-bold text-orange">1,200+</h3>
              <p>Partner Restaurants</p>
            </div>

            <div className="col-md-3">
              <h3 className="fw-bold text-orange">3,500+</h3>
              <p>Active Riders</p>
            </div>

            <div className="col-md-3">
              <h3>
                <i className="bi bi-star-fill text-warning"></i> 4.8
              </h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="text-uppercase fw-bold text-orange">
                Our Story
              </h6>

              <h2 className="fw-bold mb-4">
                Born from a love of great food
              </h2>

              <p className="text-muted">
                Cravings started in 2022 when three food lovers realized that
                finding and ordering from local restaurants was harder than it
                needed to be.
              </p>

              <p className="text-muted">
                Today, we operate across dozens of cities, empowering small
                businesses and delivering delicious meals straight to your door.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card shadow-sm p-3 text-center">
                    <i className="bi bi-fork-knife text-danger fs-3"></i>
                    <h5 className="fw-bold mt-2">Restaurants</h5>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow-sm p-3 text-center">
                    <i className="bi bi-bicycle text-danger fs-3"></i>
                    <h5 className="fw-bold mt-2">Riders</h5>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow-sm p-3 text-center">
                    <i className="bi bi-shop text-danger fs-3"></i>
                    <h5 className="fw-bold mt-2">Partners</h5>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow-sm p-3 text-center">
                    <i className="bi bi-heart-fill text-danger fs-3"></i>
                    <h5 className="fw-bold mt-2">Community</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 text-center">
        <div className="container">
          <h6 className="text-uppercase fw-bold text-orange">
            What We Stand For
          </h6>

          <h2 className="fw-bold mb-5">Our Core Values</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <i className="bi bi-heart-fill text-danger fs-2"></i>
                <h5 className="fw-bold mt-3">Passion for Food</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <i className="bi bi-leaf-fill text-danger fs-2"></i>
                <h5 className="fw-bold mt-3">Fresh & Local</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <i className="bi bi-shield-check text-danger fs-2"></i>
                <h5 className="fw-bold mt-3">Safe & Reliable</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-5 text-center">
        <div className="container">
          <h6 className="text-uppercase fw-bold text-orange">
            The People Behind Cravings
          </h6>

          <h2 className="fw-bold mb-5">Meet the Team</h2>

          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="team-circle">SR</div>
              <h5 className="mt-3">Sofia Reyes</h5>
              <p className="text-muted small">CEO & Co-Founder</p>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="team-circle">ML</div>
              <h5 className="mt-3">Marcus Lim</h5>
              <p className="text-muted small">CTO & Co-Founder</p>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="team-circle">AP</div>
              <h5 className="mt-3">Aisha Patel</h5>
              <p className="text-muted small">Head of Operations</p>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="team-circle">JO</div>
              <h5 className="mt-3">James Owusu</h5>
              <p className="text-muted small">Head of Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-5 text-center text-white"
        style={{ background: "#c63d0f" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">
            Ready to satisfy your cravings?
          </h2>

          <p className="mb-4">
            Join thousands of happy customers ordering their favourite meals
            every day.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#" className="btn btn-light px-4">
              Get Started
            </a>

            <a href="#" className="btn btn-outline-light px-4">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;