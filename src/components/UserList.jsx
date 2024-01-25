

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://zealous-sunglasses-slug.cyclic.app/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h3>{user.Fullname}</h3>
            <p>Email: {user.email}</p>
            <p>Bio: {user.bio}</p>
            {user.profileImage && (
              <img
                src={`data:image/jpeg;base64,${user.profileImage}`}
                alt={`Profile of ${user.Fullname}`}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
