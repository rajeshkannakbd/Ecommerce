import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";
import { cartContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { BlinkBlur } from "react-loading-indicators";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Search = () => {
  const { search } = useContext(searchContext);
  const { cartItems, setCartItems } = useContext(cartContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/Product`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.product);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, products]);

  const handleAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-12 min-h-screen bg-gray-50">
      {search.length > 0 && (
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
          Search Results for: "<span className="text-blue-500">{search}</span>"
        </h1>
      )}
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
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`${BASE_URL}/uploads/${product.image}`}
                  alt={product.title}
                  className="h-48 w-full object-contain p-4 bg-white"
                />
                <div className="px-4 py-2">
                  <h2 className="text-base font-semibold mb-1 truncate">
                    {product.title}
                  </h2>
                  <p className="text-green-600 font-bold mb-2">
                    ₹{(product.price * 3).toFixed(0)}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between gap-2">
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
                        if (
                          !cartItems.some((item) => item._id === product._id)
                        ) {
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
            ))
          ) : (
            <p className="text-gray-600 text-center mt-32 col-span-full">
              No matching products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
