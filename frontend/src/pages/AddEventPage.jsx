import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function AddEventPage() {
  return (
    <div>
      <img className={styles.background} src='img/AddEventPage.png'></img>

      {/* <form action="/add" method="post"> 
          <input type="text" id="titleid" name="title" 
          style="position:absolute; left:155px;top:155px; border:none; outline: none; height: 50px"> 

          <input type="text" id="descriptionId" name="description" 
          style="position:absolute; left:50px;top:320px; border:none; outline: none; width: 300px; height:150px">
          <button type="submit" style="position:absolute; left:300px;top:670px; border:none; background-color: transparent; 
          outline: none; font-size: 30px;">
           </button>
      </form> */}

      <Footer />
    </div>
  );
}

export default AddEventPage;
