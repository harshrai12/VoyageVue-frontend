// TripCatalog.js

import React from 'react';
import UserNavbar from './UserNavbar';

const TripCatalog = ({ trips }) => {
  const handleBooking = async (trip) => {
    try {
      const response = await fetch('https://zealous-sunglasses-slug.cyclic.app/book-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ trip }),
      });
  
      // Log the response and its text
      console.log('Response:', response);
    
  
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error booking trip:', error);
    }
  };
  

  return (
    <div
      className="flex flex-wrap justify-center lg:flex-col"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backdropFilter: 'blur(5px)', // Apply blur to the background
      }}
    >
      <UserNavbar />
      {trips.map((trip) => (
        <div
          key={trip.id}
          className="flex items-center justify-between bg-gray-500 bg-opacity-60 p-6 m-6  rounded-lg shadow-md  w-full md:w-1/2 lg:w-auto "
        >
          <div>
            <img
              src={`${trip.image}`}
              alt={trip.destination}
              className="h-24 object-cover mb-4 rounded-md shadow-md"
            />
            <h3 className="text-2xl font-extrabold text-white mb-2">{trip.destination}</h3>
            <p className="text-white mb-4">{trip.description}</p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-6 ">
              <p className="text-lg font-bold text-white">{trip.price}</p>
              <p className="text-white">Date: {trip.date}</p>
            </div>
            <button
              onClick={() => handleBooking(trip)}
              className="bg-gray-950 bg-opacity-75 text-white max-w-32 px-6 py-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripCatalog;






