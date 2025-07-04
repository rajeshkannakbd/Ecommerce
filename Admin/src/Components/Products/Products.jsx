// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [activeItem, setActiveItem] = useState("all");
  
//   useEffect(() => {
//     fetch("https://ecommerce-sjhs.onrender.com/Product")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.product))
//       .catch((error) => console.error("Failed to fetch products:", error));
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?"))
//       return;
    

//     try {
//       await axios.delete(`https://ecommerce-sjhs.onrender.com/deleteitem/${id}`);
//       setProducts(products.filter((product) => product._id !== id));
//       alert("Product deleted successfully.");
//     } catch (error) {
//       console.error("Failed to delete product:", error);
//       alert("Failed to delete product. Please try again.");
//     }
//   };

//   return (
//     <div className=" h-full w-full">
//       <div className=" sticky top-0 p-1 shadow-lg bg-white">
//       <div className=" flex flex-row mx-10 mt-6 mb-8 ">
//         <ul className=" flex justify-evenly gap-10">
//           <div className=" flex items-center content-center flex-row border-2 p-3 active:bg-slate-600">
//             <li className=" text-nowrap">All Products </li>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-4 mx-1"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
//               />
//             </svg>
//           </div>
//           <div className=" flex items-center content-center flex-row border-2 p-3">
//             <li className=" py-2 text-nowrap">
//               <Link to="/products/create">Create</Link>
//             </li>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-5 "
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 4.5v15m7.5-7.5h-15"
//               />
//             </svg>
//           </div>
//         </ul>
//       </div>
//       <h1 className=" font-medium mb-4">Toatl products : <span className=" text-blue-800 font-bold">{products.length}</span></h1>
//       </div>
      
//       <div className=" flex p-4  text-black">
//         <div className=" felx w-full ">
//           <table className=" w-full"><tbody>
//           {products.map((product) => (
//             <tr key={product._id} className=" flex items-center justify-between border-2 gap-10 mt-4 ">
//               <td><img  src={`https://ecommerce-sjhs.onrender.com/uploads/${product.image}`} alt="" className=" h-[100px] w-[100px] object-contain ml-10 p-2" /></td>
//             <td className=" w-[300px]">{product.title}</td>
//             <td>{product.price}</td>
             
//               <td className=" mr-10 flex gap-4"><button> <Link
//                         to={`/products/edit/${product._id}`}
//                         className="text-blue-600 underline"
//                       >
                        // <svg
                        //   xmlns="http://www.w3.org/2000/svg"
                        //   fill="none"
                        //   viewBox="0 0 24 24"
                        //   strokeWidth={1.5}
                        //   stroke="currentColor"
                        //   className="size-6 text-yellow-400 mr-4"
                        // >
                        //   <path
                        //     strokeLinecap="round"
                        //     strokeLinejoin="round"
                        //     d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        //   />
                        // </svg>
//                       </Link></button>
//                       <button onClick={() => handleDelete(product._id)}>
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   fill="none"
                      //   viewBox="0 0 24 24"
                      //   strokeWidth={1.5}
                      //   stroke="currentColor"
                      //   className="size-6 text-red-500"
                      // >
                      //   <path
                      //     strokeLinecap="round"
                      //     strokeLinejoin="round"
                      //     d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      //   />
                      // </svg>
//                     </button></td>
//             </tr>
//           ))}</tbody></table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecommerce-sjhs.onrender.com/Product")
      .then((res) => res.json())
      .then((data) => setProducts(data.product))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`https://ecommerce-sjhs.onrender.com/deleteitem/${id}`);
      setProducts(products.filter((product) => product._id !== id));
      alert("Product deleted successfully.");
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div className="w-full p-4">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 shadow-sm p-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
            <span>All Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <Link
            to="/products/create"
            className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100 text-blue-600"
          >
            <span>Create</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </Link>
        </div>
        <h1 className="text-lg font-medium">Total Products: <span className="text-blue-800 font-bold">{products.length}</span></h1>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <img
              src={`https://ecommerce-sjhs.onrender.com/uploads/${product.image}`}
              alt={product.title}
              className="w-full sm:w-[100px] h-[100px] object-contain"
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">Price: ₹{product.price}</p>
            </div>

            <div className="flex gap-3 justify-end">
              {/* Edit */}
              <Link to={`/products/edit/${product._id}`} className="hover:text-yellow-500">
                 <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 text-yellow-400 mr-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
              </Link>

              {/* Delete */}
              <button onClick={() => handleDelete(product._id)} className="hover:text-red-600">
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
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


 // <div
            //   key={product._id}
            //   className=" flex gap-2  m-4 flex-row border-2 "
            // >
            //   <div className="bg-white shadow-md p-2  flex justify-evenly rounded-lg overflow-hidden w-full hover:shadow-xl transition-shadow duration-300">
            //     <div><img
            //       src={product.image}
            //       alt={product.title}
            //       className="h-20 w-[150px] object-contain p-4 bg-white"
            //     /></div>
            //     <div className="px-4 flex w-[85%] items-center justify-center gap-3  py-2">
            //       <h2 className="text-lg w-[300px] overflow-x-auto font-semibold mb-1 text-wrap">
            //         {product.title}
            //       </h2>
            //       <p className="text-green-600 border-2 w-20 flex items-center content-center justify-center font-bold mb-2">
            //         ₹{product.price.toFixed(0)}
            //       </p>
            //       {/* <div className=" flex">
            //   <h1 className="text-sm text-gray-600 mb-4 line-clamp-2">Ratings : {} </h1>
            //   <svg
            //     xmlns="http://www.w3.org/2000/svg"
            //     fill="none"
            //     viewBox="0 0 24 24"
            //     strokeWidth={1.5}
            //     stroke="currentColor"
            //     className="size-4 relative top-1"
            //   >
            //     <path
            //       strokeLinecap="round"
            //       strokeLinejoin="round"
            //       d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            //     />
            //   </svg>
            //   </div> */}
            //       <div className=" relative -right-10">
            //          <button>
            //           <Link
            //             to={`/admin/dashboard/products/edit/${product._id}`}
            //             className="text-blue-600 underline"
            //           >
            //             <svg
            //               xmlns="http://www.w3.org/2000/svg"
            //               fill="none"
            //               viewBox="0 0 24 24"
            //               strokeWidth={1.5}
            //               stroke="currentColor"
            //               className="size-6 text-yellow-400 mr-4"
            //             >
            //               <path
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //                 d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            //               />
            //             </svg>
            //           </Link>
            //         </button>
            //         <button onClick={() => handleDelete(product._id)}>
            //           <svg
            //             xmlns="http://www.w3.org/2000/svg"
            //             fill="none"
            //             viewBox="0 0 24 24"
            //             strokeWidth={1.5}
            //             stroke="currentColor"
            //             className="size-6 text-red-500"
            //           >
            //             <path
            //               strokeLinecap="round"
            //               strokeLinejoin="round"
            //               d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            //             />
            //           </svg>
            //         </button>
                   
            //       </div>
            //     </div>
            //   </div>
            // </div>
