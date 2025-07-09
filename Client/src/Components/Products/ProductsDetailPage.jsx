import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../App";
import { BlinkBlur } from "react-loading-indicators";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductsDetailPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cartItems, setCartItems } = useContext(cartContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/SingleProduct/${id}`)
      .then((data) => {
        setProducts(data.data.product);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // if (!products) {
  //   return (
  //     <div className="text-center mt-20 text-xl">
  //       Loading product details...
  //     </div>
  //   );
  // }

  const handleAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="mt-12 px-4 max-w-7xl mb-20 mx-auto">
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
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Image & Buttons */}
          <div className="w-full lg:w-1/2">
            <div className="border border-slate-200 shadow-md h-auto lg:h-[500px] w-full flex justify-center items-center relative">
              <img
                src={`${BASE_URL}/uploads/${products.image}`}
                alt={products.title}
                className="h-[300px] lg:h-[400px] object-contain"
              />
              <div className="absolute top-2 right-2 bg-slate-200 size-6 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between mt-6 px-4">
              <button
                onClick={() => handleAdd(products)}
                disabled={cartItems.some((item) => item._id === products._id)}
                className={`${
                  cartItems.some((item) => item._id === products._id)
                    ? "bg-gray-400"
                    : "bg-yellow-500 hover:bg-yellow-600"
                } text-white px-4 py-2 rounded-xl w-1/2 ml-2 `}
              >
                {cartItems.some((item) => item._id === products._id)
                  ? "In Cart"
                  : "Add to Cart"}
              </button>
              <button
                onClick={() => {
                  if (!cartItems.some((item) => item._id === products._id)) {
                    setCartItems((prevItems) => [...prevItems, products]);
                  }
                  navigate("/cart");
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl w-1/2 ml-2"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h2 className="text-xl lg:text-2xl font-bold uppercase text-slate-800">
              {products.title}
            </h2>

            <div className="flex gap-4 items-center">
              <div className="bg-green-500 text-white px-2 py-1 rounded flex items-center">
                <span className="mr-1 font-semibold">{products.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">
                80000 reviews & 8000 ratings
              </p>
            </div>

            <div>
              <h3 className="text-green-500 font-semibold text-xl">
                Special Price
              </h3>
              <p className="text-3xl font-bold text-slate-700">
                Rs. {products.price}
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <span className="font-semibold text-gray-700">Category:</span>
              <span className="uppercase text-base">{products.category}</span>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">
                About The Product
              </h4>
              <p className="text-gray-600 text-sm">{products.desc}</p>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-slate-800">
                Ratings:
                <span className="text-blue-500 font-bold ml-2">
                  {products.rating}
                </span>
              </p>
              <p className="font-semibold text-slate-800 mt-2">
                Available:
                <span className="text-blue-500 font-bold ml-2">
                  {products.count}
                </span>{" "}
                pcs
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetailPage;
