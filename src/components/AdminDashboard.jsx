import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

function AdminDashboard() {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminData = () => {
    const token = localStorage.getItem('token');

    if (token) {
      setLoading(true);

      fetch('https://zealous-sunglasses-slug.cyclic.app/admin/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setAdminData(data);
        })
        .catch((error) => {
          console.error('Error fetching admin dashboard data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleDeleteUser = (userId) => {
    fetch('http://localhost:3000/admin/deleteUser', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        fetchAdminData();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const handleDeletePost = (userId, postId) => {
    fetch('http://localhost:3000/admin/deletePost', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, postId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        fetchAdminData();
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-5xl mt-12 p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        {loading && (
          <div className="text-center py-4">
            <FaSpinner className="text-2xl animate-spin" /> Loading...
          </div>
        )}

        {!loading && (
          <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Posts</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((user, index) => (
                <React.Fragment key={index}>
                  <tr className={(index % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={`data:image/png;base64,${user.profileImage}`}
                        alt="Profile"
                        className="rounded-full h-8 w-8 object-cover mr-2"
                      />
                      <span className="text-gray-800 font-semibold">{user.Fullname}</span>
                    </td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.posts ? user.posts.length : 0}</td>
                    <td className="py-2 px-4 flex items-center space-x-4">
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete User
                      </button>
                    </td>
                  </tr>
                  {user.posts &&
                    user.posts.map((post, postIndex) => (
                      <tr key={`${index}-${postIndex}`} className={(postIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4">
                          <div className="text-gray-800">
                            <span className="font-semibold">Destination:</span> {post.destination}
                          </div>
                          <div className="text-gray-600">
                            <span className="font-semibold">Date:</span>{' '}
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="text-gray-600">
                            <span className="font-semibold">Description:</span> {post.description}
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          <button
                            onClick={() => handleDeletePost(user._id, post._id)}
                            className="text-red-500 hover:underline"
                          >
                            Delete Post
                          </button>
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;




















