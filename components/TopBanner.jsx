import React from 'react';
import styles from '../styles/TopBanner.module.scss';

const TopBanner = () => {
  return (
    <div class={styles.container}>
        <div class={styles.row}>
            <img src='images/banner1.png'/>
        </div>
    </div>
  )
}

export default TopBanner