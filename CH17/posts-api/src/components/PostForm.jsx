import { useState, useEffect } from "react";

function PostForm({setEditPost, onSubmit, onCancle}){
// onSubmit -> handleSubmit({title, body})
// onSubmit -> handleSubmit(data)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    console.log("PostForm setEditPost : ");
    console.log(setEditPost);
    useEffect(() =>{
        if(setEditPost){
            setTitle(setEditPost.title);
            setBody(setEditPost.body);
        }else{
           setTitle('');
           setBody(''); 
        }
            
    }
    , [setEditPost]);


    function handleSubmit(e){
        e.preventDefault();
        onSubmit({title : title, body : body})
        setTitle('');
        setBody(''); 

    }

    const isEditing = Boolean(setEditPost);
   
    return (
        <form className="form card" onSubmit={handleSubmit} >
            <h2>{isEditing ? "수정" : "새글"}</h2>
            <input type="text" placeholder="제목을 작성" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea placeholder="내용을 작성" value={body} onChange={(e) => setBody(e.target.value)}/>
            <div className='button-row'>
                <button type="submit">{isEditing ? "수정" : "추가"}</button>
            </div>
        </form>
    )
}

export default PostForm;