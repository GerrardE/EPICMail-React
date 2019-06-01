import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <p>Copyright &copy; {new Date().getFullYear()} <Link to="/dashboard">
        <strong>EPIC Mail</strong></Link> All Rights Reserved.</p>
      </footer>
    </div>
  )
}
