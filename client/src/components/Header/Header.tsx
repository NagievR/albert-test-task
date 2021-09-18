import React from 'react';
import { Link } from 'react-router-dom';
import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/">
        <h1>StarWarsAPI</h1>
      </Link>
    </header>
  );
};

export default Header;
