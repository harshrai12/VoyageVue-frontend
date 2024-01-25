import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the entered username and password are valid
    if (username === 'admin' && password === 'admin') {
      console.log('Login successful!');
      navigate("/admin/dashboard");
      // You can redirect the user to the admin dashboard or perform other actions here
    } else {
      console.log('Invalid username or password');
      // You can show an error message to the user or perform other actions here
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">
          <FaUser className="inline-block mb-1 mr-2 text-blue-500" />
          Admin Login
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-600">
              <FaUser className="inline-block mb-1 mr-2" />
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
              <FaLock className="inline-block mb-1 mr-2" />
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

