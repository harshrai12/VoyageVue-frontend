// SavedDiaries.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBookmarks } from '../../Redux/bookmarksSlice';
import DiaryCard from './Diaries/DiaryCard';
import UserNavbar from './UserNavbar';

const SavedDiaries = () => {
  const bookmarks = useSelector(selectBookmarks);

  return (
    <>
    <UserNavbar color='dark' />
    <div className="flex flex-wrap items-center justify-center h-screen">
   
      {bookmarks.map((postData) => (
        <DiaryCard key={postData.id} postData={postData} />
      ))}
    </div>
    </>
  );
};

export default SavedDiaries;


