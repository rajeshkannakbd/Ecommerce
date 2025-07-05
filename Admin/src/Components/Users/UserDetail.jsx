import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce-sjhs.onrender.com/users")
      .then((data) => setUsers(data.data.users))
      .catch((err) => console.log("Error while getting Users", err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`http://localhost:5000/deleteuser/${id}`);
      setUsers(users.filter((user) => user._id !== id));
      alert("user deleted successfully.");
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete Order. Please try again.");
    }
  };

  return (
    // <div className="px-4 py-6 max-w-7xl mx-auto">
    //   <h2 className="text-2xl font-bold mb-6">User Details</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {users.map((user, index) => (
    //       <div
    //         key={user._id}
    //         className="shadow-md border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-lg transition-all duration-300"
    //       >
    //         <h1 className="text-sm text-gray-500 mb-2">{index + 1})</h1>
    //         <h1 className="text-lg font-medium">Name: {user.name}</h1>
    //         <h1 className="text-md text-gray-700">Email: {user.email}</h1>
    //         <h1 className="text-md text-gray-700">Role: {user.role}</h1>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <div className=" w-full">
        <div className=" py-10 mx-4 flex items-center">
          <h1 className=" text-4xl font-thin">
            User Management
          </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 ml-2 mt-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
        </div>
        <div className="w-auto bg-slate-200 mx-20">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-400 text-md font-thin ">
                <th className="border px-4 py-6">S.No</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id || index}
                  className="border-0 bg-white even:bg-slate-50 "
                >
                  <td className="text-center border px-4 py-5">{index + 1}</td>
                  <td className="text-center border px-4 py-2">{user.name}</td>
                  <td className="text-center border px-4 py-2">{user.email}</td>
                  <td className="text-center border px-4 py-2">{user.role}</td>
                  <td className="text-center border px-4 py-2">
                    <center>
                      <Link to={`/Users/edit/${user._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-yellow-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg></Link>
                    </center>
                  </td>
                  <td className="text-center border px-4 py-2">
                    <center>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => handleDelete(user._id)}
                        className="size-5 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </center>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
