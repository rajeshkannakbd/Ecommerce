import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../App";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { cartItems, setCartItems } = useContext(cartContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);
  const handleAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  return (
    <div className="py-36 px-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain p-4 bg-white"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold mb-1 truncate">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mb-2">
                ₹{(product.price * 3).toFixed(0)}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className=" flex">
              <h1 className="text-sm text-gray-600 mb-4 line-clamp-2">Ratings : {product.rating.rate} </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 relative top-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => handleAdd(product)}
                  disabled={cartItems.some((item) => item.id === product.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded"
                >
                  {cartItems.some((item) => item.id === product.id)
                    ? "In Cart"
                    : "Add to Cart"}
                </button>
                <button
                  onClick={() => navigate("/order")}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
