import React from 'react';
import styles from '../styles/BottomBanner.module.scss';

const BottomBanner = () => {
  return (  
    <div class={styles.container}>
        <div className={styles.sticky_footer}>
            <img src='images/banner1.png'/>
        </div>
    </div>
  )
}

export default BottomBanner