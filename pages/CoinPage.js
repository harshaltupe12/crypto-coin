import UserCard from '@/components/UserCard'
import style from '../styles/CoinPage.module.scss'
import React from 'react'
import DescriptionCard from '@/components/DescriptionCard'
import PresaleAnalytic from '@/components/PresaleAnalytic'
import TokenRoadmap from '@/components/TokenRoadmap'

const CoinPage = () => {
  return (
    <div className={style.coinpage}>
        <div className="useCard">
        <UserCard/>
        <DescriptionCard/>
        <PresaleAnalytic/>
        <TokenRoadmap/>
        </div>
    </div>
  )
}

export default CoinPage