import { useState, useEffect } from "react";

function PostForm({editPost, onSubmit, onCancle}){
// onSubmit -> handleSubmit({title, body})
// onSubmit -> handleSubmit(data)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    //console.log("PostForm editPost : ");
    useEffect(() => {
        if(editPost){
            setTitle(editPost.title);
            setBody(editPost.body);
        }else{
            setTitle('');
            setBody(''); 
        }
        
    }, [editPost]);
    
   // console.log(editPost);

    function handleSubmit(e){
         console.log("111");
        e.preventDefault();
        const post = {title: title, body:body}
        onSubmit(post);
        setTitle('');
        setBody(''); 

    }

    const isEditing = Boolean(editPost);

    //console.log(isEditing);
   
    return (
        <form className="form card" onSubmit={handleSubmit} >
            <h2>{isEditing ? "수정" : "새글"}</h2>
            <input 
                    type="text" 
                    placeholder="제목을 작성" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                    placeholder="내용을 작성" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
            />
            <div className='button-row'>
                <button type="submit">{isEditing ? "수정" : "추가"}</button>
            </div>
        </form>
    )
}

export default PostForm;