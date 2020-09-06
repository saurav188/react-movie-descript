import React from 'react';
import Fetcher from '../hooks/Fetcher';

export default function MovieDescriptionView(match){
    const movie_id=match.match.params.id;
    const url='http://www.omdbapi.com/?apikey=59ecd04c&i='+movie_id;

    const movie=Fetcher(url);
    return(
        <div className="full-movie-description">
            <div className="image-container">
                <img src={movie.Poster} alt="movie poster"></img>
            </div>
            <div className="description">
                <h4>{movie.Title}</h4>
                <p>imdb Ratings: {movie.imdbRating}</p>
                <p>Rated:        {movie.Rated}</p>
                <p>Raleased:     {movie.Released}</p>
                <p>Year:         {movie.Year}</p>
                <p>Language:     {movie.Language}</p>
                <p>Country:      {movie.Country}</p>
                <p>Duration:     {movie.Runtime}</p>
                <p>Genre:        {movie.Genre}</p>
                <p>Writer:       {movie.Writer}</p>
                <p>Actors:       {movie.Actors}</p>
                <p>Awards:       {movie.Awards}</p>
                <p>Plot:         {movie.Plot}</p>
            </div>
        </div>
    );
};