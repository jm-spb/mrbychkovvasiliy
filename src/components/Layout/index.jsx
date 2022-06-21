import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../../styles/normalize.scss';
import * as styles from './Layout.module.scss';

const Layout = ({ children }) => {
  console.log('INDEX');
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
