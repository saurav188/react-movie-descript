import React  from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import MiniMovieDes from '../components/MiniMovieDes'
import SearchFetcher from '../hooks/SearchFetcher'
import ChangePageLinks from '../components/ChangePageLinks'

function SearchView(match) {
    var page_no=match.match.params.pg_no;
    var search_keyword=match.match.params.keywords;
    function refreshPage(){ 
        window.location.reload(); 
    }
    const url=`https://www.omdbapi.com/?apikey=59ecd04c&s=${search_keyword}&page=${page_no}`;
    const movies=SearchFetcher(url);
    //handling error of having to many movies sent
    if(movies==null){
        return(
            <div className="home-page">
                Please enter a descriptive keyword to search<br></br>
                <Link to='/'>go to search again</Link><br></br>
                or <button type="button" onClick={refreshPage}>Reload</button>
            </div>
        )
    };
    let prev_page_no=page_no-1;
    if(prev_page_no===0){
        prev_page_no=1;
    };
    let next_page_no=parseInt(page_no)+1;
    let prev_page_path="/Search/keyword="+search_keyword+"/page="+prev_page_no;
    let next_page_path="/Search/keyword="+search_keyword+"/page="+next_page_no;
    return (
        //getting the search result
        <div className="home-page">
            <ChangePageLinks prev_path={prev_page_path} next_path={next_page_path} page={page_no}/>
            <div className="movies-container">
                {movies.map(movie=><MiniMovieDes key={movie.imdbID} data={movie}/>)}
            </div>
            <ChangePageLinks prev_path={prev_page_path} next_path={next_page_path} page={page_no}/>
        </div>
    )
};

export default SearchView;