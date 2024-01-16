import UserCard from '@/components/UserCard'
import style from '../styles/CoinPage.module.scss'
import React from 'react'
import DescriptionCard from '@/components/DescriptionCard'
import PresaleAnalytic from '@/components/PresaleAnalytic'

const CoinPage = () => {
  return (
    <div className={style.coinpage}>
        <div className="useCard">
        <UserCard/>
        <DescriptionCard/>
        <PresaleAnalytic/>
        </div>
    </div>
  )
}

export default CoinPage