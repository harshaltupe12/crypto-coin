import UserCard from '@/components/UserCard'
import style from '../styles/CoinPage.module.scss'
import React from 'react'
import DescriptionCard from '@/components/DescriptionCard'
import PresaleAnalytic from '@/components/PresaleAnalytic'
import TokenRoadmap from '@/components/TokenRoadmap'
import TopBuyer from '@/components/TopBuyer'
import { CoinTable, PromotedCoin } from '@/components'

const CoinPage = () => {
  return (
    <div className={style.coinpage}>
        <div className="useCard">
        <UserCard/>
        <DescriptionCard/>
        <PresaleAnalytic/>
        <TokenRoadmap/>
        <TopBuyer/>
        <CoinTable/>
        </div>
    </div>
  )
}

export default CoinPage