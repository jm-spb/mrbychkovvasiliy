import React from 'react';
import * as styles from './Navbar.module.scss';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { HamburgerSqueeze } from 'react-animated-burgers';
import classNames from 'classnames';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { additionalNavLinks, mainNavLinks } from '../../content/Navbar';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const ref = React.useRef(null);
  const toggleButton = () => setIsActive((prevState) => !prevState);
  const closeMenu = () => setIsActive(false);
  useOnClickOutside(ref, () => setIsActive(false));

  React.useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
  }, [isActive]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link to="/" className={styles.logoName}>
          <StaticImage
            src="../../assets/images/logo-medium.webp"
            alt="Центр развития охраны труда"
            width={80}
            height={80}
            placeholder="blurred"
            layout="fixed"
          />
          <span className={styles.name}>Центр развития охраны труда</span>
        </Link>
        <button className={styles.button} onClick={() => scrollTo('#request-form')}>
          Консультация
        </button>
      </div>
      <div className={styles.links}>
        <div className={styles.container}>
          <div className={classNames(styles.menu, { [styles.isActive]: isActive })}>
            {mainNavLinks.map(({ name, link }) => (
              <Link key={name} to={link} className={styles.mainLink} onClick={closeMenu}>
                {name}
              </Link>
            ))}
            <div className={styles.dropdown}>
              <span className={styles.more}>Ещё</span>
              <div ref={ref} className={styles.dropdownContent}>
                {additionalNavLinks.map(({ name, link }) => (
                  <Link
                    key={name}
                    to={link}
                    className={styles.addLink}
                    onClick={closeMenu}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.phoneNumber}>8-800-505-20-41</span>
          <div className={styles.hamburger}>
            <HamburgerSqueeze
              buttonWidth={24}
              barColor="white"
              {...{ isActive, toggleButton }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
