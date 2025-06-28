import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";

const WomensClothing = () => {
  const [products, setProducts] = useState([]);
  const [Womensclothing, setWomensclothing] = useState([]);
  const { cartItems, setCartItems } = useContext(cartContext);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.product);

        const women = data.product.filter(
          (product) => product.category === "women's clothing"
        );
        setWomensclothing(women);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const cartIn = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  if (Womensclothing.length === 0) {
    return (
      <div className="relative top-12 mx-4 mb-96 pb-32">
        <h1 className="text-2xl font-bold mb-4">Womensclothings</h1>
        <div className="mx-auto text-center mt-8">
          <h2 className="mb-4 text-lg">Currently Unavailable !!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="py-14 px-4 sm:px-6 md:px-12 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        Women's Clothing and Accessories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Womensclothing.map((product) => (
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
              <h2 className="text-base font-semibold mb-1 truncate">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mb-2">
                ₹{(product.price * 83).toFixed(0)}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between gap-2">
                <button
                  onClick={() => handleAdd(product)}
                  disabled={cartIn(product.id)}
                  className="flex-1 bg-yellow-500 disabled:bg-yellow-600 hover:bg-yellow-600 text-white text-sm px-2 py-1 rounded"
                >
                  {cartIn(product.id) ? "Added To Cart" : "Add To Cart"}
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

export default WomensClothing;
