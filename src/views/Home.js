import React  from 'react';
import {FaSearch} from 'react-icons/fa'
import '../App.css';

function HomeView() {
    //handling search input
    function search(){
        let search_keyword=document.getElementById('search').value;
        let redirect_link="/Search/keyword="+search_keyword+"/page=1";
        window.location.href=redirect_link;
    };
    return (
        <div className="home-page">
            <div className="search-container">
                <input type='text' id="search" placeholder='Search here'></input>
                <button type='button' id="search-btn" onClick={()=>search()}>
                    <FaSearch className="search-icon"/>
                </button>
            </div>
        </div>
    )
};

export default HomeView;