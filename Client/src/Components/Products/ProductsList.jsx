import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { BlinkBlur } from "react-loading-indicators";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartItems, setCartItems } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/Product`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.product);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

  const handleAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="py-14 px-4 sm:px-6 lg:px-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 ">Products</h1>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen px-4 -mt-40 sm:px-8">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">
            <BlinkBlur
              color="#32cd32"
              size="large"
              text="loading..."
              textColor=""
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <Link to={`/ProductDetail/${product._id}`}>
                <img
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.title}
                  className="h-48 w-full object-contain p-4 bg-white"
                />
              </Link>
              <div className="px-4 py-2 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold mb-1 truncate">
                    {product.title}
                  </h2>
                  <p className="text-green-600 font-bold mb-1">
                    ₹{product.price.toFixed(0)}
                  </p>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {product.desc}
                  </p>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    Ratings: {product.rating}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-auto">
                  <button
                    onClick={() => handleAdd(product)}
                    disabled={cartItems.some(
                      (item) => item._id === product._id
                    )}
                    className={`${
                      cartItems.some((item) => item._id === product._id)
                        ? "bg-gray-400"
                        : "bg-yellow-500 hover:bg-yellow-600"
                    } text-white text-sm px-3 py-1 rounded text-center w-full sm:w-auto`}
                  >
                    {cartItems.some((item) => item._id === product._id)
                      ? "In Cart"
                      : "Add to Cart"}
                  </button>
                  <button
                    onClick={() => {
                      if (!cartItems.some((item) => item._id === product._id)) {
                        setCartItems((prevItems) => [...prevItems, product]);
                      }
                      navigate("/cart");
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded w-full sm:w-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
