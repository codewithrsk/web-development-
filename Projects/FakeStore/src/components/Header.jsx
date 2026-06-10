import { Link } from "react-router-dom";
import { HiBuildingStorefront } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div className="bg-blue-400 flex items-center ">
        <img src="" alt="" />
        <div className="text-4xl mx-2"><HiBuildingStorefront /></div>
        <div className=" flex gap-4  w-full justify-end m-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact-us"}>Contact us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
