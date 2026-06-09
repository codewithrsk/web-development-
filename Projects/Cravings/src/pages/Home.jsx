// import { Link } from "react-router-dom";
// import image from "../assets/hotal2.png"

function Home() {
  return (
    <>
      <main>
        <section
          className="bg-[`$] relative flex min-h-screen items-center justify-center bg-cover bg-center text-center text-white"
          
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl font-bold md:text-6xl">
              Your Favorite Food,
              <br />
              Delivered Fast
            </h1>

            <p className="mt-4 text-lg md:text-xl">
              Order from thousands of restaurants and get it delivered to your
              doorstep.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              {/* <Link
                to="/register"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Sign Up
              </Link>

              <Link
                to="/restaurants"
                className="rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
              >
                Order Now
              </Link> */}
            </div>

            <div className="mt-8 flex justify-center">
              <input
                type="text"
                placeholder="Search restaurants..."
                className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
