import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBarStyles.css';

const NavBar = () => (
  <div id='nav'>
  <ul>
    <li>
      <Link to='/'>HOME</Link>
    </li>
    <li>
      <Link to='/registration'>REGISTRATION</Link>
    </li>
    <li>
      <Link to='/contact'>CONTACT</Link>
    </li>
    <li>
      <Link to='/activities'>ACTIVITIES</Link>
    </li>
    <li>
      <Link to='/people'>PEOPLE</Link>
    </li>
    <li>
      <Link to='/restrictions'>RESTRICTIONS</Link>
    </li>
  </ul>
  </div>
);

export default NavBar;
