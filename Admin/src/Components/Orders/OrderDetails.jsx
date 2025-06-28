import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const OrderDetails = () => {
  const [orders,setOrders] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:5000/orderDetails")
      .then((data)=>setOrders(data.data.orders))
      .catch((err)=>console.log("Error while getting orders",err)
      )
    },[])
    console.log(orders);
    
  return (
     <div className=' grid grid-cols-2 gap-2 w-full mx-18 px-4' >
      
     {
      orders.map((order,index)=>(
     <div key={order._id} className='  shadow-md mt-2 mb-2 border-2 flex flex-col gap-4 text-wrap'>
       <h1 className=' font-medium relative top-2 left-3  '>{index + 1})</h1>
        <h1 className=' font-medium mx-4 mb-0'>Name : <span className=' font-normal text-slate-600 '>{order.name}</span>  </h1>
        <h1 className=' font-medium mx-4 mb-0'>Mobile Number : <span className=' font-normal text-slate-600 '>{order.mobileNumber}</span>  </h1>
        <h1 className=' font-medium m-2 mx-4 mb-0'>Email : <span className=' font-normal text-slate-600 '>{order.email}</span>  </h1>
        <h1 className=' font-medium mx-4 m-2 mb-0'>Adress : <span className=' font-normal text-slate-600 '>{order.address}</span>  </h1>
        <h1 className=' font-medium mx-4 m-2 mb-0'>Toatl : <span className=' font-normal text-slate-600 '> {order.total}</span> </h1>
        <h1 className=' font-medium mx-4 m-2 mb-3'>Payment method : <span className=' font-normal text-slate-600 '>{order.payment}</span>  </h1>
        <div className="mt-4">
            <h2 className="font-semibold underline mx-2 mb-2">Cart Items:</h2>
            {
              order.cart.map((item, i) => (
                <div
                  key={i}
                  className="border p-2 mx-2 mb-2 rounded bg-slate-50 text-sm"
                >
                  <p><span className="font-medium">Title:</span> {item.title}</p>
                  <p><span className="font-medium">Quantity:</span> {item.quantity}</p>
                  <p><span className="font-medium">Price:</span> ₹{item.price}</p>
                  <p><span className="font-medium">Category:</span> {item.category}</p>
                </div>
              ))
            }
          </div>
     </div>))
     }
    </div>
  )
}

export default OrderDetails
