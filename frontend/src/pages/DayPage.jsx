import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function DayPage() {
  return (
    <div>
      <img className={styles.background} src='img/DayPage.png'></img>

      {/* <form action="/gotoEvent" method="POST">
          <button  type="submit" style="border:none; background-color: transparent;
              position:absolute; left:30px;top: 100px; width:350px;height: 240px;">  
               </button>
      </form> */}

      <Footer />
    </div>
  );
}

export default DayPage;
