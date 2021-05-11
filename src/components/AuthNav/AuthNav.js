import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink exact to="/registration">
      Registration
    </NavLink>
    <NavLink exact to="/login">
      Login
    </NavLink>
  </div>
);

export default AuthNav;
