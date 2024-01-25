import React, { useEffect, useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { FaSpinner } from 'react-icons/fa';
import UserNavbar from './UserNavbar';
import DiaryPostForm from './Diaries/DiaryPostForm';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [openD, setOpenD] = useState(false);
  const [privatePosts, setPrivatePosts] = useState([]);
  const [publicPosts, setPublicPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = () => {
    const token = localStorage.getItem('token');

    if (token) {
      setLoading(true);

      fetch('https://zealous-sunglasses-slug.cyclic.app/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);

          const privatePosts = data.posts.filter(post => post.visibility === 'private');
          const publicPosts = data.posts.filter(post => post.visibility === 'public');
          setPrivatePosts(privatePosts);
          setPublicPosts(publicPosts);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [openD]); // Call fetchUserData again when openD changes

  return (
    <div className="bg-gray-100 min-h-screen bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682685797140-c17807f8f217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <UserNavbar />
      
      <div className="mx-auto max-w-xl mt-16 lg:max-w-4xl">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          {loading && (
            <div className="text-center py-4">
              <FaSpinner className="text-2xl animate-spin" /> Loading...
            </div>
          )}

          {!loading && userData && (
            <div className="flex items-center justify-between p-8 bg-purple-700">
              <div className="flex items-center space-x-4">
                <img
                  src={`data:image/jpeg;base64,${userData.profileImage}`}  
                  alt="User Profile"
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
                <div>
                  <h1 className="text-2xl font-bold text-white">{userData.Fullname}</h1>
                  <p className="text-gray-200 text-sm">{userData.bio}</p>
                  <p className="text-gray-200 text-sm">{userData.email}</p>
                </div>
              </div>
              <CiCirclePlus className='hover:cursor-pointer' size={70} color='white' onClick={()=>setOpenD(!openD)}/>
            </div>
          )}

          <div className="flex w-full  justify-center ">
            <div className="private-post bg-white p-4 rounded shadow-md">
              <h1 className="text-xl font-bold mb-4">Private Posts</h1>
              {privatePosts.length === 0 ? (
                <p className="flex items-center justify-center text-gray-600 text-center">No private posts yet</p>
              ) : (
                privatePosts.map((item, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-lg font-semibold text-purple-700">{item.destination}</p>
                    <p className="text-gray-600">{item.description}</p>
                    <img
                      src={`data:image/jpeg;base64,${item.image}`}  
                      alt="User Profile"
                      className="w-16 h-16 mt-4 border-4 border-purple-700"
                    />
                  </div>
                ))
              )}
            </div>

            <div className="public-post bg-white p-4 rounded shadow-md">
              <h1 className="text-xl font-bold mb-4">Public Posts</h1>
              {publicPosts.map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-semibold text-purple-700">{item.destination}</p>
                  <p className="text-gray-600">{item.description}</p>
                  <img
                    src={`data:image/jpeg;base64,${item.image}`}  
                    alt="User Profile"
                    className="w-16 h-16 mt-4 border-4 border-purple-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DiaryPostForm openD={openD} setOpenD={setOpenD} fetchUserData={fetchUserData} />
    </div>
  );
}

export default UserProfile;







