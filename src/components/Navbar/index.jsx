import { Link } from 'gatsby';
import React from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import classNames from 'classnames';
import logo from '../../assets/logo-medium.webp';
import { additionalNavLinks, mainNavLinks } from '../../content';
import * as styles from './Navbar.module.scss';

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const toggleButton = () => setIsActive((prevState) => !prevState);

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link to="/" className={styles.logoName}>
          <img src={logo} alt="Центр развития охраны труда" width={80} height={80} />
          <span className={styles.name}>Центр развития охраны труда</span>
        </Link>
        <button className={styles.button}>Консультация</button>
      </div>
      <div className={styles.links}>
        <div className={classNames(styles.container, { [styles.isActive]: isActive })}>
          {mainNavLinks.map(({ name, link }) => (
            <Link
              to={link}
              className={styles.mainLink}
              // onClick={() => setIsActive(false)}
            >
              {name}
            </Link>
          ))}
          <div className={styles.dropdown}>
            <span className={styles.more}>Ещё</span>
            <div className={styles.dropdownContent}>
              {additionalNavLinks.map(({ name, link }) => (
                <Link
                  to={link}
                  className={styles.addLink}
                  // onClick={() => setIsActive(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <HamburgerSqueeze
          className={styles.hamburger}
          buttonWidth={24}
          barColor="white"
          {...{ isActive, toggleButton }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
