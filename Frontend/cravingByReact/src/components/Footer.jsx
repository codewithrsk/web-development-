import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      
      <footer class="footer bg-dark text-light pt-5 pb-3">
        <div class="container">
          <p class="text-center mb-4 small-text">
            --- Your favorite food delivery platform connecting customers with
            restaurants and riders. ---
          </p>

          <div class="row justify-content-between text-center text-md-start">
            <div class="col-md-2 mb-4">
              <img
                src="http://cravings.ricr.in/assets/circleLogo-DpCri5UD.png"
                class="img-fluid rounded-circle"
                width="110"
              />
            </div>

            <div class="col-md-2 mb-4">
              <h6>Quick Links</h6>
              <ul class="list-unstyled">
                <li>
                  <Link to={"/"} className="text-light">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="about.html" class="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Order Now
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-2 mb-4">
              <h6>For Restaurants</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-light">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-2 mb-4">
              <h6>For Riders</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-light">
                    Become a Rider
                  </a>
                </li>
                <li>
                  <a href="#" class="text-light">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-2 mb-4">
              <h6>Support</h6>
              <ul class="list-unstyled">
                <Link to={"/feedback"} class="text-light">Feedback
                </Link>
                
                <li>
                  <a href="#" class="text-light">
                    Help
                  </a>
                </li>
                <li>
                  <a href="contact.html" class="text-light">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr class="bg-light" />

          <div class="d-flex flex-column flex-md-row justify-content-between text-center small-text">
            <p class="mb-2 mb-md-0">© 2026 Cravings</p>

            <div>
              <a href="privicy&policy.html" class="text-light me-3">
                Privacy
              </a>
              <a href="#" class="text-light me-3">
                Terms
              </a>
              <a href="#" class="text-light">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
