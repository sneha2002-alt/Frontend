import React from 'react';
import './Navbar.css';

import {
  IoSearchOutline,
  IoPersonOutline,
  IoBagOutline,
  IoBookmarkOutline,
} from 'react-icons/io5';

const Navbar = () => {
  return (
    // Header container
    <div className="header">
      <div className="section-a">
        {/* left-side website title */}
        <h1 className="title">TANN TRIM</h1>
        {/* right-side nav icons */}
        <div className="nav-icons">
          <IoSearchOutline className="icon" />
          <IoPersonOutline className="icon" />
          <IoBookmarkOutline className="icon" />
          <IoBagOutline className="icon" />
        </div>
      </div>
      {/* menu-items */}
      <ul className="menu">
        <li className="menuItem">Bags</li>
        <li className="menuItem">Travel</li>
        <li className="menuItem">Accesories</li>
        <li className="menuItem">Gifting</li>
        <li className="menuItem">Jewelery</li>
      </ul>
    </div>
  );
};

export default Navbar;
