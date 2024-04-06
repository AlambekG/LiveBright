import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function AddEventPage() {
  return (
    <div>
      <img className={styles.background} src='img/AddEventPage.png'></img>
      <Footer />
    </div>
  );
}

export default AddEventPage;
