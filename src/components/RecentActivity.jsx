import React, { useState, useEffect } from 'react';

const RecentActivity = () => {
  const [recentActivityData, setRecentActivityData] = useState([]);

  useEffect(() => {
    // Fetch recent activity data when the component mounts
    const fetchRecentActivityData = async () => {
      try {
        const response = await fetch('https://zealous-sunglasses-slug.cyclic.app/recent-activity', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setRecentActivityData(data);
        } else {
          console.error('Error fetching recent activity data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching recent activity data:', error);
      }
    };

    fetchRecentActivityData();
  }, []); // Run the effect only once when the component mounts

  return (
    <div className="lg:ml-32  mx-12 mt-10 bg-opacity-40 bg-blur w-52  p-4 text-white bg-slate-500 bg-clip-padding backdrop-blur-sm rounded">
      <h1 className="text-xs mb-4">Recent Activity</h1>
      {recentActivityData.map((activity, index) => (
        <div key={index} className="mb-4 flex gap-1 text-xs ">
          <p className=" text-gr">{activity.user} booked for </p>
          <ul className=" flex gap-1">
            {activity.trips.map((trip, tripIndex) => (
              <p key={tripIndex} className=" text-xs">
                {trip.destination}
              </p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;


