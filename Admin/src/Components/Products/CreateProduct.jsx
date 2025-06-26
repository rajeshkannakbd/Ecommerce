import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [file, setFile] = useState(null);
  const [count,setCount] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting product...");
  console.log("File selected:", file);


  if (!title || !desc || !price || !category || !file || !rating || !count) {
    alert("Please fill in all fields");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("price", price);
  formData.append("category", category);
  formData.append("rating", rating);
  formData.append("image", file);
  formData.append("count",count)

  try {
    const response = await axios.post(
      "http://localhost:5000/upload-product",
      formData,
      
    );

    if (response.status === 201) {
      alert("Product created successfully!");
      setTitle("");
      setDesc("");
      setPrice("");
      setCategory("");
      setRating("");
      setFile(null);
      // setShowErrors(false); <-- remove this if undefined
    }
  } catch (error) {
    console.error("Upload error:", error);
    alert(error.response?.data?.message || "Upload failed.");
  }
};



  return (
    <div className=" h-auto">
      <div className=" sticky top-0 bg-white p-1 shadow-md rounded w-full">
      <div className=" flex flex-row mx-10 mt-6 mb-8 ">
        <ul className=" flex justify-evenly gap-10">
          <div className=" flex items-center content-center flex-row border-2 p-3 active:bg-slate-600">
            <Link to="/admin/dashboard/products">
              <li className=" text-nowrap">All Products </li>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mx-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
              />
            </svg>
          </div>
          <div className=" flex items-center content-center flex-row border-2 p-3">
            <li className=" py-2 text-nowrap">
              <Link to="/admin/dashboard/products/create">Create</Link>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </ul>
      </div></div>
     
      <div className="m-10">
        <h1 className="text-2xl font-semibold py-10 text-center">
          Add New Product
        </h1>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
          <form
            action="#"
            className=" flex p-4 gap-10 flex-col "
            onSubmit={handleSubmit}
          >
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label htmlFor="category" className="mb-2 font-medium">
                Category:
              </label>
              <input
                type="text"
                id="category"
                value={category}
                 onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label htmlFor="productName" className="mb-2 font-medium">
                Product Name:
              </label>
              <input
                type="text"
                id="productName"
                value={title}
                 onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter product name"
              />
            </div>
          </div>
           <div className="flex flex-col flex-1 min-w-[200px]">
              <label htmlFor="productprice" className="mb-2 font-medium">
                Product Price:
              </label>
              <input
                type="number"
                value={price}
                id="productprice"
                onChange={(e) => setPrice(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter product name"
              />
            </div>
          <div className="flex flex-col">
            <label htmlFor="Description" className="mb-2 font-medium">
             Product Description:
            </label>
            <textarea
              id="Description"
              value={desc}
               onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter product Description"
             className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
           <div className="flex flex-col flex-1 min-w-[200px]">
              <label htmlFor="productrating" className="mb-2 font-medium">
                Product Rating:
              </label>
              <input
                type="number"
                value={rating}
                id="productrating"
                onChange={(e) => setRating(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter product Rating"
              />
            </div>
          <div className="flex flex-col flex-1 min-w-[200px]">
              <label htmlFor="productcount" className="mb-2 font-medium">
                Product Availability:
              </label>
              <input
                type="number"
                value={count}
                id="productcount"
                onChange={(e) => setCount(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter product name"
              />
            </div>
          <h2 className=" font-medium">Product Image :</h2>
          <div className="flex justify-center">
            <label
              htmlFor="image"    
              className="cursor-pointer border h-32 w-full max-w-md border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              Click to upload image
              <input type="file" id="image" className="hidden" onChange={(e) => setFile(e.target.files[0])}/>
            </label>
          </div>
           <button
              type="submit"
              className=" bg-blue-500 text-white font-semibold rounded-full p-2 relative w-48 left-[40%] my-4"
            >
              Create Product
            </button></form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

 {/* <div className=" flex h-svh">
     
      <div className=" w-[100%] h-[60%] mx-10">
        <h1 className=" text-green-500 relative left-32 m-10 font-semibold text-3xl">
          NEW PRODUCT
        </h1>
        <div className="  border-2 border-slate-400 h-[100%] w-[55%] mx-[20%] my-8">
          <form
            action=""
            className=" flex p-4 flex-col "
            onSubmit={handlesubmit}
          >
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" m-2   outline outline-1 "
            />
            {!title && showErrors && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please enter the Title
              </span>
            )}
            <label htmlFor="price">Pice : </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className=" m-2   outline outline-1 "
            />
            {!price && showErrors && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter The Price
              </span>
            )}
            <label htmlFor="desc">Discription : </label>
            <input
              type="text"
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className=" m-2  outline outline-1 "
            />
            {!desc && showErrors && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter a Discription
              </span>
            )}
            <label htmlFor="category">Category : </label>
            <input
              id="category"
              className=" outline outline-1  m-2"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
            />
            {!category && showErrors && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter The Category
              </span>
            )}
            <label htmlFor="Rating">Ratings : </label>
            <input
              id="Rating"
              className=" outline outline-1  m-2"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              type="text"
            />
            {!rating && showErrors && (
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter The rating
              </span>
            )}
            <label htmlFor="Image">Image : </label>
            <input
              id="Image"
              className=" outline outline-1  m-2"
              onChange={(e) => setFile(e.target.value)}
            
              type="file"
            />
            { !rating && showErrors &&(
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Select The File
              </span>
            )}

            <button
              type="submit"
              className=" bg-blue-500 text-white font-semibold rounded-full p-2 relative w-48 left-[40%] my-4"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div> */}
