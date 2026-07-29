import { useState } from "react";
import PostAppItem from "./PostAppItem";

function PostApp(){

    const [posts, setPosts] = useState([
        {
              id : crypto.randomUUID()
            , title : "React 재밌다"
            , content : "React 정말 재밌다"
        }
        , {
            id : crypto.randomUUID()
            , title : "javaScript 재밌다"
            , content : "javaScript 정말 재밌다"
        }
        , {
            id : crypto.randomUUID()
            , title : "java 재밌다"
            , content : "java 정말 재밌다"
        }
        , {
            id : crypto.randomUUID()
            , title : "SQL 재밌다"
            , content : "SQL 정말 재밌다"
        }
        , {
            id : crypto.randomUUID()
            , title : "nodejs 재밌다"
            , content : "nodejs 정말 재밌다"
        }
        , {
            id : crypto.randomUUID()
            , title : "nestjs 재밌다"
            , content : "nestjs 정말 재밌다"
        }
    ])

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleAdd = (e) => {
       e.preventDefault();
        //submit시 새로고침으로 데이터 reset을 하는것을 막아줌.
       const newPost = {
              id : crypto.randomUUID()
            , title : title
            , content : content
       }

       setPosts((prev) => [...prev, newPost]);
       setTitle("");
       setContent("");
    }

    const handlePostDelete = (id) => {
        setPosts((prev) => prev.filter((post) =>
            post.id !== id
        ))
    }

    /* 
        editId === null : 수정중인 id가 없음.
        editId === id : 수정중
    */
    const [editId, setEditId] = useState(null); 
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");

    const handlePostEdit = (id) => {
        const post = posts.find((post) => post.id === id)
        if(!post) return;
        setEditId(post.id);
        setEditTitle(post.title);
        setEditContent(post.content);
    }

    const handleSaveEdit = (event) => {
        event.preventDefault();
         
        setPosts((prev) => 
            prev.map((post) => 
                { return post.id === editId ? {...post, title : editTitle, content : editContent} : post }
            )
        )
        setEditId(null); 
        setEditTitle("");
        setEditContent("");
    }

    return(
        <>
            <div className="card post-app">
               
                <h2>게시글 작성</h2>
                <form className="post-edit-form" onSubmit={handleAdd}>
                   <div className="post-form-row">
                        <input type="text" value={title} placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)}/>
                        <button type="submit">등록</button>
                    </div>
                    <textarea 
                            className="post-body-input" 
                            value={content} 
                            placeholder="내용을 입력하세요." 
                            onChange={(e) => setContent(e.target.value)} 
                            rows={5}
                    />
                </form>

                <h2>게시글 목록</h2>
                <ul className="post-list">
                    {
                        posts.map((p) => (
                            //<li className="post-item" key={p.id}>
                            //    <div className="post-content">
                            //        <strong className="post-title">{p.title}</strong>
                            //        <p className="post-body">{p.content}</p>
                            //    </div>
                            //</li>
                            <PostAppItem 
                                    key={p.id} 
                                    post={p} 
                                    onDelete={handlePostDelete} 
                                    isEditing={editId === p.id}
                                    editTitle={editTitle}
                                    editContent={editContent}
                                    onEditTitleChange={(e) => setEditTitle(e.target.value)} 
                                    onEditContnetChange={(e) => setEditContent(e.target.value)} 
                                    onStartEdit={handlePostEdit} 
                                    onSaveEdit={handleSaveEdit}
                            />
                        )
                            
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default PostApp;