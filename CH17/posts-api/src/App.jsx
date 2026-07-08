import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { usePosts } from './hooks/usePosts'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

function App() {
  // add, edit, remove 객체함수
const {posts, loading, error, add, edit, remove} = usePosts();
const [editPost, setEditPost] = useState(null); //post객체가 들어감

// 수정
async function handleSubmit(data) {
    try {
      //console.log("handleSubmit data : ");
      //console.log(data);
       //console.log(editPost);
      if(editPost){
        await edit(editPost.id, data);
        setEditPost(null);
      }else{
        await add(data);
      }
    } catch (e) {
      alert(e.message);
    }

}

// 삭제
async function handleDel(id) {
    if(!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await remove(id);
  
    } catch (e) {
      alert(e.message);
    }finally{

    }

}

 //console.log("App");

 //console.log(setEditPost);

  return (
    <div>
      <h1>미니게시판 CRUD연습</h1>
      <div>
        <PostForm 
          editPost={editPost} 
          onSubmit={handleSubmit} 
          onCancle={() => setEditPost(null)} 
        />
      </div>
      <PostList 
          posts={posts} 
          loading={loading} 
          error={error} 
          onEdit={setEditPost} 
          onDelete={handleDel}
        />
    </div>
  )
}

export default App
