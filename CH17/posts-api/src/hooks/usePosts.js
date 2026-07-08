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
           console.error(e);
           
           
        }finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        load();
    }, []);

    //신규
    async function add(post) {
        setError(null);
        const created = await createPost(post);
        setPosts((prev) => [created, ...prev]);

    }

    //수정
    async function edit(id, post) {
        setError(null);
        const data = await updatePost(id, post);
        setPosts((prev) => 
            prev.map((p) => 
                p.id === id, post ? {...p, ...post} : p
        ));

    }

    //삭제
    async function remove(id) {
        setError(null);
        await deletePost(id);
        setPosts((prev) => prev.filter((p) => p.id !== id ));

    }
    //객체 : add, edit, remove

    return {posts, loading, error, add, edit, remove};



}


