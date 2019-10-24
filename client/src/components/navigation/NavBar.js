import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navBarStyles.css';

const NavBar = () => (
  <div id='nav'>
  <ul>
    <li>
      <Link to='/'>HOME</Link>
    </li>
    <li>
      <NavLink to='/registration' activeClassName="current">REGISTRATION</NavLink>
    </li>
    <li>
      <NavLink to='/contact' activeClassName="current">CONTACT</NavLink>
    </li>
    <li>
      <NavLink to='/activities' activeClassName="current">ACTIVITIES</NavLink>
    </li>
    <li>
      <NavLink to='/people' activeClassName="current">PEOPLE</NavLink>
    </li>
    <li>
      <NavLink to='/restrictions' activeClassName="current">RESTRICTIONS</NavLink>
    </li>
  </ul>
  </div>
);

export default NavBar;
