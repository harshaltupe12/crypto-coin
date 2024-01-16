import UserCard from '@/components/UserCard'
import style from '../styles/CoinPage.module.scss'
import React from 'react'

const CoinPage = () => {
  return (
    <div className={style.coinpage}>
        <div className="useCard">
        <UserCard/>
        </div>
    </div>
  )
}

export default CoinPage