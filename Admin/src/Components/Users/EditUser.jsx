import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    axios.get(`https://ecommerce-sjhs.onrender.com/user/${id}`)
      .then((res) => {
        const user = res.data.User;
        setFormData({
          name: user.name || "",
          email: user.email || "",
          role: user.role || "",
        });
      })
      .catch((err) => console.log(err));
  }, [id]);


  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handlesubmit= (e)=>{
   e.preventDefault();
  try {
    axios.put(`https://ecommerce-sjhs.onrender.com/user/edit/${id}`)
    alert("User Upadated")
    navigate("/userdetail")
  } catch (error) {
    console.log("unable to edit user",error)
  }
}

 
  return (
     <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl text-blue-600 font-bold mb-4">Edit User</h2>
      <form onSubmit={handlesubmit} className="grid gap-4">
        <label htmlFor="name" className=" font-normal text-slate-500 text-lg -mb-3 ">User Name : </label>
        <input
        id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
          className="border p-2"
        />
         <label htmlFor="email" className=" font-normal text-slate-500 text-lg -mb-3 ">User email : </label>
        <input
        id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          className="border p-2"
        />
         <label htmlFor="role" className=" font-normal text-slate-500 text-lg -mb-3 ">User role : </label>
        <input
        id="role"
          name="role"
          type="text"
          value={formData.role}
          onChange={handleChange}
          placeholder="role"
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUser;
