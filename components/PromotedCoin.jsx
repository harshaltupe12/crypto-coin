import React from 'react';
import styles from '../styles/PromotedCoin.module.scss';
import data from '@/dataSource';
const PromotedCoin = () => {
  return (
    <div className={styles.promotedCoin}>
      {
        data.map(item =>(
        <div className={styles.promotedContainer}>
        <div className={styles.top}>
          <div className={styles.promotedImg}>
            <img src="https://shorturl.at/iANR4" alt="dummy image" className={styles.promotedImg}/>
          </div>
          <div className={styles.promotedTitle}>
            {item.title}
          <span className={styles.subTitle}>({item.subtitle})</span>
          </div>
        </div>

        <div className={styles.mid}>
          <div className={styles.promot}>
            Promot
            <span className={styles.promoteS}>
              {item.promote}
            </span>
          </div>

          <div className={styles.vote}>
            vote
            <span className={styles.voteS}> 
              {item.vote}
            </span>
          </div>

          <div className={styles.launch}>
            launch
            <span className={styles.launchS}>
              {item.launch}
            </span>
          </div>

          <div className={styles.chain}>
            chain
            <span className={styles.chainS}>
              {item.chain}
            </span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.title}>
            Presale
          </div>
          <div className={styles.loader}>
          </div>
        </div>
      </div>
      ))
      }
      </div>
  )
}

export default PromotedCoin