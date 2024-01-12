import React from "react";
// import { StateDefaultType } from "./StateDefaultType";
import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.topbar_left}>
          <div className={styles.col1}>Total Votes : <span class="stat">233,236,413</span></div>
          <div className={styles.col1}>Supported Chains : <span class="stat">9</span></div>
          </div>
        <div class={styles.container}>
        <div className={styles.topbar_middle}>
        <div className={styles.col1}>BTC Price : <span class="stat">340000</span></div>
        <div className={styles.col1}>ETH Price : <span class="stat">2300</span></div>
        <div className={styles.col1}>BNB Price : <span class="stat">229</span></div>
        </div>
        </div>  
        <div className={styles.topbar_right}>
          <a href="/register">Register</a> / <a href="/login">Login</a>
        </div>
      </div>
    </div>
    
  );
};

export default Header;