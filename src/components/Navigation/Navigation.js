import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Main
      </NavLink>
      <NavLink exact to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
