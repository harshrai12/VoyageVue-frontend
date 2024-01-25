import React from 'react'
import UserNavbar from './UserNavbar'
import Diarylist from './Diaries/Diarylist'
import RecentActivity from './RecentActivity'

function Home() {
  return (
    <div 
    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1651309259727-99b5f13f3a1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
             height:"4000px"}}>
      
      <UserNavbar/>
      <RecentActivity/>
      <Diarylist/>
    </div>
  )
}

export default Home
