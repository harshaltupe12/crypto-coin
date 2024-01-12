import React from 'react';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <Link href='/'>
          <img src="images/logo.png" alt="CoinPresale" className='img' />
        </Link>
      </div>
      <div className={styles.navbar_right}>
      <ul className={styles.navbar_links}>
          <li><a href="#"><span className={styles.icons}><AiFillHome color='#ffffff' size={20}/></span>Menu</a></li>
          <li><a href="#"><span className={styles.icons}><HiSpeakerphone size={20}/></span>Blog</a></li>
          <li><a href="#"><span className={styles.icons}><FaHandshake size={20}/></span>Promote</a></li>
          <li><a href="#"><span className={styles.icons}><FaSearch size={20}/></span>Partners</a></li>
        </ul>
      </div>
      <div className={styles.search_bar}>
          <input type="text" placeholder="Search Coins" />
          <FaSearch color='#ffffff'/>
        </div>
        <div className={styles.btn_container}>
        <Link href="/submitCoin" className={styles.nav_button1}><button >Submit Coin</button></Link>
        <Link href="/login" className={styles.nav_button2}><button>Log In</button></Link>
        </div>
      
    </nav>
  );
};

export default Navbar;


