import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function UserNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className='bg-transparent h-12'>
      <ul className='text-sm font-poppins relative top-4 text-gray-100 flex justify-between mx-10'>
        <li
          className="flex hover:underline cursor-pointer"
          onClick={handleLogout}
        >
          Logout <span><IoIosLogOut /></span>
        </li>
        <ul className='flex justify-center gap-14'>
          <Link to="/home"><li>Explore</li></Link>
          <li>Saved Diaries</li>
          <Link to="/profile"><li>My Profile</li></Link>
          <Link to="/book"><li>Book a Trip</li></Link>
        </ul>
        <li><CiSearch size={18} /></li>
      </ul>
    </div>
  );
}

export default UserNavbar;

