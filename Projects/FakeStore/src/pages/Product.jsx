import { MdOutlinePriceChange } from "react-icons/md";

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const Product = () => {
  return (
    <>
      <div className="p-10 grid-cols-4">
        <div className="w-75 border rounded h-auto ">
            <div className="m-3">
          <div>
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt=""
              className="h-40 object-cover m-auto"
            />
          </div>
          <div className="text-black font-bold text-xl">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </div>
          <div className="m-2 font-bold text-2xl flex items-center ">
            <MdOutlinePriceChange className="m-2" /> 109.95
          </div>
          <div className="w-full flex justify-center m-2">
            <button className=" px-5 py-3 bg-amber-400 rounded  ">
              Add to Cart
            </button>
          </div>
          <div className="object-fill">
            our perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Product;
