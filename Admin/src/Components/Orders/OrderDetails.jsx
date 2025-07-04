import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('https://ecommerce-sjhs.onrender.com/orderDetails')
      .then((data) => setOrders(data.data.orders))
      .catch((err) => console.log('Error while getting orders', err));
  }, []);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Order Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <div
            key={order._id}
            className="shadow-md border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-lg transition-all duration-300"
          >
            <h1 className="text-sm text-gray-500 mb-2">#{index + 1}</h1>
            <p className="text-base font-semibold">Name: <span className="font-normal text-gray-700">{order.name}</span></p>
            <p className="text-base font-semibold">Mobile: <span className="font-normal text-gray-700">{order.mobileNumber}</span></p>
            <p className="text-base font-semibold">Email: <span className="font-normal text-gray-700">{order.email}</span></p>
            <p className="text-base font-semibold">Address: <span className="font-normal text-gray-700">{order.address}</span></p>
            <p className="text-base font-semibold">Total: <span className="font-normal text-gray-700">₹{order.total}</span></p>
            <p className="text-base font-semibold">Payment: <span className="font-normal text-gray-700">{order.payment}</span></p>

            <div className="mt-4">
              <h3 className="font-semibold underline mb-2">Cart Items:</h3>
              {order.cart.map((item, i) => (
                <div
                  key={i}
                  className="border p-3 mb-2 rounded bg-gray-50 text-sm"
                >
                  <p><span className="font-medium">Title:</span> {item.title}</p>
                  <p><span className="font-medium">Quantity:</span> {item.quantity}</p>
                  <p><span className="font-medium">Price:</span> ₹{item.price}</p>
                  <p><span className="font-medium">Category:</span> {item.category}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
