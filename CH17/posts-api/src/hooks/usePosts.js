import { useState, useEffect } from "react";
import { getPosts, createPost, updatePost, deletePost } from "../api/posts";

export function usePosts(){
    //console.log("usePosts");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const load = async() => {

        try {
            setLoading(true);
            setError(null);
            
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
           console.error(error);
           setError(error instanceof Error ? error.message : "포스트를 가져오는데 실패했습니다.");
           
        }finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        load();
    }, []);


    async function add(post) {
        setError(null);
        const created = await createPost(post);
        setPosts((prev) => [...created, prev]);

    }

    async function edit(id, post) {
        setError(null);
        const data = await updatePost(id, post);
        setPosts((prev) => 
            prev.map((p) => 
                p.id === id, post ? {...p, ...post} : p
        ));

    }

    async function remove(id) {
        setError(null);
        await deletePost(id);
        setPosts((prev) => prev.filter((p) => p.id !== id ));

    }
    //객체 : add, edit, remove

    return {posts, loading, error, add, edit, remove};



}

