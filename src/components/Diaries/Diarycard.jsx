import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';

const DiaryCard = ({ postData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatDate = (fullDateString) => {
    const datePart = fullDateString.substring(0, 10);
    return datePart;
  };

  const userFullName = postData?.user?.Fullname || 'Unknown User';

  return (
    <div className="w-80 mx-10 max-w-md  bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={`data:image/jpeg;base64,${postData.image}`}
          alt={postData.title}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img
              src={`data:image/jpeg;base64,${postData?.user?.profileImage}`}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
            />
            <div className="ml-2">
              <p className="text-xs font-semibold text-gray-700">{userFullName}</p>
              <p className="text-xs text-gray-500">{formatDate(postData.date)}</p>
            </div>
          </div>
          <button className="text-gray-700 hover:text-gray-900">
            <FaBookmark />
          </button>
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">{postData.title}</h2>
        <p className="text-sm text-gray-600">{postData.description}</p>
        <div className="flex items-center mt-4">
          <FaMapMarkerAlt className="text-brown mr-1" />
          <p className="text-sm text-gray-600">{postData.destination}</p>
        </div>
        <button
          onClick={handleExpandClick}
          className="mt-4 text-sm text-blue-500 hover:underline focus:outline-none"
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
        {expanded && (
          <div className="mt-2">
            <p className="text-sm text-gray-800">{postData.itinerary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiaryCard;








