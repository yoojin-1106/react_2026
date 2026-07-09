import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import { useMovieSearch } from "../hooks/useMovieSearch"
import MovieGrid from "../components/MovieGrid";


export default function Home(){
    //console.log("Home");
    const { query, setQuery, loading, error, result, searched, search } = useMovieSearch();
    // useMovieSearch 훅의 비지니스, 화면제어 필드 

    function renderResults(){
        //jsx반환
        if(loading){
            return <div>검색중</div>;
        }

        if(error){
            return <div>에러발생</div>;
        }

        return (
            <MovieGrid
                movies = {result}
                emptyText = "결과가 없습니다."
            />
        )
    }

    return (
        <div>
            <SearchBar 
                value = {query}
                onChange = {setQuery}
                onSearch = {search}
            />
            {renderResults()}
        </div>
    )
}