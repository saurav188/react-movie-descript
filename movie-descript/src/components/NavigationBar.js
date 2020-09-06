import React from 'react';
import '../App.css';
import NavLinks from "./NavLinks.js"

function NavBar() {
  return (
    <nav>
        <div className="logo">
            <h4>MoViE DesCriPt</h4>
        </div>  
        <NavLinks />
        <hr></hr>
    </nav>
  );
}

export default NavBar;