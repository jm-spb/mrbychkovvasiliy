import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.top}>
        <Link to="/" className={styles.heading}>
          Центр развития охраны труда
        </Link>
        <a href="mailto:Ohranatryda@inbox.ru" className={styles.email}>
          Ohranatryda@inbox.ru
        </a>
        <span>8-800-505-20-41</span>
      </div>
      <div className={styles.bottom}>
        <span>
          &copy;{`${new Date().getFullYear()} ООО "Центр развития охраны труда"`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
