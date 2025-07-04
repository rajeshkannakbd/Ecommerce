import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from '../../App';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, setCartItems } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/Product`)
      .then((response) => {
        setProducts(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAdd = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const newProducts = products.slice(-2);

  return (
    <div className="py-28 px-4 sm:px-6 md:px-12 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Latest Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/ProductDetail/${product._id}`}>
              <img
                src={`${BASE_URL}/uploads/${product.image}`}
                alt={product.title}
                className="h-48 w-full object-contain p-4 bg-white"
              />
            </Link>

            <div className="px-4 py-2">
              <h2 className="text-base font-semibold mb-1 truncate">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mb-2">
                ₹{(product.price).toFixed(0)}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.desc}
              </p>

              <div className="flex items-center mb-4 gap-1 text-sm text-gray-600">
                Ratings: {product.rating}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-yellow-500"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <button
                  onClick={() => handleAdd(product)}
                  disabled={cartItems.some((item) => item._id === product._id)}
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
    </div>
  );
};

export default NewProducts;
