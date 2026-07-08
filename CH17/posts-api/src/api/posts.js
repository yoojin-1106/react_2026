const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;


function headers(extra={}){
//console.log("headers");
    return {
          apikey : SUPABASE_ANON_KEY
        , Authorization : `Bearer ${SUPABASE_ANON_KEY}`
        , ...extra // 만약 필요한 헤더정보 추가
    }

}

// 게시글 받아옴.  서버에 데이터를 저장하는 역할
//READ
export async function getPosts() {
    //console.log("getPosts", SUPABASE_URL);
    const resoponse = await fetch(
                    `${SUPABASE_URL}/rest/v1/posts`
                    , {headers : headers()}
                );

    if(!resoponse.ok) throw new Error(`글 목록을 불러오지 못했어요`);
    //console.log(resoponse);
    const data = await resoponse.json();
    //console.log("api/posts.js/data : ");
    //console.log( JSON.stringify(data));
    
    return data;

}

//신규
export async function createPost(post) {
    const res = await fetch(
                    `${SUPABASE_URL}/rest/v1/posts`
                    , {
                        method : "POST"
                      , headers : headers({'Content-Type' : 'application/json'})
                      , body : JSON.stringify( {title:post.title, body:post.body, user_id:4})
                    }
                );
    if(!res.ok) throw new Error(`저장실패`);
    const data = await res.json();
    return data;     
               
}

//수정
export async function updatePost({id, post}) {
    // `${SUPABASE_URL}/rest/v1/posts/:id`
    const res = await fetch(
                    `${SUPABASE_URL}/rest/v1/posts?id=eq.${id}`
                    , {
                        method : "PATCH"
                      , headers : headers({'Content-Type' : 'application/json'})
                      , body : JSON.stringify( {title:post.title, body:post.body})
                    }
                );
    if(!res.ok) throw new Error(`수정실패`);
    const data = await res.json();
    return data;     

}

//삭제
export async function deletePost({id}) {
    // `${SUPABASE_URL}/rest/v1/posts/:id`
    // eq. -> equal : id같으면
    const res = await fetch(
                    `${SUPABASE_URL}/rest/v1/posts?id=eq.${id}`
                    , {
                        method : "DELETE"
                      , headers : headers()
                    }
                );
    if(!res.ok) throw new Error(`삭제실패`);
    return true;     

}