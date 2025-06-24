import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetailPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/SingleProduct/${id}`)
      .then((data) => {
        setProducts(data.data.product);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!products) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading product details...
      </div>
    );
  }
  return (
    <div className=" relative top-28 h-screen">
      <div className=" flex m-10">
        <div className="">
          <div className=" border-2 border-slate-100 shadow-lg h-[500px] w-[600px] relative content-center items-center justify-center">
            <img src={`http://localhost:5000/uploads/${products.image}`} alt="" className=" h-[400px] mx-auto" />{" "}
            <div className=" m-4 absolute top-0 right-0 bg-slate-200 size-6 flex items-center justify-center text-slate-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" size-6 text-black "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
          <div className=" flex gap-44 my-6 mx-20">
            <button className=" bg-green-400 p-4 rounded-xl text-white hover:bg-green-500">
              Add To Cart
            </button>
            <button className=" bg-yellow-400 p-4 rounded-xl text-white hover:bg-yellow-500">
              Buy Now
            </button>
          </div>
        </div>
        <div className=" mx-7 flex flex-col overflow-y-scroll w-[90%] gap-3">
          <h2 className=" font-semibold text-2xl uppercase">
            {products.title}
          </h2>
          <div className=" flex gap-4 items-center my-3">
            <div className=" bg-green-500 flex items-center p-1 w-[60px] justify-center rounded-lg ">
              <h2 className=" rounded-lg h-[20px] w-[10px] mr-1 font-semibold flex items-center justify-center ">
                {/* {products.rating?.[0].rate?.toFixed(0)} */}3
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <h2 className=" text-slate-400">80000 reviews & 8000 ratings</h2>
          </div>
          <div className=" my-6 flex flex-col">
            <h2 className=" mb-2 font-semibold text-2xl text-green-500">
              Special Price
            </h2>
            <h2 className=" text-3xl font-semibold text-slate-800">
              Rs.{products.price}
            </h2>
          </div>
          <div className=" flex gap-2 items-center content-center">
            <h2 className=" font-semibold text-lg text-slate-800">
              Categorey :
            </h2>
            <h2 className=" text-xl uppercase">{products.category}</h2>
          </div>
          <div className="">
            <h2 className=" mt-5 mb-2 text-xl font-medium text-slate-800">
              About The Product
            </h2>
            <h5 className=" font-light">{products.description}</h5>
          </div>

          <div className=" mt-6 flex flex-col gap-2">
            <h2 className=" font-semibold text-lg text-slate-800">
              Ratings :
              <span className=" text-blue-500 font-bold m-2">
                {/* {products.rating?.[0].rate?.toFixed(0)} */}3
              </span>{" "}
            </h2>
            <h2 className=" font-semibold text-lg text-slate-800">
              Available :
              <span className=" text-blue-500 font-bold m-2 mr-1">
                {/* {products.rating?.[0].count?.toFixed(0)} */}3
              </span>
              pcs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailPage;
