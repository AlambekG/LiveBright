import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function DayPage() {
  return (
    <div>
      <img className={styles.background} src='img/DayPage.png'></img>
      <Footer />
    </div>
  );
}

export default DayPage;
