const BASE_URL = import.meta.env.VITE_OMDB_URL;
const API_KEY = import.meta.env.VITE_OMDB_KEY;
const URL_KEY = `${BASE_URL}?apikey=${API_KEY}`;

// i -> PK값 추측 
export async function searchMovies(query) {
    const keyword = query.trim();
  
    const url = `${URL_KEY}&s=${encodeURIComponent(keyword)}`
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`searchMovies 네트워크 응답이 올바르지 않습니다.`);
    }
        
    const data = await res.json();
    console.log(data);
   
    if(data.Resoponse === 'False'){
        return [];
    } 

    return data.Search; 
    // data = {Resoponse : Resoponse, Search : Search[영화목록], Error : Error} 
    
}


export async function getMovieDetail(id) {  
    const url = `${URL_KEY}&i=${encodeURIComponent(id)}&plot=full`
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`getMovieDetail 네트워크 응답이 올바르지 않습니다.`);
    }
        
    const data = await res.json();
   
    if(data.Resoponse === 'False'){
        throw new Error(data.Error || `영화를 찾을 수 없습니다.`);
    } 

    return data;     
    
}

