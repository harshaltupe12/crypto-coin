import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';
import TopBanner from './TopBanner';
import MidBanner from './MidBanner';
import BottomBanner from './BottomBanner';
import  CoinTable  from './CoinTable';
import CoinPage from '@/pages/CoinPage';
const Layout = ({ children }) => {
  return (
    <div>
        <Head>
            <title>CoinPresale</title>
            <link rel="icon" href="images/logo1.png" />
        </Head>
        <header>
            <Header />
            <Navbar/>
        </header>
        <main className='main-container'>
            {/* <TopBanner/>
            {children}
            <CoinTable/> */}
            <CoinPage/>
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout