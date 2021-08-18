import React from 'react';
import { Link } from 'react-router-dom';
import './style/header.css';

const Header = () => (
  <header>
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link className="special" to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
