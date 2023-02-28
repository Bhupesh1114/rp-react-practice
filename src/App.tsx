import React from 'react';
import './App.css';
import Calender from './components/Calender/Calender';
import Carousel from './components/Carousel/Carousel';
import FollowCard from './components/FollowCard/FollowCard';
import NewsCard from './components/NewsCard/NewsCard';
import PostThoughts from './components/PostThoughts/PostThoughts';
import ProfileCard from './components/ProfileCard/ProfileCard';
import data from "./data.json";

function App() {
  return (
    <>
    <div className='App'>
        <ProfileCard />
        <div>
        {data?.posts?.map(post => {
          return <PostThoughts key={post.id} {...post}/>
         })}
        </div>
  
      <div>
      <FollowCard />
      <NewsCard />
      </div>
      

    </div>
    <Calender />
    <Carousel />
    </>
  );
}

export default App;
