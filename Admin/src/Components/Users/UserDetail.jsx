import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetail = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ecommerce-sjhs.onrender.com/users')
      .then((data) => setUsers(data.data.users))
      .catch((err) => console.log('Error while getting Users', err));
  }, []);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">User Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={user._id}
            className="shadow-md border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-lg transition-all duration-300"
          >
            <h1 className="text-sm text-gray-500 mb-2">{index + 1})</h1>
            <h1 className="text-lg font-medium">Name: {user.name}</h1>
            <h1 className="text-md text-gray-700">Email: {user.email}</h1>
            <h1 className="text-md text-gray-700">Role: {user.role}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
