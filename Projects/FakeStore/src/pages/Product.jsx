import React, { useEffect, useState } from "react";

import loading from "../assets/loading.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="" className="w-50 " />
        </div>
      ) : (
        <div className="p-10 grid grid-cols-4 gap-5">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className="w-75 border rounded h-100 p-3" key={index}>
                <div className="w-full h-40">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-contain hover:scale-120 hover:shadow-gray-400"
                  />
                </div>
                <div className="flex flex-col justify-between h-50">
                  <div>
                    <p className="text-xl" title={product.title}>
                      {product.title.length > 50
                        ? product.title.slice(0, 47) + "..."
                        : product.title}
                    </p>
                    <p className="text-sm capitalize text-gray-500">
                      {product.category}
                    </p>
                    <p>₹ {product.price * 100}</p>
                    <p>{product.rating.rate}/5</p>
                  </div>

                  <button className="bg-orange-400 rounded-full px-4 py-2 hover:bg-orange-600">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
