import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <p className="text-center mb-4 small-text">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>

        <div className="row justify-content-between text-center text-md-start">
          {/* Logo */}
          <div className="col-md-2 mb-4">
            <img
              src="http://cravings.ricr.in/assets/circleLogo-DpCri5UD.png"
              alt="Cravings Logo"
              className="img-fluid rounded-circle"
              width="110"
            />
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-light text-decoration-none">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Restaurants */}
          <div className="col-md-2 mb-4">
            <h6>For Restaurants</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/partner"
                  className="text-light text-decoration-none"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant-dashboard"
                  className="text-light text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Riders */}
          <div className="col-md-2 mb-4">
            <h6>For Riders</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/become-rider"
                  className="text-light text-decoration-none"
                >
                  Become a Rider
                </Link>
              </li>
              <li>
                <Link
                  to="/rider-dashboard"
                  className="text-light text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/feedback"
                  className="text-light text-decoration-none"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-light text-decoration-none">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />

        <div className="d-flex flex-column flex-md-row justify-content-between text-center small-text">
          <p className="mb-2 mb-md-0">© 2026 Cravings. All Rights Reserved.</p>

          <div>
            <Link
              to="/privacy-policy"
              className="text-light text-decoration-none me-3"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-light text-decoration-none me-3"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/sitemap"
              className="text-light text-decoration-none"
            >
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;