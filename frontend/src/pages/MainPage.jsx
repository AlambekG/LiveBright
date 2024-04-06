import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function MainPage() {
  return (
    <div>
      <img className={styles.background} src='img/MainPage.png'></img>
      <Footer />
    </div>
  );
}

export default MainPage;
