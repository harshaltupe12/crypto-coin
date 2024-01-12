// import React, { useState } from 'react';
import styles from '../styles/CoinTable.module.scss';
import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from 'react';



const CoinTable = () => {

  const [selectedType, setSelectedType] = useState('All'); // Default selected type

  const handleTypeChange = (type) => {
    setSelectedType(type);

    
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing':
        return styles.ongoing;
      case 'Ended':
        return styles.ended;
      case 'Upcoming':
        return styles.upcoming;
      default:
        return '';
    }
  };
  
  return(
    <div className={styles.container}>
      <div className={styles.top_of_table}>
        <div className={styles.name}>Coin</div>
        <div className={styles.table_nav}>
          <div className={styles.left_nav}>
          <button>Upcoming</button>
          <button>Ongoing</button>
          <button>Ended</button>
          <button>All</button>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Type</button>
            <div className={styles.dropdownContent}>
              <button onClick={() => handleTypeChange('ALL')}>ALL</button>
              <button onClick={() => handleTypeChange('Presale')}>Presale</button>
              <button onClick={() => handleTypeChange('Fair Launch')}>Fair Launch</button>
              <button onClick={() => handleTypeChange('ICO')}>ICO</button>
              <button onClick={() => handleTypeChange('IDO')}>IDO</button>
            </div>
          </div>
          </div>
          <div className={styles.right_nav}>
          <div className={styles.search_bar}>
          <input type="text" placeholder="Search Coins" />
          <FaSearch color='#ffffff'/>
          </div>
          </div>
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.no}>No</div>
        <div className={styles.coin}><p>Coin</p></div>
        <div className={styles.status}>Status</div>
        <div className={styles.an_hour}>1 hr</div>
        <div className={styles.twofo}>24 hrs</div>
        <div className={styles.chain}> Chain</div>
        <div className={styles.stars}>Stars</div>
        <div className={styles.market}>Market Cap</div>
        <div className={styles.launch}>Launch</div>
        <div className={styles.member}>Member</div>
        <div className={styles.votes}>Votes / Promote</div>
        <div className={styles.wishlist}></div>
      </div>
      <div className={styles.table_data}>
        <div className={styles.no}>1</div>
        <div className={styles.coin}> 
        <img src='images/coin1x.png'/>  
        <p>GigaChadGPT</p>
        </div>
        <div className={`${styles.status} ${getStatusColor("Ongoing")}`}>
          Ongoing
        </div>
        <div className={styles.an_hour}><p className={styles.p1}>2.5 M</p><p className={styles.p2}>softcap</p></div>
        <div className={styles.twofo}><p className={styles.p1}>2.5 M</p><p className={styles.p2}>hardcap</p></div>
        <div className={styles.chain}> ETH</div>
        <div className={styles.stars}>Stars</div>
        <div className={styles.market}><div>Presale</div></div>
        <div className={styles.launch}>Launch</div>
        <div className={styles.member}>Member</div>
        <div className={styles.votes}><button>vote</button><button>promote</button></div>
        <div className={styles.wishlist}></div>
      </div>
      <div className={styles.table_data}>
        <div className={styles.no}>1</div>
        <div className={styles.coin}> 
        <img src='images/coin1x.png'/>  
        <p>GigaChadGPT</p>
        </div>
        <div className={`${styles.status} ${getStatusColor("Upcoming")}`}>
          Upcoming
        </div>
        <div className={styles.an_hour}><p className={styles.p1}>2.5 M</p><p className={styles.p2}>softcap</p></div>
        <div className={styles.twofo}><p className={styles.p1}>2.5 M</p><p className={styles.p2}>hardcap</p></div>
        <div className={styles.chain}> ETH</div>
        <div className={styles.stars}>Stars</div>
        <div className={styles.market}><div>Presale</div></div>
        <div className={styles.launch}>Launch</div>
        <div className={styles.member}>Member</div>
        <div className={styles.votes}><button>vote</button><button>promote</button></div>
        <div className={styles.wishlist}></div>
      </div>
      <div className={styles.table_data}>
        <div className={styles.no}>1</div>
        <div className={styles.coin}> 
        <img src='images/coin1x.png'/>  
        <p>GigaChadGPT</p>
        </div>
        <div className={`${styles.status} ${getStatusColor("Ended")}`}>
          Ended
        </div>
        <div className={styles.an_hour}><p className={styles.p1}>2.5 M</p><p className={styles.p2}>softcap</p></div>
        <div className={styles.twofo}><p className={styles.p1}>2.5 M</p><p className={styles.p2}>hardcap</p></div>
        <div className={styles.chain}> ETH</div>
        <div className={styles.stars}>Stars</div>
        <div className={styles.market}><div>Presale</div></div>
        <div className={styles.launch}>Launch</div>
        <div className={styles.member}>Member</div>
        <div className={styles.votes}><button>vote</button><button>promote</button></div>
        <div className={styles.wishlist}></div>
      </div>
      

    </div>

    )
  }
  
  
  export default CoinTable