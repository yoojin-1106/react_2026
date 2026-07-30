const url = 'https://raw.githubusercontent.com/wizard113/datas/main/movieinfo.json';


// function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> 
//  => fetch는 Promise이고, Response를 반환한다.
fetch(url)
    .then((response) => {
        // response가 가져오는 것들
        //console.log(response.status);
        //console.log(response.statusText);
       // console.log(response.headers);
       // console.log(response.body);
        //console.log(response.bodyUsed);
        //console.log(response.ok);
        //console.log(response.redirected);
        //console.log(response.type);
        //console.log(response.url);
        return response.json();
    })
    .catch(() => {
        console.log('에러가 발생하였습니다.');
    })
    .then((data) => {
        if(!data || !data.articleList || data.articleList.length <= 0){
           throw Error('데이터가 없습니다.'); 
        }
        //console.log(data);
       // console.log(data.articleList);
        return data.articleList;
    })
    .catch((error) => {
        console.error('data error : ', error);
    })
    .then((movies) => {
        //console.log(movies);
        // ReadonlyArray.map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
        return movies.map((movie, idx) => {
                return {title : movie.title, rank : idx + 1, author : movie.authorName};
            })
    })
    .catch((error) => {
        console.error('movies error : ', error);
    })
    .then((infos) => {
        //console.log(infos);
        for(let info of infos){
            console.log(`[${info.rank}위] ${info.title} - ${info.author}`);
        }
    })  
    .catch((error) => {
        console.error('infos error : ', error);
    })