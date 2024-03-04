import React from 'react';
import UserNavbar from './UserNavbar';
import Diarylist from './Diaries/Diarylist';
import RecentActivity from './RecentActivity';

function Home() {
  const gradientBackground = {
    backgroundImage: 'linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)',
    minHeight: '300vh', // Set a minimum height to cover the viewport
  };

  return (
    <div style={gradientBackground}>
      <UserNavbar color='light' />
      <RecentActivity />
      <Diarylist />
    </div>
  );
}

export default Home;

