import { usePosts } from "../hooks/usePosts";
import PostItem from "./PostItem";

export default function PostList({posts, loading, error, onEdit, onDelete}){
    //console.log("PostList");
    if(loading){
        return <p className="status loading">불러오는 중</p>
            
    }

    if(error){
        return <p className="status error">{error}</p>
            
    }

    if(posts.length === 0){
        return <p className="hint">글이 없습니다.</p>
            
    }

    console.log(onEdit);

    return (
        <ul style={{listStyle:'none', padding:0}}>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    post={post}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

