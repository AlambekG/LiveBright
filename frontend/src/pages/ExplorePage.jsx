import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function ExplorePage() {
  return (
    <div>
      <img className={styles.background} src='img/ExplorePage.png'></img>
      
      {/* <div style="width: 350px; margin-left:25px; text-align: center;">
            <% events.forEach(event => { %>
            <% console.log(event) %>
            <div style="box-shadow: 0px 0px 10px rgba(0,0,0,0.1); padding: 10px; margin-bottom: 20px;">
                <h2> <%= event.title %> </h2>
                <p> <%= event.date %> </p>
                <p> <%= event.description %> </p>
            </div>
            <% }) %>

        </div>

        <form action="/event" method="get">
            <button  type="submit" style="border:none; background-color: transparent;
                position:absolute; left:30px;top: 100px; width:350px;height: 240px;">  
                 </button>
        </form> */}
      <Footer />
    </div>
  );
}

export default ExplorePage;
