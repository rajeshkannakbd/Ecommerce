import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { cartContext } from "../../App";
import { BlinkBlur } from "react-loading-indicators";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const OrderHistory = () => {
  const { useremail } = useContext(cartContext);
  const [loading , setLoading ] =useState(true)
   const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (useremail) {
      axios
        .get(`${BASE_URL}/userOrders?email=${useremail}`)
        .then((res) => {
          setOrders(res.data.orders);
          setLoading(false)
        })
        .catch((err) => {
          console.error("Failed to fetch user orders", err);
        });
    }
  }, [useremail]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Order History</h1>
      {loading ? <div className="flex justify-center items-center min-h-screen px-4 -mt-40 sm:px-8">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                  <BlinkBlur
                    color="#32cd32"
                    size="large"
                    text="loading..."
                    textColor=""
                  />
                </div>
              </div>  : <div>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="border p-4 rounded shadow-sm bg-white">
              <p>Order ID: {order._id}</p>
              <p>Email: {order.email}</p>
              <p>Total: ${order.total}</p>
              <p>Payment Method: {order.payment}</p>
              <p>Address: {order.address}</p>
              <p>Mobile Number: {order.mobileNumber}</p>
              <p>Status:{order.orderstatus}</p>
              <div className="mt-2">
                Items:
                <ul className="list-disc list-inside">
                  {order.cart.map((item, index) => (
                    <li key={index}>
                      {item.title} - Qty: {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}</div>}
    </div>
  );
};

export default OrderHistory;
