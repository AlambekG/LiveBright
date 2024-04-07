import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function MainPage() {
  function toggleDropdown() {
      var dropdownContent = document.querySelector(".dropdown-content");
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  }
  function toggleDropdown2() {
      var dropdownContent = document.querySelector(".dropdown-content2");
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  }
  var input = document.getElementById("myInput");
  var form = document.getElementById("searchBox");

  function checkInput(event) {
      if (event.inputType === "insertLineBreak") {
          form.submit()
      }
  }

  return (
    <div>
      <img className={styles.background} src='img/MainPage.png'></img>


      {/* <button style="position:absolute;background-color: transparent; border:none; left:35px; top:30px; width:150px; height: 45px;"></button>
      

      <div class="dropdown" style="left: 310px; top:35px">
          <button class="dropbtn" onclick="toggleDropdown2()"></button>
          <div class="dropdown-content2">
            <a href="#"> <b>Empty for now</b></a>
          </div>
        </div>   

      <div class="dropdown" style="left: 358px; top:30px">
          <button class="dropbtn" onclick="toggleDropdown()"></button>
          <div class="dropdown-content">

            <a href="#"> <b>My Page</b></a>
            <a href="#"><b>Messages</b></a>
            <a href="#"><b>Settings</b></a>
          </div>
      </div>      
      
      <form id="searchBox" action="/main" method="POST">
          <input type="text" id="myInput" name="search" 
              style="position:absolute; left:140px;top:160px; border:none; outline: none; font-size:15px;">
      </form>

      <form action="/mainAdd" method="POST">
          <button type="submit" value="Workshops" name="name" style="background-color: transparent;
              position:absolute; left:140px;top:110px;border:none; outline: none; font-size:20px;">  
               </button>
          <button type="submit" value="Movies" name="name" style="background-color: transparent;
          position:absolute; left:225px;top:110px;border:none; outline: none; font-size:20px;">  
           </button>
          <button type="submit" value="Games" name="name" style="background-color: transparent;
          position:absolute; left:310px;top:110px;border:none; outline: none; font-size:20px;">  
           </button>

      </form>

      <div class="box" style="position:absolute; left:30px; top:175px; display: flex; flex-direction: row;">
          <% for(let i = 0;i < newListItems.length;i ++){ %>
              <p style="background-color: #7AFFD7; margin-right: 5px;"> <%= newListItems[i] %> </p>
          <% } %>
      </div>


      <form action="/day" method="get">

          <div style="position:absolute; left:143px;top:420px;display: flex;  flex-direction: row; "> 
          <% for(let i = 0;i < newListItems.length;i ++){  %>
              <div style=" background-color: rgba(255, 171, 114, 0.3); 
              border-radius: 50%; width: 30px; height: 30px; margin-right: 27px;"> </div>
          <% } %>
          </div>

          <div style="position:absolute; left:143px;top:420px;display: flex;  flex-direction: row; "> 
              <% for(let i = 0;i < newListItems.length;i ++){  %>
                  <button  type="submit" style="border:none;background-color: transparent;
                  width: 5px;margin-right: 30px;"></button>  </button>
              <% } %>
              </div>
      </form> 
      */}

      <Footer />
    </div>
  );
}

export default MainPage;
