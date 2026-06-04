import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <div className="text-primary h1 fw-bold">My Compony</div>

        <div className="d-flex gap-4">
         <Link to={"/"}>Home</Link>
         <Link to={"/about"}>ABOUT</Link>
         <Link to={"/product"}>PRODUCT</Link>
         <Link to={"/contact-us"}>CONTACT US</Link>
        </div>
        <div className="d-flex gap-3">
          <Link to={"/login"}><button className="btn btn-outline-primary">Login</button></Link>
          <Link to={"/regester"}><button className="btn btn-primary">Regester</button></Link>
        </div>
      </div>
    </>
  );
}
export default Header;
