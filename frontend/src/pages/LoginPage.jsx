import React from 'react';
import styles from './page.module.css';

function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <img className={styles.background} src='img/Login.png'></img>

      {/* <form id="login-form" action="/" method="POST">

        <input type="text" id="user" name="username" 
            style="position:absolute; left:70px;top:287px; border:none; outline: none; font-size:15px;">
            
        <input type="password" id="password" name="password"
            style="position:absolute; left:70px;top:372px; border:none; outline: none; font-size:15px;">

        <button type="submit" style="border: none;background-color: transparent;
            position:absolute; left:105px;top:460px; ">  
                            </button>
      </form>

      <div class="error-container" <%= value %>>
        <div class="error-message">
          Ivalid username or password
        </div>
      </div> */}

    </div>
  );
}

export default LoginPage;
