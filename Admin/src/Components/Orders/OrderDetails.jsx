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

    const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this product?")) return;
  
      try {
        await axios.delete(`http://localhost:5000/deleteorder/${id}`);
        setOrders(orders.filter((order) => order._id !== id));
        alert("Order deleted successfully.");
      } catch (error) {
        console.error("Failed to delete Order:", error);
        alert("Failed to delete Order. Please try again.");
      }
    };
  

  return (
    // <div className="px-4 py-6 max-w-7xl mx-auto">
    //   <h2 className="text-2xl font-bold mb-6">Order Details</h2>

    //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    //     {orders.map((order, index) => (
    //       <div
    //         key={order._id}
    //         className="shadow-md border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-lg transition-all duration-300"
    //       >
    //         <h1 className="text-sm text-gray-500 mb-2">#{index + 1}</h1>
    //         <p className="text-base font-semibold">Name: <span className="font-normal text-gray-700">{order.name}</span></p>
    //         <p className="text-base font-semibold">Mobile: <span className="font-normal text-gray-700">{order.mobileNumber}</span></p>
    //         <p className="text-base font-semibold">Email: <span className="font-normal text-gray-700">{order.email}</span></p>
    //         <p className="text-base font-semibold">Address: <span className="font-normal text-gray-700">{order.address}</span></p>
    //         <p className="text-base font-semibold">Total: <span className="font-normal text-gray-700">₹{order.total}</span></p>
    //         <p className="text-base font-semibold">Payment: <span className="font-normal text-gray-700">{order.payment}</span></p>

    //         <div className="mt-4">
    //           <h3 className="font-semibold underline mb-2">Cart Items:</h3>
    //           {order.cart.map((item, i) => (
    //             <div
    //               key={i}
    //               className="border p-3 mb-2 rounded bg-gray-50 text-sm"
    //             >
    //               <p><span className="font-medium">Title:</span> {item.title}</p>
    //               <p><span className="font-medium">Quantity:</span> {item.quantity}</p>
    //               <p><span className="font-medium">Price:</span> ₹{item.price}</p>
    //               <p><span className="font-medium">Category:</span> {item.category}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
    <div className=' w-full'>
   <div className=" py-10 mx-4">
      <h1 className=" text-4xl font-thin">Order Management</h1>
    </div>
    <div className="w-auto bg-slate-200 mx-20">
      <table className=' w-full'>
        <thead>
          <tr>
        <th>Sno.</th>
        <th>Name</th>
        <th className='px-2 text-nowrap'>Mobile Number</th>
        <th>Email</th>
        <th>Total</th>
        <th>Payment</th>
        <th>Adress</th><th>Status</th><th className='px-2 text-nowrap'>Delete</th></tr></thead>
        <tbody>
         {orders.map((order, index) => (
            <tr key={order.id || index} className="border-0 bg-white even:bg-slate-50 ">
              <td className="text-center border px-4 py-5">{index + 1}</td>
              <td className="text-center border px-4 py-2">{order.name}</td>
              <td className="text-center border px-4 py-2">{order.mobileNumber}</td>
              <td className="text-center border px-4 py-2">{order.email}</td>
              <td className="text-center border px-4 py-2">₹{order.total}</td>
              <td className="text-center border px-4 py-2">{order.payment}</td>
              <td className="text-center border px-4 py-2">{order.address}</td>
              <td className="text-center border px-10 py-2"><input type="checkbox" /></td>
              <td className='text-center border px-4 py-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-red-500"
                  onClick={() => handleDelete(order._id)} 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>
    </>
  );
};

export default OrderDetails;
