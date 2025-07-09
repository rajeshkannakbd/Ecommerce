import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { cartContext } from "../../App";
import { BlinkBlur } from "react-loading-indicators";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const OrderHistory = () => {
  const { useremail } = useContext(cartContext);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (useremail) {
      axios
        .get(`${BASE_URL}/userOrders?email=${useremail}`)
        .then((res) => {
          setOrders(res.data.orders);
          console.log(res.data.orders);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch user orders", err);
        });
    }
  }, [useremail]);

  return (
    <div className="p-4 pt-10 pb-32">
      <h1 className="text-2xl font-bold mb-4">Your Order History</h1>
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
        <div>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-lg bg-white p-6 flex flex-col sm:flex-row gap-4"
                >
                  {/* SVG Icon */}
                  <div className="flex-shrink-0 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>

                  {/* Order Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                          Order ID:{" "}
                          <span className="text-gray-600">{order._id}</span>
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Email: {order.email}
                        </p>
                      </div>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          order.orderstatus === "completed"
                            ? "bg-green-100 text-green-600"
                            : order.orderstatus === "ordered"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {order.orderstatus}
                      </span>
                    </div>

                    <div className="mt-4 space-y-1 text-sm text-gray-700">
                      <p>
                        <strong>Payment:</strong> {order.payment}
                      </p>
                      <p>
                        <strong>Mobile:</strong> {order.mobileNumber}
                      </p>
                      <p>
                        <strong>Address:</strong> {order.address}
                      </p>
                      <p>
                        <strong>Total:</strong>{" "}
                        <span className="font-semibold text-green-600">
                          ₹{order.total}
                        </span>
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        Items:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {order.cartItems.map((item, idx) => (
                          <li key={idx}>
                            {item.title}{" "}
                            <span className="text-sm text-gray-500">
                              x {item.quantity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
