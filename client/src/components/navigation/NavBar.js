import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBarStyles.css';

const NavBar = (props) => (
  <div id='nav'>
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/people' onClick={props.displayRegistrationForm}>Registration</Link>
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
    <li>
      <Link to='/activities'>Activities</Link>
    </li>
    <li>
      <Link to='/people' onClick={props.displayRegisterList}>People</Link>
    </li>
    <li>
      <Link to='/restrictions'>Restrictions</Link>
    </li>
  </ul>
  </div>
);

export default NavBar;
