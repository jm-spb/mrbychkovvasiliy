import { Link } from 'gatsby';
import React from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import classNames from 'classnames';
import logo from '../../assets/logo-medium.webp';
import { additionalNavLinks, mainNavLinks } from '../../content';
import * as styles from './Navbar.module.scss';
import { useOnClickOutside } from '../../hooks/useOnClick';

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setIsActive(false));
  // const act = React.useRef(false);
  console.log(isActive);

  const toggleButton = () => setIsActive((prevState) => !prevState);
  // const toggleButton = () => {
  //   console.log('toggle');
  //   if (!isActive) {
  //     document.addEventListener('click', handleOutsideClick);
  //   } else {
  //     document.removeEventListener('click', handleOutsideClick);
  //   }

  //   setIsActive((prevState) => !prevState);
  // };

  // const handleOutsideClick = (e) => {
  //   console.log('handle');
  //   console.log(isActive);

  //   if (!ref.current.contains(e.target)) {
  //     toggleButton();
  //   }
  // };

  const closeMenu = () => setIsActive(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link to="/" className={styles.logoName}>
          <img src={logo} alt="Центр развития охраны труда" width={80} height={80} />
          <span className={styles.name}>Центр развития охраны труда</span>
        </Link>
        <button className={styles.button}>Консультация</button>
      </div>
      <div ref={ref} className={styles.links}>
        <div className={classNames(styles.container, { [styles.isActive]: isActive })}>
          {mainNavLinks.map(({ name, link }) => (
            <Link key={name} to={link} className={styles.mainLink} onClick={closeMenu}>
              {name}
            </Link>
          ))}
          <div className={styles.dropdown}>
            <span className={styles.more}>Ещё</span>
            <div className={styles.dropdownContent}>
              {additionalNavLinks.map(({ name, link }) => (
                <Link key={name} to={link} className={styles.addLink} onClick={closeMenu}>
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
