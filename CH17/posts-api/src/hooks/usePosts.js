import { useState, useEffect } from "react";
import { getPosts } from "../api/posts";

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

    return {posts, loading, error};

}

