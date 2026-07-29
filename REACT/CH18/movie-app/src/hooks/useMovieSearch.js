import { useState, useEffect } from "react";
import { searchMovies } from "../api/movies";

export function useMovieSearch(){
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState([]);
    const [searched, setSearched] = useState(false);


    async function search(keyword){
        
        const trimmed = keyword.trim();
        if(!trimmed){
            setResult([]);
            setError('');
            setSearched(false);
            return;
        }

        setLoading(true);
        setError('');
        setSearched(true);

        try {
            const data = await searchMovies(trimmed);
            setResult(data);
        } catch (e) {
            console.error(e);
            setError(e.message);
        }finally{
            setLoading(false);
            setSearched(false);
        }

    }

    return {query, setQuery, loading, error, result, searched, search};

}