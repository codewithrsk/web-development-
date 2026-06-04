function Footer() {
  return (
    <>
       <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <p className="text-center mb-4 small-text">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>

        <div className="row justify-content-between text-center text-md-start">
          <div className="col-md-2 mb-4">
            <img
              src="http://cravings.ricr.in/assets/circleLogo-DpCri5UD.png"
              className="img-fluid rounded-circle"
              width="110"
            />
          </div>

          <div className="col-md-2 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="index.html" className="text-light">Home</a></li>
              <li><a href="about.html" className="text-light">About</a></li>
              <li><a href="#" className="text-light">Order Now</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6>For Restaurants</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Partner With Us</a></li>
              <li><a href="#" className="text-light">Dashboard</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6>For Riders</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Become a Rider</a></li>
              <li><a href="#" className="text-light">Dashboard</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li><a href="feedback.html" className="text-light">Feedback</a></li>
              <li><a href="#" className="text-light">Help</a></li>
              <li><a href="contact.html" className="text-light">Contact</a></li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />

        <div
          className="d-flex flex-column flex-md-row justify-content-between text-center small-text"
        >
          <p className="mb-2 mb-md-0">© 2026 Cravings</p>

          <div>
            <a href="privicy&policy.html" className="text-light me-3">Privacy</a>
            <a href="#" className="text-light me-3">Terms</a>
            <a href="#" className="text-light">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
export default Footer;
