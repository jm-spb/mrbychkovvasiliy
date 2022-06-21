import React from 'react';
import '../../styles/normalize.scss';
import * as styles from './Layout.module.scss';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
