
import { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [ title , setTitle ] = useState("")
  const [ desc , setDesc ] = useState("")
  const [ price , setPrice ] = useState("")
  const [ category , setCategory ] = useState("")
  const [ rating, setRating ] = useState("")
  // const [ file, setFile ] = useState("")
  const [showErrors,setShowErrors] = useState(false)
  
  const handlesubmit = async(e)=>{
     e.preventDefault();
    setShowErrors(true)
  const newProduct = {
    title,
    desc,
    price,
    category,
    rating,
  }
   try {
    const response = await axios.post("http://localhost:5000/newitem", newProduct);

    if (response.status === 201) {
      window.alert("Order placed successfully!");
      setTitle("")
      setDesc("")
      setPrice("")
      setCategory("")
      setRating("")
      setShowErrors(false)
    }
  } catch (error) {
    console.error("Order error:", error);
    window.alert(
      error.response?.data?.message || "Something went wrong. Please try again."
    );
  }


  }
  return (
    <div className=" flex h-svh">
      <div className=" w-[100%] h-[60%] mx-10">
        
        <h1 className=" text-green-500 relative left-32 m-10 font-semibold text-3xl">
          NEW PRODUCT
        </h1>
        <div className="  border-2 border-slate-400 h-[100%] w-[55%] mx-[20%] my-8">
          <form action="" className=" flex p-4 flex-col " onSubmit={handlesubmit}>
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" m-2   outline outline-1 "
            />
            { !title && showErrors &&(
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
            { !price && showErrors &&(
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
            { !desc && showErrors &&(
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
            { !category && showErrors &&(
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
            { !rating && showErrors &&(
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Enter The rating
              </span>
            )}
            <label htmlFor="Image">Image : </label>
            {/* <input
              id="Image"
              className=" outline outline-1  m-2"
              onChange={(e) => setFile(e.target.value)}
              value={file}
              type="file"
            />
            { !rating && showErrors &&(
              <span className=" mx-2 mb-1 -mt-2 font-medium text-red-500">
                * Please Select The File
              </span>
            )} */}
            
            <button
            type="submit"
            className=" bg-green-500 text-white font-semibold rounded-full p-2 relative w-48 left-[40%] my-4"
          >
            Create Product
          </button>
          </form>
        </div>
      </div>  
    </div>
  );
};

export default CreateProduct;
