import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext, Totalcontext } from "../../App";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [orderstatus, setOrderstatus] = useState("ordered");
  const [showErrors, setShowErrors] = useState(false);
  const { cartItems, setCartItems } = useContext(cartContext);
  const { total } = useContext(Totalcontext);
  let navigate = useNavigate();

  const handleOrder = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    const isValid = name && email && mobileNumber && address && payment;
    if (!isValid) return;

    const orderData = {
      name,
      email,
      mobileNumber,
      address,
      payment,
      cartItems: [...cartItems],
      total: Number(total),
      orderstatus,
    };

    if (payment === "online payment") {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load.");
        return;
      }

      try {
        const { data } = await axios.post(`${BASE_URL}/create-payment`, {
          total,
        });

        const options = {
          key: data.key,
          amount: data.order.amount,
          currency: "INR",
          name: "Shop Cart",
          description: "Test Transaction",
          order_id: data.order.id,
          handler: async function (response) {
            const verifyRes = await axios.post(`${BASE_URL}/verify-payment`, {
              ...response,
              orderDetails: orderData,
            });

            if (verifyRes.data.success) {
              alert("Payment successful and order placed!");
              setCartItems([]);
              navigate("/");
            } else {
              alert("Payment verification failed");
            }
          },
          prefill: {
            name,
            email,
            contact: mobileNumber,
          },
          theme: {
            color: "#3399cc",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        console.error("Payment error:", err);
        alert("Failed to initiate payment");
      }
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/order`, orderData);
        if (response.status === 201) {
          alert("Order placed successfully!");
          setCartItems([]);
          navigate("/");
        }
      } catch (error) {
        alert("Error placing order");
      }
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  return (
    <div className="relative top-12 px-4 mb-44">
      <h1 className="text-green-600 font-semibold text-2xl sm:text-3xl text-center mb-6">
        Place Your Order
      </h1>

      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-white border border-gray-300 rounded-xl shadow-md p-6">
        <form onSubmit={handleOrder} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) setName(value);
              }}
              className="mt-1 p-2 border rounded w-full"
            />
            {showErrors && !name && (
              <span className="text-red-500 text-sm">
                * Please enter the name
              </span>
            )}
          </div>

          <div>
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              value={mobileNumber}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[0-9]*$/.test(value)) setMobileNumber(value);
              }}
              className="mt-1 p-2 border rounded w-full"
            />
            {showErrors && !mobileNumber && (
              <span className="text-red-500 text-sm">
                * Please enter the mobile number
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
            {showErrors && !email && (
              <span className="text-red-500 text-sm">
                * Please enter a valid email
              </span>
            )}
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              type="text"
            />
            {showErrors && !address && (
              <span className="text-red-500 text-sm">
                * Please enter the address
              </span>
            )}
          </div>

          <div>
            <h2 className="text-lg mt-2">
              Your Total:{" "}
              <span className="font-bold text-green-600">₹{total}</span>
            </h2>
          </div>

          <div>
            <label>Payment Method:</label>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cash on delivery"
                  onChange={(e) => setPayment(e.target.value)}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="online payment"
                  onChange={(e) => setPayment(e.target.value)}
                />
                Online Payment
              </label>
            </div>
            {showErrors && !payment && (
              <span className="text-red-500 text-sm">
                * Please select a payment method
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full font-semibold self-center mt-4"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
