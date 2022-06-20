import { Link } from 'gatsby';
import React from 'react';
import logo from '../../assets/logo-medium.webp';
import { pagesLinks } from '../../content';

const Navbar = () => {
  return (
    <>
      <nav />
      <div></div>
      <div>
        {pagesLinks.map(({ name, link }) => (
          <Link
            to={link}
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            {name}
          </Link>
        ))}
      </div>
      <nav />
    </>
  );
};

export default Navbar;
