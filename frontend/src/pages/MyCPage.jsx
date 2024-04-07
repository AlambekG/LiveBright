import React from 'react';
import styles from './page.module.css';
import Footer from '../components/Footer'

function MyCalendarPage() {
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
      <img className={styles.background} src='img/MyCalendarPage.png'></img>

      {/* <div class="dropdown" style="left: 305px; top:35px">
          <button class="dropbtn" onclick="toggleDropdown2()"></button>
          <div class="dropdown-content2">
            <a href="#"> <b>Empty for now</b></a>
          </div>
        </div>   

      <div class="dropdown" style="left: 355px; top:30px">
          <button class="dropbtn" onclick="toggleDropdown()"></button>
          <div class="dropdown-content">
            <a href="#"> <b>My Page</b></a>
            <a href="#"><b>Messages</b></a>
            <a href="#"><b>Settings</b></a>
          </div>
        </div>      
      <form id="searchBox" action="/myC" method="POST">
          <input type="text" id="myInput" name="search" 
              style="position:absolute; left:150px;top:95px; border:none; outline: none; font-size:15px;">
      </form>

      <div class="box" style="position:absolute; left:30px; top:115px; display: flex; flex-direction: row;">
          <% for(let i = 0;i < newListItems.length;i ++){ %>
              <p style="background-color: #7AFFD7; margin-right: 5px;"> <%= newListItems[i] %> </p>
          <% } %>
      </div>


      <form action="/day" method="get">

          <div style="position:absolute; left:143px;top:423px;display: flex;  flex-direction: row; "> 
          <% for(let i = 0;i < newListItems.length;i ++){  %>
              <div style=" background-color: rgba(255, 171, 114, 0.3); 
              border-radius: 50%; width: 30px; height: 30px; margin-right: 27px;"> </div>
          <% } %>
          </div>

          <div style="position:absolute; left:143px;top:423px;display: flex;  flex-direction: row; "> 
              <% for(let i = 0;i < newListItems.length;i ++){  %>
                  <button  type="submit" style="border:none;background-color: transparent;
                  width: 5px;margin-right: 30px;"></button>  </button>
              <% } %>
              </div>

          <% if (isAdded == true){ %>
              <img style="position:absolute;left:240px;top:490px; width:45px; height:40px" src="images/addedDay.png">

              <button type="submit" style="position:absolute; border:none; background-color: transparent; left:240px;top:490px; 
                  width:40px; height: 40px;"></button>  </button>
          <% } %>

      </form> */}
        
          
      <Footer />
    </div>
  );
}

export default MyCalendarPage;
