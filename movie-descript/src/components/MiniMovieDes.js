import React from 'react';
import {
    Link
} from 'react-router-dom'
import '../App.css';

function MiniMovieDes(props){
    var product_description_url="/movie_description/"+String(props.data.imdbID);
    return(
        <div>
            <Link to={product_description_url} id={props.data.imdbID} className="movie-link"> 
                <div className="movie-description">
                    <div className="image-container">
                        <img src={props.data.Poster} alt="movie poster"></img>
                    </div>
                    <h5>{props.data.Title}</h5>
                    <p>
                        <span>Released year: </span>
                        <span>{props.data.Year}</span>
                    </p>
                </div>
            </Link>  
        </div>
    );
};

export default MiniMovieDes