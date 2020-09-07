import React from 'react';
import {
    Link
} from 'react-router-dom'
import '../App.css';

function NavLinks() {
  return (
    <div className="links-container">
        <ul className="links">
            <Link to='/' className="link">
                <li>Home</li>
            </Link>
        </ul>
    </div>
  );
};

export default NavLinks;