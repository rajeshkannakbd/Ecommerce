import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext, Totalcontext } from "../../App";
import axios from "axios";
const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const { cartItems, setCartItems } = useContext(cartContext);
  const { total } = useContext(Totalcontext);
  let navigate = useNavigate();
  const handleOrder = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    const orderData = {
      name,
      email,
      mobileNumber,
      address,
      payment,
      cartItems,
      total,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/order",
        orderData
      );

      if (response.status === 201) {
        window.alert("Order placed successfully!");
        setCartItems([]);
        navigate("/");
      }
    } catch (error) {
      console.error("Order error:", error);
      window.alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <div className=" relative top-32 mx-10">
        <h1 className=" text-green-500 font-semibold text-3xl">
          Place Your Order
        </h1>
        <div className="  border-2 border-slate-400 h-[100%] w-[55%] mx-[20%] my-8">
          <form
            action=""
            className=" flex p-4 flex-col "
            onSubmit={handleOrder}
          >
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                // Block input if it contains digits
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setName(value);
                }
              }}
              className=" m-2   outline outline-1 "
            />
            {showErrors && !name && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please enter the name
              </span>
            )}
            <label htmlFor="mobile">Mobile Number : </label>
            <input
              type="text"
              id="mobile"
              value={mobileNumber}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only numbers
                if (/^[0-9]*$/.test(value)) {
                  setMobileNumber(value);
                }
              }}
              className=" m-2   outline outline-1 "
            />
            {showErrors && !mobileNumber && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter The Mobile Number
              </span>
            )}
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" m-2  outline outline-1 "
            />
            {showErrors && !email && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter a Valid Email
              </span>
            )}
            <label htmlFor="adress">Address : </label>
            <input
              id="adress"
              className=" outline outline-1  m-2"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
            />
            {showErrors && !address && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter The Address
              </span>
            )}
            <h1 className=" py-3">
              Your Total is :
              <span className=" font-bold text-green-500 text-lg">{total}</span>
            </h1>
            <label>Payment Method : </label>
            <div className=" ml-0 flex gap-10 px-2">
              <label htmlFor="cash">
                <input
                  id="cash"
                  onChange={(e) => setPayment(e.target.value)}
                  className=" text-start "
                  type="radio"
                  name="payment"
                  value="cash on delivery"
                />
                Cash On Delivery
              </label>
              <label htmlFor="online">
                <input
                  id="online"
                  onChange={(e) => setPayment(e.target.value)}
                  className=" text-start "
                  type="radio"
                  name="payment"
                  value="online payment"
                />
                Online Payment
              </label>
            </div>
            {showErrors && !payment && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Select a Payment Method
              </span>
            )}
            <button
              type="submit"
              className=" bg-green-500 text-white font-semibold rounded-full p-2 relative w-48 left-[40%] my-4"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;
