import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header--title">FAKESTORE API</div>
      <div className="header--links">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </header>
  );
};
