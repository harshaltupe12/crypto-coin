import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contain}>
      <div className={styles.coinpresale}>
          
          <ul>
            <li><Link href='/' >
              <img src="images/logo.png" alt="CoinPresale" className='img' />
              </Link>
            </li>
            <li><Link href='/'>
              <FaTelegramPlane size={20} />
              </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href='/'>
              <FaTwitter size={20}/>
              </Link>
            </li>
            <li>
            <div className={styles.box}>
              <div className={styles.rectangle}>
                <a href="#" className={styles.button}>Subscribe</a>
                <input type='text' placeholder='Enter email here' className={styles.enterEmail}/>
              </div>
            </div>
            </li>
            </ul>
        </div>
        <div class={styles.col}>
          <h2>Crypto Currency</h2>
          <ul>
            <li>All</li>
            <li>Presale</li>
            <li>ICO</li>
            <li>IEO</li>
          </ul>
        </div>
        <div class={styles.col}>
          <h2>CoinPresale</h2>
          <ul>
            <li>Submit Coin</li>
            <li>Update Coin</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class={styles.col}>
          <h2>Services</h2>
          <ul>
            <li>Advertising</li>
            <li>Partners</li>
            <li>KYC Verification</li>
            <li>AMA Hosting</li>
          </ul>
        </div>
        <div class={styles.col}>
          <h2>Company</h2>
          <ul>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        
        
        
      </div>
      <div className={styles.cpr}>
          <p>&copy; 2023 CoinPresale. All rights reserved.</p>
      </div>
      
      
    </footer>
      


  )
}

export default Footer