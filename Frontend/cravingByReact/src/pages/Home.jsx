import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <section className="hero d-flex align-items-center justify-content-center text-center text-white bgimage">
          <div className="container position-relative">
            <h1 className="fw-bold">
              Your Favorite Food,
              <br />
              Delivered Fast
            </h1>

            <p>
              Order from thousands of restaurants and get it delivered to your
              doorstep
            </p>

            <div className="mt-3">
              <Link to={"/register"} className="btn btn-primary me-2">
                Sign Up
              </Link>
              <a href="#" className="btn btn-light">
                Order Now
              </a>
            </div>

            <div className="mt-4">
              <input
                type="text"
                className="form-control w-50 mx-auto"
                placeholder="Search..."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
