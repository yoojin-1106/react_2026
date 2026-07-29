import { useState, useEffect } from "react";

function PostList(){

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   
    const loadPosts = async () => {
        setLoading(true);
        setError(null);
        /* 초기화 */
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            
            if(!res.ok){
                throw new Error(`서버 응답 오류 : ${res.status}`);
                /* error 발생 시 catch으로 간다. 아래 구문은 실행하지 않는다. */
            }

            const data = await res.json();
            setPosts(data);
            // console.log(data);
        } catch (e) {
            setError(e.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);


    if(loading){
        return(
            <>
                <div className="demo">
                    <p className="status-loading">
                        목록을 불러오는 중입니다.
                    </p>
                </div>
            </>
        )
    }

    if(error){
        return(
            <>
                <div className="demo">
                    <p className="status-error">
                        불러오기에 실패하였습니다.
                    </p>
                </div>
            </>
        )
    }

    return(
        <>
            <div className="demo">
                <div className="toolbar">
                    <button type="button" className="primary" onClick={loadPosts} disabled={loading}>다시불러오기</button>
                    {/* loading : false, error : null -> output  */}
                    {!loading && !error && <span className="hint">글 {posts.length}개 </span>}
                </div>
                <ul className="post-list">
                    {posts.map((posts) => {
                            return(
                                <li key={posts.id}>
                                    <div className="title">{posts.title}</div>
                                    <div className="body">{posts.body}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>       
        </>
    )

}

export default PostList;