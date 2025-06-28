import React from "react";
import Dasboard from "./Dasboard";
import ProductsList from "../Products/ProductsList"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => setProducts(data.product))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;
  console.log(id);
  
  try {
    await axios.delete(`http://localhost:5000/deleteitem/${id}`);
    setProducts(products.filter((product) => product._id !== id));
    alert("Product deleted successfully.");
  } catch (error) {
    console.error("Failed to delete product:", error);
    alert("Failed to delete product. Please try again.");
  }
};


  return (
    <div className=" flex p-4  text-black">
      <div className=" felx ">
        {products.map((product) => (
          <div className=" flex gap-2  m-4 flex-row border-2 ">
            <div
              key={product.id}
              className="bg-white shadow-md p-2  flex rounded-lg overflow-hidden w-full hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-20 w-[150px] object-contain p-4 bg-white"
              />
              <div className="px-4 flex w-[85%] items-center justify-center gap-3  py-2">
                <h2 className="text-lg w-[300px] overflow-x-auto font-semibold mb-1 text-wrap">
                  {product.title}
                </h2>
                <p className="text-green-600 border-2 w-20 flex items-center content-center justify-center font-bold mb-2">
                  ₹{(product.price * 3).toFixed(0)}
                </p>
                <p className="text-sm w-[50%] text-wrap text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                {/* <div className=" flex">
              <h1 className="text-sm text-gray-600 mb-4 line-clamp-2">Ratings : {} </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 relative top-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              </div> */}
              <div className=" relative -right-10">
               <button onClick={() => handleDelete(product._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
