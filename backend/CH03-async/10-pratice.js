const url = 'https://raw.githubusercontent.com/wizard113/datas/main/movieinfo.json';

async function movieView() {
    try {
        const data = await fetch(url).then((response) => {return response.json()}).catch(() => {console.log('response 에러')});
        //console.log(data);
        return data.articleList;
    } catch (error) {
        console.log('movieView error', error);
        
    }
};

movieView().then(console.log);