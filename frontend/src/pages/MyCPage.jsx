import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function MyCalendarPage() {
  return (
    <div>
      <img className={styles.background} src='img/MyCalendarPage.png'></img>
      <Footer />
    </div>
  );
}

export default MyCalendarPage;
