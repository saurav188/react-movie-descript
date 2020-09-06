import {useState,useEffect}  from 'react';

export default function SearchFetcher(url){
    useEffect(()=>{
        getmovies(url)
    },[url]);

    const [movies,addMovies]=useState([]);

    async function getmovies(url){
        var response=await fetch(url);
        var json_response=await response.json();
        addMovies(json_response.Search);
    };
    return movies
}