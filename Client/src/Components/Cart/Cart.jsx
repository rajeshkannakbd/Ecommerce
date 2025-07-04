import React, { useContext, useState, useEffect } from "react";
import { cartContext, Totalcontext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Cart = () => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const { total, setTotal } = useContext(Totalcontext);
  const navigate = useNavigate();

  useEffect(() => {
    const updated = cartItems.map((item) =>
      item.quantity ? item : { ...item, quantity: 1 }
    );
    setCartItems(updated);
  }, []);

  const addQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const subQuantity = (id) => {
    const updateds = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity - 1 || 1 } : item
    );
    setCartItems(updateds);
  };

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal.toFixed(2));
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="relative top-12 mx-4 mb-96 pb-32">
        <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
        <div className="mx-auto text-center mt-8">
          <h2 className="mb-4 text-lg">Your cart is empty</h2>
          <Link
            to="/products"
            className="inline-block bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-full text-white font-medium"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Totalcontext.Provider value={{ total }}>
      <div className="relative top-12 pb-32 px-4  max-w-screen">
        <h1 className="text-2xl font-bold mb-6">Cart Items</h1>

        <div className="flex flex-col gap-6">
          {cartItems.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row items-center gap-6 border border-gray-300 p-4 rounded-lg shadow bg-white"
            >
              <img
                 src={`${BASE_URL}/uploads/${product.image}`}
                alt="product"
                className="w-full md:w-48 h-[300px] object-contain"
              />

              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <h4 className="text-green-700 font-bold text-xl">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </h4>

                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <span className="text-base font-medium">Quantity:</span>
                  <button
                    className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-200 text-xl"
                    onClick={() => addQuantity(product._id)}
                  >
                    +
                  </button>
                  <span className="border px-4 py-1 text-lg w-16 text-center">
                    {product.quantity}
                  </span>
                  <button
                    disabled={product.quantity <= 1}
                    className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-200 disabled:bg-slate-100 text-xl"
                    onClick={() => subQuantity(product._id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total + Button */}
        <div className="mt-16 mb-20  bg-yellow-100 rounded-xl px-6 py-4 text-center mx-auto w-full max-w-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Your Total: ₹{total}
          </h2>
          <button
            onClick={() => navigate("/order")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium"
          >
            Place Order
          </button>
        </div>
      </div>
    </Totalcontext.Provider>
  );
};

export default Cart;
