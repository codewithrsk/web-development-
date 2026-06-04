import image from "../assets/myCompony.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div
              className="row align-items-center"
              style={{ minHeight: "60vh" }}
            >
              <div className="col-md-6">
                <h1 className="display-3 fw-bold">Welcome to My Company</h1>

                <p className="lead my-4">
                  We provide innovative solutions that help businesses grow,
                  improve efficiency, and achieve success.
                </p>

                <button className="btn btn-light btn-lg">Get Started</button>
              </div>

              <div className="col-md-6 text-center">
                <img
                  src={image}
                  alt="Hero"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Our Services</h2>
              <p className="text-muted">
                Everything you need to grow your business.
              </p>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h4>Consulting</h4>
                    <p>
                      Professional guidance and business strategies tailored to
                      your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h4>Development</h4>
                    <p>
                      Custom software and web applications built with modern
                      technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h4>Support</h4>
                    <p>
                      Reliable maintenance and support to keep your systems
                      running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="bg-light py-5">
          <div className="container text-center">
            <h2 className="fw-bold">Ready to Work With Us?</h2>

            <p className="text-muted my-3">
              Join hundreds of satisfied customers and start your journey today.
            </p>
            <Link to={"/contact-us"}>
              <button className="btn btn-primary btn-lg">Contact Us</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
