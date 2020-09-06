import React from 'react';
import {Link} from 'react-router-dom';

function ChangePageLinks(props){
    let prev_page_path=props.prev_path;
    let next_page_path=props.next_path;
    let page_no=props.page;
    return(
        <div className="change-page">
            <Link to={prev_page_path} className="page-change-btn">
                prev
            </Link>
            <span>{page_no}</span>
            <Link to={next_page_path} className="page-change-btn">
                next
            </Link>
        </div>
    )
};

export default ChangePageLinks;