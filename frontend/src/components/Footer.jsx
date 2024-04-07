import React from 'react';
import styles from './Footer.module.css'
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      <footer className={styles.fixed_bottom_bar}>
        <form>
            <button className={styles.mainbtn} onClick={()=>navigate('/main')} type="submit"> </button>
            <button className={styles.expbtn} onClick={()=>navigate('/explore')} type="submit"> </button>
            <button className={styles.addbtn} onClick={()=>navigate('/add')} type="submit"> </button>
            <button className={styles.mybtn} onClick={()=>navigate('/my')} type="submit"> </button>
        </form>   
        
        <img className={styles.background} src="img/Footer.png"></img>
      </footer>
    </div>
  );
}

export default Footer;
