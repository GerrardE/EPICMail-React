import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => (
  <div>
    <footer className="footer">
      <p>
        {' '}
Copyright &copy;
        {' '}
        {' '}
        {new Date().getFullYear()}
        {' '}
        <NavLink to="/dashboard">
          <strong>EPIC Mail</strong>
        </NavLink>
        {' '}
All Rights Reserved.
      </p>
    </footer>
  </div>
);

export default Footer;
