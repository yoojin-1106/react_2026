import { useState, useEffect } from "react";
import { getPosts, createPost, updatePost, deletePost } from "../api/posts";

export function usePosts(){
    //console.log("usePosts");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const load = async () => {

        try {
            setLoading(true);
            setError(null);
            
            const data = await getPosts();
            setPosts(data);
        } catch (e) {
           setError(e.message) 
        }finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        load();
    }, []);

    //신규
    async function add(post) {
        try {
            setError(null);
            const created = await createPost(post);
            setPosts((prev) => [created, ...prev]);
            
        } catch (e) {
            console.error("게시글 생성 실패:", e);
            setError(e.message || "게시글 등록에 실패했습니다.");
            throw e; // 컴포넌트단에서도 에러를 알 수 있게 다시 던져줍니다
        }

    }

    //수정
    async function edit(id, post) {
        try {
            setError(null);
            const data = await updatePost(id, post);
            setPosts((prev) => 
                prev.map((p) => 
                    p.id === id ? {...p, ...post} : p
            ));
            
        } catch (e) {
            console.error("게시글 수정 실패:", e);
            setError(e.message || "게시글 수정에 실패했습니다.");
            throw e;
        }

    }

    //삭제
    async function remove(id) {
        try {
            setError(null);
            await deletePost(id);
            setPosts((prev) => prev.filter((p) => p.id !== id ));
        } catch (e) {
            console.error("게시글 삭제 실패:", e);
            setError(e.message || "게시글 삭제에 실패했습니다.");
            throw e;          
        }

    }
    //객체 : add, edit, remove

    return {posts, loading, error, add, edit, remove, refresh: load};



}


