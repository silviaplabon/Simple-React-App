import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
           <h1 className="titleDesign">The Master Batters</h1>
           <nav>
               <a href="/home">Home</a>
               <a href="/players">Players</a>
               <a href="/more">More</a>
           </nav>
        </div>
    );
};
export default Header;
