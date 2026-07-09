import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Product(){
     
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
