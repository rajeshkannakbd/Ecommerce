import React, { useContext, useState, useEffect, createContext } from "react";
import { cartContext, Totalcontext } from "../../App";
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const{total,setTotal}=useContext(Totalcontext)

  useEffect(() => {
    const updated = cartItems.map((item) =>
      item.quantity ? item : { ...item, quantity: 1 }
    );
    setCartItems(updated);
  }, []);

  const addQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const subQuantity = (id) => {
    const updateds = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 || 1 } : item
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
  const navigate =useNavigate()

  if (cartItems.length === 0) {
    return (
      <div className="relative top-32 mx-4 ">
        <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
        <div className=" mx-[50%] text-nowrap">
          <h2 className=" mb-4">your cart is empty</h2>
          <div className=" bg-green-300 h-[50px] flex items-center content-center rounded-full text-nowrap w-[100px]">
            <Link to={"/products"} className="mx-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Totalcontext.Provider value={{total}}>
    <div className="relative top-32 pb-32">
      <div className=" mx-4">
        <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
        <div className="grid grid-cols-1 px-32   gap-6">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="card flex flex-row items-center gap-6 border-2 border-black p-6 rounded shadow bg-white"
            >
              <img
                src={product.image}
                alt="product"
                className="h-[300px] w-[300px] p-2 object-contain"
              />
              <div className="flex flex-col justify-between flex-grow">
                <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
                <h2 className="font-normal text-lg p-3 mb-2">{product.description}</h2>
                {/* <div className=" flex flex-row m-0">
                <h2 className="font-normal text-lg p-3 mb-2">Ratings: <span className=" font-medium text-green-700">{product.rating.rate}</span></h2>
                <h2 className="font-normal text-lg p-3 mb-2">Stocks: <span className=" font-medium text-green-700">{product.rating.count}</span></h2>
                </div> */}
                <h4 className="text-green-700 font-bold text-xl mb-4">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </h4>
                <div className="flex items-center gap-4">
                  <span className="text-base font-medium">Quantity:</span>
                  <button
                    className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-200"
                    onClick={() => addQuantity(product.id)}
                  >
                    +
                  </button>
                  <span className="border-2 px-4 py-1 text-center text-lg w-16">
                    {product.quantity}
                  </span>
                  <button
                    disabled={product.quantity <= 1}
                    className="rounded-full w-10 h-10 flex items-center justify-center bg-slate-200 disabled:bg-slate-100"
                    onClick={() => subQuantity(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed items-center content-center bottom-0 bg-yellow-100 w-[100%]">
        <h2 className=" relative m-2 left-[40%] font-semibold">
          Your Totat is : Rs.{total}
        </h2>
        <button onClick={()=>{navigate("/order")}}className=" rounded-full bg-green-500 m-3 px-4 p-2 relative left-[43%]">
          Place Order
        </button>
      </div>
    </div>
    </Totalcontext.Provider>
  );
};

export default Cart;


