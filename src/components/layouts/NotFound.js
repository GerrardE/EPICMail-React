import React from 'react';
import { ButtonLink } from '../commons/Button';

export const NotFound = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner">
        <div className="middle">
          <h1 className="welcome-header">404</h1>
          <br />
          <p className="welcome-note">Oops! The page you are looking for could not be found.</p>
          <br />
          <ButtonLink href="/" linkName="Go Home" linkClass="homebtn" />
        </div>
      </div>
    </div>
  )
}

export default NotFound;
