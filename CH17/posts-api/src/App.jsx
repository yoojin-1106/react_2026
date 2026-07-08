import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PostList from './components/PostList'
import { usePosts } from './hooks/usePosts'

function App() {
const {posts, loading, error} = usePosts();
 //console.log("App");
  return (
    <div>
      <h1>미니게시판 CRUD연습</h1>
      <PostList 
          posts={posts} 
          loading={loading} 
          error={error} 
          onEdit={()=>{}} 
          onDelete={()=>{}}
        />
    </div>
  )
}

export default App
