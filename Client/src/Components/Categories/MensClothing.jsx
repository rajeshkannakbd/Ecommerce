import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";

const MensClothing = () => {
  const [products, setProducts] = useState([]);
  const [mensclothing, setMensclothing] = useState([]);
  const { cartItems, setCartItems } = useContext(cartContext);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.product);
        const men = data.product.filter(
          (product) => product.category === "men's clothing"
        );
        setMensclothing(men);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

   if (mensclothing.length === 0) {
    return (
      <div className="relative top-12 mx-4 mb-96 pb-32">
        <h1 className="text-2xl font-bold mb-4">Mensclothings</h1>
        <div className="mx-auto text-center mt-8">
          <h2 className="mb-4 text-lg">Currently Unavailable !!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="py-14 px-4 sm:px-6 md:px-12 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        Men's Clothing and Accessories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mensclothing.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.title}
              className="h-48 w-full object-contain p-4 bg-white"
            />
            <div className="px-4 py-2">
              <h2 className="text-base font-semibold mb-1 truncate">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mb-1">
                ₹{(product.price * 83).toFixed(0)}
              </p>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.desc}
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                Ratings: {product.rating}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <div className="flex justify-between gap-2">
                <button
                  onClick={() => handleAdd(product)}
                  disabled={isInCart(product.id)}
                  className="flex-1 bg-yellow-500 disabled:bg-yellow-600 hover:bg-yellow-600 text-white text-sm px-2 py-1 rounded"
                >
                  {isInCart(product.id) ? "Added To Cart" : "Add To Cart"}
                </button>
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-2 py-1 rounded">
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

export default MensClothing;
