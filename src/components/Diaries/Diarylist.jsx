import React, { useEffect, useState } from 'react';
import DiaryCard from './DiaryCard';


function DiaryList() {
  const [diaryPosts, setDiaryPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch diary posts when the component mounts
    const fetchDiaryPosts = async () => {
      try {
        const response = await fetch('https://zealous-sunglasses-slug.cyclic.app/users-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch diary posts');
        }

        const data = await response.json();
        // Filter posts with visibility as "public"
        const publicPosts = data.filter((post) => post.visibility === 'public');
        setDiaryPosts(publicPosts);
      } catch (error) {
        console.error('Error fetching diary posts:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchDiaryPosts();
  }, []); // Empty dependency array to fetch only once when the component mounts

  if (loading) {
    return (
      <div className='flex flex-wrap mx-auto mt-10 justify-center items-center gap-7 lg:flex-row  h-screen'>
        <h1 className="text-white text-4xl">Loading...</h1>
        
      </div>
    );
  } else {
    return (
      <div className='flex flex-wrap mx-auto mt-10 justify-center items-center gap-7 lg:flex-row backdrop-blur-sm h-screen'>
        {diaryPosts.map((post, index) => (
          <DiaryCard key={index} postData={post} />
        ))}
      </div>
    );
  }
}

export default DiaryList;


