import React from 'react';

const Testimony = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Customer Testimonials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimony 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="w-12 h-12 rounded-full mx-auto mb-4"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="John Doe"
            />
            <p className="text-gray-600 mb-4">
              "VoyageVue made my travel experience truly unforgettable. The destinations, the people, and the memories will stay with me forever."
            </p>
            <p className="font-bold">John Doe</p>
            <p className="text-gray-500">Happy Traveler</p>
          </div>

          {/* Testimony 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="w-12 h-12 rounded-full mx-auto mb-4"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Jane Smith"
            />
            <p className="text-gray-600 mb-4">
              "Exploring new places with VoyageVue has been a joy. From hidden gems to popular attractions, every trip has been a discovery."
            </p>
            <p className="font-bold">Jane Smith</p>
            <p className="text-gray-500">Adventurous Soul</p>
          </div>

          {/* Testimony 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="w-12 h-12 rounded-full mx-auto mb-4"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Robert Johnson"
            />
            <p className="text-gray-600 mb-4">
              "I've been an explorer all my life, and VoyageVue has been my trusted companion. The experiences are as diverse as the destinations."
            </p>
            <p className="font-bold">Robert Johnson</p>
            <p className="text-gray-500">Passionate Explorer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;


