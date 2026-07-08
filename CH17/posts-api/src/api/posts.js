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