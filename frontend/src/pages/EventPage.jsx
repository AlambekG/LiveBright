import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function EventPage() {
  return (
    <div>
      <img className={styles.background} src='img/EventPage.png'></img>
      <Footer />
    </div>
  );
}

export default EventPage;
