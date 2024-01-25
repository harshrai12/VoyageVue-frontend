import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdCardTravel } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=''>
      <ul className=' text-sm font-poppins relative top-4  text-gray-300 flex justify-between mx-10'>
      <li><MdCardTravel  size={18}/></li>
      <ul className='flex justify-center gap-14'>
      <Link to="/home"><li>Expore</li></Link>
      <li>Contact Us</li>
      <li>About Us</li>
      <Link to="/book"><li>Book a Trip</li></Link>
      </ul>
     
      <li><CiSearch size={18}/></li>
      </ul>
    </div>
  )
}

export default Navbar
