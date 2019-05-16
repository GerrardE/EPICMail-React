import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Navbar() {
  return (
      <nav className="topnav" id="topnav">
        <Link className="navbar-brand" to="/">EPIC | Mail</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login"className="active">Login</Link>
      </nav>
  )
}