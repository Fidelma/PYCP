import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/registration'>Registration</Link>
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
    <li>
      <Link to='/activities'>Activities</Link>
    </li>
    <li>
      <Link to='/people'>People</Link>
    </li>
  </ul>
);

export default NavBar;
