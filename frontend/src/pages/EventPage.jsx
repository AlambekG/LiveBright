import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function EventPage() {
  return (
    <div>
      <img className={styles.background} src='img/EventPage.png'></img>
      {/* <form action="event" method="POST">
          <button style="position:absolute;background-color:transparent; border:none; left:185px; top:480px; 
          width:40px; height: 40px;"></button>
          <button style="position:absolute; background-color:transparent; border:none; left:145px; top:530px; 
          width:130px; height: 15px;"></button>
      </form>

      <% if (isAdded == true){ %>
          <img style="position:absolute;left:180px;top:490px; width:45px; height:40px" src="images/added.png">
      <% } %> */}
      <Footer />
    </div>
  );
}

export default EventPage;
