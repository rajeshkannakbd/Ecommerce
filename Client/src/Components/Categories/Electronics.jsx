import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { BlinkBlur } from "react-loading-indicators";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const [Electronics, setElectronics] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartItems, setCartItems } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/Product`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.product);
        const filtered = data.product.filter(
          (product) => product.category === "electronics"
        );
        setElectronics(filtered);
        setLoading(false)
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const cartIn = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  if (Electronics.length === 0) {
    return (
      <div className="relative top-12 mx-4 mb-96 pb-32">
        <h1 className="text-2xl font-bold mb-4">Electronics Items</h1>
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
          <div className="mx-auto text-center mt-40">
            <h2 className="mb-4 text-lg">Currently Unavailable !!</h2>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="py-14 px-4 sm:px-6 lg:px-12 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center sm:text-left">
        Electronics
      </h1>
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
          {Electronics.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`${BASE_URL}/uploads/${product.image}`}
                alt={product.title}
                className="h-48 sm:h-52 md:h-56 w-full object-contain p-4 bg-white"
              />
              <div className="px-4 py-2">
                <h2 className="text-base md:text-lg font-semibold mb-1 truncate">
                  {product.title}
                </h2>
                <p className="text-green-600 font-bold mb-2">
                  ₹{(product.price).toFixed(0)}
                </p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-between">
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

export default Electronics;
