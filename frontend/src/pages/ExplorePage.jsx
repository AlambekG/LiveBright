import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function ExplorePage() {
  return (
    <div>
      <img className={styles.background} src='img/ExplorePage.png'></img>
      <Footer />
    </div>
  );
}

export default ExplorePage;
