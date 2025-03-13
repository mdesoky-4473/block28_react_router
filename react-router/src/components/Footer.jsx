import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/blue">Blue</Link> | 
        <Link to="/red">Red</Link> | 
        <Link to="/koala">Koala</Link>
      </nav>
    </footer>
  );
}
